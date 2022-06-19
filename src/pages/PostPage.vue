<script lang="ts">
  import { ref, onMounted } from "vue";
  import { useRoute } from 'vue-router';
  import { useI18n } from "vue-i18n";

  import { CommentCard } from "@/components/shared/comment";

  export default {
    components: {
      CommentCard
    },
    setup() {
      const route = useRoute();
      const { t } = useI18n();

      // Route props
      const postId = route.params.id;

      // Data
      const loading = ref(false);
      const post = ref(null);
      const comments = ref({
        loading: true,
        list: [],
      });

      /**
       * Get post data
       */
      const getPostData = async () => {
        loading.value = true;
        try {
          const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
          const response = await fetch(url);
          const json = await response.json();
          post.value = json;
        }
        catch(error) {
          throw new Error(error);
        }
        finally {
          loading.value = false;
        }
      };

      /**
       * Get post
       */
      const getPostComments = async () => {
        try {
          const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
          const response = await fetch(url);
          const json = await response.json();
          comments.value.list = json;
        }
        catch(error) {
          throw new Error(error);
        }
        finally {
          comments.value.loading = false;
        }
      };

      onMounted(async () => {
        getPostData();
        getPostComments();
      });

      return {
        post,
        comments,
        loading,
        t
      }
    },
  }
</script>

<template>
<div class="page">
  <template v-if="loading">
    Loading...
  </template>
  <template v-else>
    <header class="post-header">
      <h1>Title h1</h1>
      <h2>Title h2</h2>
      <h3>Title h3</h3>
      <h4>Title h4</h4>
      <h2>
        {{ post?.title }}
      </h2>
    </header>
    <section class="post-comments">
      <div class="description">
        {{ post?.body }}
      </div>
    </section>
  </template>

  <template v-if="comments.loading">
    <div>
      Comments loading...
    </div>
  </template>

  <template v-else>
    <h4 class="pb-2">
      Comments
    </h4>
    <ul class="post-comments">
      <li
        class="pb-2"
        v-for="comment in comments.list"
        :key="`${comment.id}-cc`"
      >
        <CommentCard
          :id="comment.id"
          :author="comment.email"
          :content="comment.body"
        />
      </li>
    </ul>
  </template>
</div>
</template>
