<script lang="ts">
  // Styles
  import "./Comment.scss";

  import { useI18n } from "vue-i18n";
  // import { datetime as datetimeHelper } from "@/helpers/datetime";

  export default {
    props: {
      id:  {
        type: Number,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      loading:  {
        type: Boolean,
        default: false
      },
    },
    setup(props) {
      const { t } = useI18n();
      return {
        ...props,
        t
      }
    }
  }
</script>

<template>
  <div class="cmm-wrapper">
    <div class="cmm-avatar">
      <it-avatar color="#3051ff" />
    </div>
    <div class="cmm-body">
      <p class="cmm-author">{{ author }}</p>
      <p class="cmm-content">{{ content }}</p>
    </div>
  </div>
</template>
