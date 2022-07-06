<script setup lang="ts">
  import "./Input.scss";

  import { computed } from 'vue'

  const props = defineProps({
    value: {
      type: String,
      default: "",
    },
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
      default: "text",
    },
    variant: {
      type: String,
      default: "default",
    },
    placeholder: {
      type: String,
      default: "",
    },
  });

  const $$class = computed(() => {
    return [
      "xx-input",
      `xx-input-${props.variant}`,
      props.loading ? "xx-input-loading" : "",
      props.disabled ? "xx-input-disabled" : "",
    ]
    .filter(i => i)
    .join(" ");
  })

</script>

<template>
  <input
    :value="value"
    :disabled="disabled"
    :type="nativeType"
    :variant="variant"
    :placeholder="placeholder"
    :class="$$class"
  />
</template>
