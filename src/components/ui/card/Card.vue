<script setup lang="ts">
  import "./Card.scss";
  import { computed, useSlots } from 'vue'

  const slots = useSlots();

  const $$class = computed(() => {
    return [
      "xx-card",
    ]
    .filter(i => i)
    .join(" ");
  })
</script>

<template>
  <div :class="$$class">
    <header v-if="slots.header" class="xx-card-header">
      <slot name="header"></slot>
    </header>
    <div class="xx-card-body">
      <slot />
    </div>
    <footer v-if="slots.footer" class="xx-card-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
