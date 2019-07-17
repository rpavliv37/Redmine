import { Observable } from 'rxjs';

/**
 * Destructurises response data recieved from back-end. Return Object or string.
 * @param {Object} error Response from back-end
 * @returns {Object|String} Object with successfull data; or string if response has error
 */
export const handleError = (error) => (
  error.response && error.response.data
    ? Observable.of(`${error.response.data.message}`)
    : Observable.of(`${error}`)
);

/**
 * Destructurises response data recieved from back-end. Always return Object.
 * @param {Object} error Response from back-end
 * @returns {Object} Object.response.data if successfull; or Object {error: boolean, message: string}
 */
export const handleErrorDetailed = (error) => (
  error.response && error.response.data
    ? Observable.of({
      error: true,
      message: `${error.response.data.message}`
    })
    : Observable.of({
      error: true,
      message: `${error}`
    })
);