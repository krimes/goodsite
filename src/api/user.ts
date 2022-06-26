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
   * Get user profile
   * @returns {Promise}
   */
  getProfile: () => {
    const url = `/app/profile`;
    return $axios.get(url);
  },

  /**
   * Get student list
   * @returns {Promise}
   */
  getStudentList: () => {
    const url = `/app/students`;
    return $axios.get(url);
  },
}

export default userApi;
