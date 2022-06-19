<script lang="ts">
  // Styles
  import './Sidebar.scss';

  // Hooks
  import { useI18n } from "vue-i18n";

  export default {
    setup() {
      const menu = [
          {id: 1, link: "/", tKey: "home"},
          {id: 2, link: "/categories", tKey: "categories"},
          {id: 2, link: "/actors", tKey: "actors"},
          {id: 3, link: "/about", tKey: "about"},
        ];
      const { t } = useI18n();
      return {
        menu,
        t
      }
    },
  }
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
