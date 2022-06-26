<script setup lang="ts">
  // Components
  import { Page } from "@/components/structure";
  import { onBeforeMount } from "vue";
  import { RouterView, useRouter, useRoute } from "vue-router";
  const route = useRoute();
  const router = useRouter();

  onBeforeMount(() =>{
    if (route.name === "profile") {
      router.push({name: "profile-main-info"});
    }
  })
</script>

<template>
  <Page class="page-profile">
    <RouterView />
  </Page>
</template>
