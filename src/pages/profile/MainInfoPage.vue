<script setup lang="ts">
  // Hooks
  import { useI18n } from "vue-i18n";
  import { useRouter } from "vue-router";

  // Components
  import { Page } from "@/components/structure";

  const user = (localStorage.user) ? JSON.parse(localStorage.user) : null;
  const router = useRouter();

  if (!user) {
    router.push({name: 'signin'});
  }

  const { t } = useI18n();
</script>

<template>
  <Page class="page-profile">
    <h1>
      {{ $t('pages.profile.title') }}
    </h1>
    <template v-if="user?.id">
      <h2>{{ $t('user.name') }}: {{ user.first_name }} {{ user.last_name }}</h2>
      <p>{{ $t('user.email') }}: {{ user.email }}</p>
      <p>{{ $t('user.phone') }}: {{ user.phone }}</p>
    </template>
  </Page>
</template>
