<script setup lang="ts">
  import "./Button.scss";

  import { computed } from 'vue'

  const props = defineProps({
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    nativeType: {
      type: String,
      default: "button",
    },
    variant: {
      type: String,
      default: "default",
    }
  });

  const $$class = computed(() => {
    return [
      "xx-button",
      `xx-button-${props.variant}`,
      props.loading ? "xx-button-loading" : "",
      props.disabled ? "xx-button-disabled" : "",
    ]
    .filter(i => i)
    .join(" ");
  })

</script>

<template>
  <button
    :disabled="disabled"
    :type="nativeType"
    :variant="variant"
    :class="$$class"
  >
    <slot />
  </button>
</template>
