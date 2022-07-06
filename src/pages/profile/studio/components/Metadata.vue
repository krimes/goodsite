<script setup lang="ts">
  import type { Post } from "@/types";
  import { videoApi } from "@/api"

  import { PropType,  defineProps, ref } from 'vue';

  // Hooks
  import { useI18n } from "vue-i18n";

  // Components
  import { Button, Input, Textarea } from "@/components/ui";

  const { t } = useI18n();

  // Emits
  const emit = defineEmits(['submit'])

  // Props
  const props = defineProps({

    post: {
      type: Object,
    },

    loading: {
      type: Boolean,
      default: false,
    },

    id: {
      type: Number,
      required: false,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    runtime: {
      type: String,
    },
    author_id: {
      type: String,
      required: false,
    },
  });


  const $$post = ref(props.post);

  /**
   *
   */
  const onSubmit = async () => {
    // console.log($$post.value)
    // const response = await videoApi.create(post);
    // console.log(response);
    // emit('submit', post);
  }
</script>

<template>
  <h3>Metadata</h3>
  <form @submit.prevent="onSubmit">
    <div class="form-group mb-4">
      <label for="" class="block">
        title
      </label>
      <Input
        v-model="$$post.title"
        placeholder="title"
      />
    </div>

    <div class="form-group mb-4 pr-4">
      <label for="" class="block">
        description
      </label>
      <Textarea
        v-model="$$post.description"
        placeholder="description"
        class="w-full"
      />
    </div>

    <div class="form-group mb-4">
      <label for="" class="block">
        Runtime
      </label>
      <Input
        v-model="$$post.runtime"
        placeholder="runtime"
      />
    </div>

    <footer>
      <Button variant="primary" nativeType="submit">
        {{ $t('app.save') }}
      </Button>
    </footer>
  </form>
</template>
