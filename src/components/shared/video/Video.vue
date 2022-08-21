<script lang="ts">
  // Styles
  import "./Video.scss";

  import { onBeforeUnmount, onMounted, ref } from "vue";
  import videojs from "video.js";

  export default {
    props: {
      autoplay:  {
        type: Boolean,
        default: true,
      },
      controls: {
        type: Boolean,
        default: true,
      },
      sources:  {
        type: Array,
        required: true,
      },
    },
    setup(props) {
      const player = ref();
      const playerRef = ref();
      const options = ref({
        ...props
      });

      onMounted(() => {
        player.value = videojs(playerRef.value, options, () => {
          player.value.log('onPlayerReady', this);
        });
      });

      onBeforeUnmount(() => {
        if (player.value) {
          player.value.log('onPlayerDestroy', this);
          player.value.dispose();
        }
      })

      return {
        playerRef,
      }
    }
  }
</script>

<template>
  <video ref="playerRef" class="video"></video>
</template>
