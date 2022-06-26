import { createRouter, createWebHistory } from 'vue-router';
import { AuthLayout } from '@/layouts';
import { ProfileSidebar } from '@/components/structure';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue'),
    },
    {
      path: '/post/:id',
      component: () => import('../pages/PostPage.vue'),
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../pages/categories/List.vue'),
      children: [
        {
          path: '/categories/:id',
          name: 'categories-id',
          component: () => import('../pages/categories/Id.vue'),
        },
      ],
    },
    {
      path: '/actors',
      name: 'actors',
      component: () => import('../pages/actors/List.vue'),
      children: [
        {
          path: '/actors/:id',
          component: () => import('../pages/actors/Id.vue'),
        },
      ],
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../pages/profile/Index.vue'),
      meta: { sidebar: ProfileSidebar },
      children: [
        {
          path: '/profile/main-info',
          name: 'profile-main-info',
          component: () => import('../pages/profile/MainInfoPage.vue'),
        },
        {
          path: '/profile/history',
          name: 'profile-history',
          component: () => import('../pages/profile/HistoryPage.vue'),
        }, {
          path: '/profile/my-videos',
          name: 'profile-my-videos',
          component: () => import('../pages/profile/MyVideosPage.vue'),
        }, {
          path: '/profile/my-comments',
          name: 'profile-my-comments',
          component: () => import('../pages/profile/MyCommentsPage.vue'),
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutPage.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../pages/SignupPage.vue'),
      meta: { layout: AuthLayout }
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../pages/SigninPage.vue'),
      meta: { layout: AuthLayout }
    },
    {
      path: '/restore-password',
      name: 'forgotPassword',
      component: () => import('../pages/ForgottPasswordPage.vue'),
      meta: { layout: AuthLayout }
    }
  ]
});

export default router
