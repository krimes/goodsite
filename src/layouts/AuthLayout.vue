<script setup lang="ts">
  import './AuthLayout.scss';

  import { RouterView } from 'vue-router';

  // Components
  import { Header } from '@/components/structure'
</script>

<template>
  <div class="main-layout">
    <Header />

    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>
