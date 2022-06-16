/* eslint-disable */
/* eslint-disable */

// import { locale } from '$lib/services/i18n';

/**
 * Helpers to work with date & time
 */
export const datetime = {

  /**
   * Seconds to time
   * @param {String} runtime
   * @return {String|Number}
   */
  secondsToTime: (runtime: string | number): string => {
    const seconds = (typeof runtime === 'string') ? parseInt(runtime) : runtime;
    const format  = ["h", "m", "s"]
    const date    = new Date(0);

    date.setSeconds(seconds);
    const duration = date.toISOString().substring(11, 19);

    return duration
      .split(':')
      .map((item, i) => {
        if (parseInt(item) > 0) {
          return `${parseInt(item)}${format[i]}`;
        }
      })
      .join(' ');
  }
}
