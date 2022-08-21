<script setup lang="ts">
  // Hooks
  import { useI18n } from "vue-i18n";
  import { useRouter } from "vue-router";

  // Components
  import { Page, Heading } from "@/components/structure";
  import { Card, Button } from "@/components/ui";

  const user = (localStorage.user) ? JSON.parse(localStorage.user) : null;
  const router = useRouter();

  if (!user) {
    router.push({name: 'signin'});
  }

  const { t } = useI18n();
</script>

<template>
  <Page class="page-profile">
    <Heading>
      <h1>{{ $t('pages.profile.title') }}</h1>
    </Heading>

    <div class="flex flex-row space-x-4">
      <Card v-if="user?.id" class="basis-1/4">
        <template #header>
          <h2>{{ $t('user.name') }}: {{ user.first_name }} {{ user.last_name }}</h2>
        </template>
        <p>{{ $t('user.email') }}: {{ user.email }}</p>
        <p>{{ $t('user.phone') }}: {{ user.phone }}</p>
        <template #footer>
          <Button>Update</Button>
        </template>
      </Card>

      <Card v-if="user?.id" class="basis-1/4">
        <template #header>
          <h2>Two factor authorization</h2>
        </template>
        <p>{{ $t('user.email') }}: {{ user.email }}</p>
        <p>{{ $t('user.phone') }}: {{ user.phone }}</p>
        <template #footer>
          <Button>Update</Button>
        </template>
      </Card>
    </div>

  </Page>
</template>
