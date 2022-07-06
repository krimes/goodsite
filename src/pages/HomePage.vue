<script lang="ts">
  import { PostCard } from "@/components/shared/post";
  import { ref, onMounted } from "vue";
  import { useI18n } from "vue-i18n";

  export default {
    components: {
      PostCard
    },
    setup() {
      const videoList = ref([]);
      const loading = ref(false);
      const postTemplate = {
        id: 1,
        title: "",
        description: "",
        previewUrl: "",
        author: "New author",
        channel: "New channel",
        likesCount: 300,
        viewsCount: 1800,
        runtime: 1800,
      };
      const { t } = useI18n();

      /**
       * Fetch synthetic data
       */
      const fetchData = async (): Promise<any> => {
        loading.value = true;
        try {
          const url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
          const response = await fetch(url);
          const json = await response.json();
          videoList.value = json.map(photo => {
            return {
              ...postTemplate,
              id: photo.id,
              title: photo.title,
              previewUrl: `https://picsum.photos/640/360?random=${photo.id}`, // item.thumbnailUrl
            }
          });
        }
        catch(error: any) {
          throw new Error(error);
        }
        finally {
          loading.value = false;
        }
      };

      onMounted(async () => {
        fetchData();
      });

      return {
        videoList,
        loading,
        t
      }
    },
  }
</script>

<template>
  <div class="grid grid-cols-4 gap-3 px-2">
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
</template>
