<script setup lang="ts">
  import './MainLayout.scss';

  import { RouterView } from 'vue-router';

  // Components
  import { Header, Sidebar } from '@/components/structure'
</script>


<template>
  <div class="main-layout">
    <Header />

    <div class="main-container">
      <div class="sidebar-col">
        <Sidebar />
      </div>
      <section class="main-col">
        <div class="main-content">
          <RouterView />
        </div>
      </section>
    </div>
  </div>
</template>
