<script setup lang="ts">
  import '@/assets/app.scss';
  import '@/App.scss';

  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Categories</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/signup">Signup</RouterLink>
      <RouterLink to="/signin">Signin</RouterLink>
    </nav>
  </header>

  <main>
   <RouterView />
  </main>
</template>
