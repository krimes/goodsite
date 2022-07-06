<script lang="ts">
  // Styles
  import './Header.scss';

  // Hooks
  import { useI18n } from "vue-i18n";
  import { useUserStore } from "@/stores/user";

  export default {
    setup() {
      const guestItems = [3,4];
      const userItems = [5];
      const userStore = useUserStore();

      const menu = [
          {id: 1, link: "/", tKey: "home"},
          {id: 2, link: "/categories", tKey: "categories"},
          {id: 3, link: "/signup", tKey: "signup"},
          {id: 4, link: "/signin", tKey: "signin"},
          {id: 5, link: "/profile", tKey: "profile"},
        ];
      const { t } = useI18n();

      /**
       * Get menu
       */
      const getMenu = () => {
        const filterGroup = (userStore.isLoggedIn) ? guestItems : userItems;
        return menu.filter(item => !filterGroup.includes(item.id));
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
