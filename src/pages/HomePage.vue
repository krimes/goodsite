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
      const title = "Some title";
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
      const fetchData = async () => {
        loading.value = true;
        try {
          const url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
          const response = await fetch(url);
          const json = await response.json();

          json.forEach(item => {
            videoList.value.push({
              ...postTemplate,
              id: item.id,
              title: item.title,
              previewUrl: `https://picsum.photos/640/360?random=${item.id}`, // item.thumbnailUrl
            })
          })
        }
        catch(error) {
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

<style lang="scss">
  .xh-grid {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  /* Custom, iPhone Retina */
  @media only screen and (min-width : 320px) {
    .xh-grid {
      grid-template-columns: 1fr;
    }
  }
  /* Extra Small Devices, Phones */
  @media only screen and (min-width : 480px) {
    .xh-grid {
      grid-template-columns: 1fr;
    }
  }
  /* Small Devices, Tablets */
  @media only screen and (min-width : 768px) {
    .xh-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  /* Medium Devices, Desktops */
  @media only screen and (min-width : 992px) {
    .xh-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  /* Large Devices, Wide Screens */
  @media only screen and (min-width : 1200px) {
    .xh-grid {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
</style>
