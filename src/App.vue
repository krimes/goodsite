<script setup lang="ts">
  import '@/assets/app.scss';
  import '@/App.scss';

  import { RouterView } from 'vue-router';
  import { onMounted } from "vue";
  import { MainLayout } from '@/layouts';
  import { userApi } from "@/api";

  const token = localStorage.token;
  const user = (localStorage.user) ? JSON.parse(localStorage.user) : null;

  /**
   * Get profile data
   */
  async function getProfileData() {
    try {
      const csrfResponse = await userApi.getCsrfCookie();
      const response = await userApi.getProfile();
      const { user } = response.data;

      localStorage.setItem('user', JSON.stringify(user));
    }
    catch (error: any) {
      throw Error(error);
    }
  }

  onMounted(() => {
    if (token && !user?.id) {
      getProfileData();
    }
  })
</script>

<template>
  <component :is="$route.meta.layout || MainLayout">
    <RouterView />
  </component>
</template>
