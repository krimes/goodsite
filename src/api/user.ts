// import { locale as currentLocale } from 'svelte-i18n';
// import { get, post } from "@/services/$axios";
import $axios from "@/services/$axios";

const DOMAIN = import.meta.env.VITE_DOMAIN;
const prefix = "auth";

export const userApi = {
  /**
   * Get csrf cookie
   * @returns {Promise}
   */
  getCsrfCookie: () => {
    const url = `${DOMAIN}/sanctum/csrf-cookie`;
    return $axios.get(url);
  },

  /**
   * Sign in
   * @param {String} email
   * @param {String} password
   * @returns {Promise}
   */
  signin: (email: string, password: string) => {
    const url = `${prefix}/signin`;
    return $axios.post(url, {email, password})
  },


  /**
   * Get user settings
   * @returns {Promise}
   */
  settings: () => {
    const {account_id} = user.user;
    const { token } = user;
    const params = {
      id: account_id,
      api_token: token,
      token,
    }
    const url = `/accounts/${account_id}/settings`;

    return $axios.get(url, { params: { ...params }});
  },

  /**
   * Upload user avanatr
   * example: https://api.knowledgecity.com/v2/portals/student/avatar/
   * @param {Object} avatar
   * @returns {Promise}
   */
  uploadAvatar: (avatar) => {
    // const { token } = user;
    // console.log(avatar);
    // avatar.append('token', token);
    // console.log(avatar);
    const url = `/portals/student/avatar/`;
    return $axios.post(url, {avatar})
  },

  /**
   * Get profile settings
   * @returns {Promise}
   */
  getProfile: () => {
    const {token} = user;
    const user_id = user.user.id;
    const {account_id} = user.user;

    const url = `/accounts/${account_id}/groups/0/students/${user_id}`;
    return $axios.get(url, { params: { ...baseParams, token }});
  },


  /**
   * Update user profile
   * example: https://api.knowledgecity.com/v2/portals/student
   * @param profile_data
   * @returns {Promise}
   */
  updateProfile: (profile_data) => {
    const params = {
      ...profile_data,
      "x-src": "stargate-my-account"
    }
    const url = `/portals/student`;
    return $axios.post(url, params)
  },

  /**
   * Get first login data
   * example: /v2/accounts/${account_id}/forms/0first_login?_extend=mui&lang=en&token=${token}&is_static_options=1
   * @returns {Promise}
   */
   getFirstLoginData: (): Promise <string|unknown> => {
    const params = {
      _extend: 'mui',
      is_static_options: 1,
      lang: locale,
    };

    const token   = user?.token;
    const account_id = user?.user?.account_id;
    const url = `/accounts/${account_id}/forms/0first_login?`;

    return $axios.get(url, { params: { ...params, token }});
  },

  /**
   * Update user profile
   * example: https://api.knowledgecity.com/v2/portals/student
   * @param profile_data
   * @returns {Promise}
   */
  postFirstLogin: (profile_data) => {
    const { password } = profile_data
    const params = {
      ...profile_data,
      password2: password,
      submit: "Submit",
      "x-src": "stargate-first-login-form"
    };
    const url = `/portals/student`;
    return $axios.post(url, params)
  }
}

export default userApi;
