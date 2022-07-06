<script setup lang="ts">
  // Hooks
  import { useI18n } from "vue-i18n";
  import { ref, reactive, onMounted } from "vue";
  import { videoApi } from "@/api"
  import { useRoute } from 'vue-router';

  // Components
  import { Page, Heading } from "@/components/structure";
  import { Button, Input, Textarea } from "@/components/ui";

  // Parts
  import { Metadata } from "./components"

  const route = useRoute();
  const { t } = useI18n();

  // Route props
  const postId = route.params.id;

  const albumList = ref([]);
  const loading = ref(false);
  const file: any = ref(null);

  const post = reactive({
    id: postId || null,
    title: "",
    description: "",
    runtime: "",
    author_id: null,
  });

  onMounted(async () => {
    // loading.value = true;
    // try {
    //   const response = await videoApi.list();
    //   videoList.value = response.data.video_list;
    // }
    // catch (error: any) {
    //   throw new Error(error);
    // }
    // finally {
    //   loading.value = false;
    // }
  });

  /**
   *
   */
  const handleFileUpload = (event: any) => {
    file.value = event.target.files[0];
  }

  /**
   *
   */
  const upload = async () => {
    const formData = new FormData();
    formData.append('file', file.value);

    try {
      const response = await videoApi.upload(formData);
      file.value = null;
    }
    catch (error: any) {
      throw new Error(error);
    }
  }

  /**
   *
   */
  const onSubmit = async () => {
    // console.log("onSubmit")
  }
</script>

<template>
  <Page class="page-profile-my-videos">
    <Heading>
      {{ $t('pages.studio.title') }}
    </Heading>

    <div class="grid grid-cols-3 gap-3 px-2">
      <section>
        <Metadata
          :post="post"
          v-model.title="post.title"
          v-model.description="post.description"
        />
      </section>

      <section>
        <div class="pb-3">
          <h3>Video file</h3>
          <p>Select a file for uploading: </p>
          <input
            type="file"
            @change="(e) => handleFileUpload(e)"
          />
          <p v-if="file">Selected file {{ file.name }}</p>


          <Button
            variant="primary"
            :disabled="loading"
            :loading="loading"
            @click="upload()"
          >
            {{ $t('app.upload') }}
          </Button>
        </div>
        <hr>
        <div class="pt-3">
          <h3>Preview poster</h3>
        </div>
      </section>
    </div>

  </Page>
</template>
