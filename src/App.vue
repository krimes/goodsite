<script setup lang="ts">
  import '@/assets/app.scss';
  import '@/App.scss';

  import { MainLayout } from '@/layouts';
  import { RouterView } from 'vue-router';
</script>

<template>
  <component :is="$route.meta.layout || MainLayout">
    <RouterView />
  </component>
</template>
