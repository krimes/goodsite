<script setup lang="ts">
  import './MainLayout.scss';

  import { RouterView } from 'vue-router';

  // Components
  import { Header, Sidebar } from '@/components/structure';
</script>

<template>
  <div class="main-layout">
    <Header />

    <div class="main-container">
      <div class="main-sidebar">
        <component :is="$route.meta.sidebar || Sidebar" />
      </div>
      <div class="main-content">
        <RouterView />
      </div>
    </div>

  </div>
</template>
