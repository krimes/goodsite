<script setup lang="ts">
  // Styles
  import './ProfileSidebar.scss';

  // Hooks
  import { useI18n } from "vue-i18n";

  const menu = [
    {id: 1, link: "/profile/main-info", tKey: "profile"},
    {id: 2, link: "/profile/history", tKey: "history"},
    {id: 3, link: "/profile/my-videos", tKey: "my_videos"},
    {id: 3, link: "/profile/studio", tKey: "studio"},
    {id: 4, link: "/profile/my-comments", tKey: "my_comments"},
  ];
  const { t } = useI18n();
</script>

<template>
  <aside class="sidebar">
    <ul>
      <li v-for="item in menu" :key="`sb-${item}`">
        <RouterLink :to="item.link">
          {{ $t(`pages.${item.tKey}.title`) }}
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>
