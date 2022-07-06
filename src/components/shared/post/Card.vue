<script lang="ts">
  // Styles
  import "./Card.scss";

  import { useI18n } from "vue-i18n";
  import { datetime as datetimeHelper } from "@/helpers/datetime";

  export default {
    props: {
      id: Number,
      title: String,
      previewUrl: {
        type: String,
        default: `https://picsum.photos/640/360`, //?random=${item.id}`
      },
      channel: {
        type: String,
        default: "Some channel",
      },
      author: {
        type: String,
        default: "Some author",
      },
      likesCount: {
        type: Number,
        default: 0,
      },
      viewsCount: {
        type: Number,
        default: 0,
      },
      runtime: {
        type: Number,
        default: 0,
      },
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
      <a :href="`/post/${id}`" class="post-picture-url">
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
            <p>{{ author }}</p>
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
