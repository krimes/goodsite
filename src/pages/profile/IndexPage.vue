<script lang="ts">
  // Hooks
  import { useI18n } from "vue-i18n";

  export default {
    setup() {
      const user = (localStorage.user) ? JSON.parse(localStorage.user) : null;
      const { t } = useI18n();
      return {
        user,
        t
      }
    },
  }
</script>

<template>
  <div class="about">
    <h1>This is a user profile page</h1>
    <template v-if="user?.id">
      <h2>{{ user.first_name }} {{ user.last_name }}</h2>
      <p>email: {{ user.email }}</p>
      <p>phone: {{ user.phone }}</p>
    </template>
  </div>
</template>
