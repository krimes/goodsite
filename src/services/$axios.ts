/**
 * Axios - HTTP service
 *
 * $axios - preconfigured axios instance for api services.
 * More about axios:
 *  - https://axios-http.com
 *  - https://github.com/axios/axios
 */

// Api.js
import axios from "axios";

// Config
const DEBUG_MODE = (import.meta.env.VITE_APP_DEBUG_MODE === 'true');
const DOMAIN     = import.meta.env.VITE_DOMAIN;
const API_VERSION = import.meta.env.VITE_API_VERSION;
const DEV_MODE   = import.meta.env.DEV;

if (DEV_MODE) {
  console.group();
    console.log(`api_url: ${DOMAIN}`);
    console.log(`api_version: ${API_VERSION}`);
    console.log(`is_dev_mode: ${DEBUG_MODE}`);
    console.log(`is_debug_mode: ${DEV_MODE}`);
  console.groupEnd();
}

// Create a instance of axios
const $axios = axios.create({
  withCredentials: true,
  baseURL: `${DOMAIN}/api/${API_VERSION}/`
});

/**
 * Pre config of axios request
 */
$axios.interceptors.request.use((config) => {
  // if (lang_data) {
  //   config.headers["Accept-Language"] = lang_data;
  // }
  // if (user?.token) {
  //   config.headers.Authorization = `Bearer ${user.token}`;
  // }
  return config;
});

/**
 * Pre config of axios response
 */
$axios.interceptors.response.use((response) =>
  response,
  async (error) => {
    if (DEV_MODE) {
      console.log(error);
    }
    return Promise.reject(error);
  },
);

export default $axios;

// const { get, post, put, delete: destroy } = $axios;
// export { get, post, put, destroy };
