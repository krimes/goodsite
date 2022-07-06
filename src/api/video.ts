import $axios from "@/services/$axios";

const DOMAIN = import.meta.env.VITE_DOMAIN;
import type { Post } from "@/types";

const prefix = "/app/profile/videos";

export const videoApi = {
  /**
   * Get csrf cookie
   * @returns {Promise}
   */
  // get: (video_id) => {
  //   const url = `${DOMAIN}/`;
  //   return $axios.get(url);
  // },

  /**
   * List
   */
  list: (): Promise<any> => {
    const url = prefix;
    return $axios.get(url);
  },

  create: (post: Post): Promise<any> => {
    const url = prefix;
    return $axios.post(url, {...post});
  },

  /**
   * Upload video
   */
  upload: (file: FormData): Promise<any> => {
    const url = `${prefix}/upload`;
    return $axios.post(url, file, {headers: {'Content-Type': 'multipart/form-data'}});
  },
}

export default videoApi;
