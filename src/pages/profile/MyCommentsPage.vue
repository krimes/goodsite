<script setup lang="ts">
  // Hooks
  import { useI18n } from "vue-i18n";

  // Components
  import { Page } from "@/components/structure";

  const { t } = useI18n();
</script>

<template>
  <Page class="page-profile-my-videos">
    <h1>
      {{ $t('pages.profile.title') }}
    </h1>
  </Page>
</template>
