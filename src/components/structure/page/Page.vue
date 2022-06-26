<script lang="ts">
  // Styles
  import type { PropType } from "vue";
  import "./Page.scss";

  export default {
    props: {
      loading:  {
        type: Boolean,
        default: false
      },
    },
    setup(props: PropType<boolean>) {
      return {
        ...props,
      }
    }
  }
</script>

<template>
  <div class="page-tpl">
      <slot />
  </div>
</template>
