import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutPage.vue'),
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../pages/CategoryPage.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../pages/SignupPage.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../pages/SigninPage.vue'),
    },
    {
      path: '/restore-password',
      name: 'forgotPassword',
      component: () => import('../pages/ForgottPasswordPage.vue'),
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   const lang = to.params.lang
//   loadLanguageAsync(lang).then(() => next())
// })

export default router
