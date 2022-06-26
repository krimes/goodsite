<script setup lang="ts">
  // Styles
  import "./Heading.scss";

  // const props = defineProps({
  //    loading:  {
  //     type: Boolean,
  //     default: false
  //   },
  // })
</script>

<template>
  <header class="page-heading">
    <slot />
  </header>
</template>
