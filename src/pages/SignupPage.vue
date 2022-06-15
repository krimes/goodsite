<script lang="ts">
  import { ref } from "vue";
  export default {
    // props: {
    //   title: String
    // },
    // setup(props) {
    setup() {
      const loading = ref(false);
      const title = "Some title";

      return {
        title,
        loading,
      }
    }
  }
</script>

<template>
  <section class="page">
    <h3>{{ title }}</h3>



    <it-button :loading="loading" type="primary">Sign up</it-button>
    <it-button @click="() => {loading = !loading}">Set loading</it-button>

  </section>
</template>
