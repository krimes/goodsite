<script setup lang="ts">
  // Hooks
  import { useI18n } from "vue-i18n";
  import { ref, onMounted } from "vue";

  // Components
  import { Page, Heading } from "@/components/structure";
  import { PostCard } from "@/components/shared/post";

  const videoList = ref([]);
  const albumList = ref([]);
  const loading = ref(true);
  const { t } = useI18n();

  setTimeout(() => {
    loading.value = false;
  }, 1000)
</script>

<template>
  <Page class="page-profile-my-videos">
    <Heading>
      {{ $t('pages.my_videos.title') }}
    </Heading>

    <div class="toolbar flex">
      <it-button type="primary" class="mr-2">
        Upload new video
      </it-button>

      <it-dropdown
        clickable
        placement="bottom-right"
      >
        <it-button>Albums</it-button>
        <template #menu>
          <it-dropdown-menu>
            <it-dropdown-item>Hello</it-dropdown-item>
            <it-dropdown-item disabled>Disabled</it-dropdown-item>
            <it-dropdown-item icon="cloud">Cloud</it-dropdown-item>
            <it-dropdown-item divided>Divided</it-dropdown-item>
          </it-dropdown-menu>
        </template>
      </it-dropdown>
    </div>


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
