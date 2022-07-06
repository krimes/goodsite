<script setup lang="ts">
  // Hooks
  import { useI18n } from "vue-i18n";
  import { ref, onMounted } from "vue";
  import { videoApi } from "@/api"

  // Components
  import { Page, Heading } from "@/components/structure";
  import { PostCard } from "@/components/shared/post";
  import { Button } from "@/components/ui";

  const videoList = ref([]);
  const albumList = ref([]);
  const loading = ref(true);
  const file: any = ref(null);
  const modal = ref({
    visible: false,
    loading: false,
  });
  const { t } = useI18n();

  onMounted(async () => {
    loading.value = true;
    try {
      const response = await videoApi.list();
      videoList.value = response.data.video_list;
    }
    catch (error: any) {
      throw new Error(error);
    }
    finally {
      loading.value = false;
    }
  });

  /**
   *
   */
  const toggleModal = () => {
    modal.value.visible = !modal.value.visible;
  }

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
    modal.value.loading = true;
    const formData = new FormData();
    formData.append('file', file.value);

    try {
      const response = await videoApi.upload(formData);
      file.value = null;
    }
    catch (error: any) {
      throw new Error(error);
    }
    finally {
      modal.value.loading = false;
    }
  }
</script>

<template>
  <Page class="page-profile-my-videos">
    <Heading>
      {{ $t('pages.my_videos.title') }}
    </Heading>

    <div class="toolbar flex px-2 mb-4">
      <RouterLink to="/profile/studio" class="xx-button">
        Upload new video
      </RouterLink>

      <!-- <el-button
        type="primary"
        @click="toggleModal()"
        :disabled="loading"
      >
        Upload new video
      </el-button> -->

    </div>


    <it-modal
      v-model="modal.visible"

      width="60vw"
    >
      <template #header>
        <h3 style="margin: 0">Header</h3>
      </template>

      <template #body>
        <p>Select a file for uploading: </p>
        <input
          type="file"
          @change="(e) => handleFileUpload(e)"
        />
        <p v-if="file">Selected file {{ file.name }}</p>
      </template>

      <template #actions>
        <it-button
          type="primary"
          :disabled="modal.loading"
          :loading="modal.loading"
          @click="upload()"
        >
          Upload
        </it-button>
      </template>
    </it-modal>


    <template v-if="loading">
      <it-loading class="mx-auto" />
    </template>

    <template v-else>
      <div
        v-if="videoList.length > 0"
        class="grid grid-cols-4 gap-3 px-2"
      >
        <div v-for="video in videoList" :key="video.id">
          <PostCard
            :id="video.id"
            :title="video.title"
            :description="video.description"
            :previewUrl="video.previewUrl"
            :author="video.author"
            :channel="video.channel"
            :likesCount="video.likesCount"
            :viewsCount="video.viewsCount"
            :runtime="video.runtime"
          />
        </div>
      </div>
      <template v-else>
        Rigth now U don't have any uploaded videos.
      </template>
    </template>
  </Page>
</template>
