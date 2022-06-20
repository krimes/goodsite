<script lang="ts">
  // Styles
  import './Header.scss';

  // Hooks
  import { useI18n } from "vue-i18n";

  export default {
    setup() {
      const guestItems = [3,4];
      const userItems = [5];

      const menu = [
          {id: 1, link: "/", tKey: "home"},
          {id: 2, link: "/categories", tKey: "categories"},
          {id: 3, link: "/signup", tKey: "signup"},
          {id: 4, link: "/signin", tKey: "signin"},
          {id: 5, link: "/profile", tKey: "profile"},
        ];
      const { t } = useI18n();

      const getMenu = () => {
        if (localStorage.token) {
          return menu.filter(item => !guestItems.includes(item.id));
        }
        return menu.filter(item => !userItems.includes(item.id));
      };

      return {
        getMenu,
        t
      }
    },
  }
</script>


<template>
  <header class="header">
    <nav class="nav">
      <RouterLink
        v-for="item in getMenu()"
        :to="item.link"
        :key="`sb-${item}`"
      >
        {{ $t(`pages.${item.tKey}.title`) }}
      </RouterLink>
    </nav>
  </header>
</template>
