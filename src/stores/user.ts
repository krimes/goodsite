import { defineStore } from 'pinia'

import { userApi } from "@/api";

export const useUserStore = defineStore('user', {
  state: () => ({
    csrf: null,
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user') || '{}'),
  }),

  getters: {
    shortName () {
      if (this.user) {
        const { firstName } = <User>this.user;
        return `${firstName}`;
      }
    },

    isLoggedIn () {
      return (this.user?.id && this.token) ? true : false
    }
  },

  actions: {
    async getCrfs () {
      //
      try {
        const { data: csrfResponse } = await userApi.getCsrfCookie();

        this.csrf = csrfResponse;
      } catch (error) {
        new Error('[crfs]: ' + error);
      }
    },

    async signin (payload: SignIn) {
      try {
        const { data }  = await userApi.signin(payload.email, payload.password);
        const { token, user } = data;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      } catch (error) {
        new Error('[signin]: ' + error);
      }
    },
  },
})

interface SignIn {
  email: string;
  password: string;
}

interface User {
  email: string;
  firstName: string;
  lastName: string;
}
