<script setup lang="ts">
  import './Header.scss';
</script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/categories">Categories</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/signup">Signup</RouterLink>
      <RouterLink to="/signin">Signin</RouterLink>
    </nav>
  </header>
</template>
