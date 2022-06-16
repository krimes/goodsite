<script lang="ts">
  import { useI18n } from "vue-i18n";
  import { datetime as datetimeHelper } from "@/helpers/datetime";

  export default {
    props: {
      id: Number,
      title: String,
      description: String,
      previewUrl: String,
      channel: String,
      author: String,
      likesCount: Number,
      viewsCount: Number,
      runtime: Number,
    },
    setup(props) {
      const { t } = useI18n();
      const humanRuntime = datetimeHelper.secondsToTime(props.runtime);

      return {
        ...props,
        humanRuntime,
        t
      }
    }
  }
</script>

<template>
  <div class="post-card">
    <div class="post-picture">
      <span class="post-runtime">
        {{ humanRuntime }}
      </span>
      <a :href="`/post/${id}`">
        <img
          :src="previewUrl"
          :alt="title"
        />
      </a>
    </div>

    <div class="row">
      <div class="col-xs-2">
        <div class="post-author">
          <a :href="`/channel/${channel}`">
            <it-avatar color="#3051ff" />
          </a>
        </div>
      </div>

      <div class="col-xs-10">
        <div class="post-info">
          <a :href="`/post/${id}`">
            <h4>{{ title }}</h4>
            <p>{{ description }}</p>
          </a>
        </div>
        <div class="post-summary">
          <span class="post-metric">
            <it-icon name="favorite_border" outlined /> {{ likesCount }}
          </span>
          <span class="post-metric">
            <it-icon name="visibility" outlined /> {{ viewsCount }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
