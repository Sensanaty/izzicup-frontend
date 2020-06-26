import axios from 'axios';

/**
 * Check whether or not the current environment is a dev environment or not
 * @returns {boolean}
 */
export const isDev = () => {
    return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
}

/**
 * Call the Izzicup API with a specific endpoint
 * @param page {Number} the page param of the parts endpoint, for example '?page=3'
 * @param items {Number} the items param of the parts endpoint, for example '?count=25'
 * @returns {AxiosPromise} Axios Promise
 */
export function callPartApi(page = 1, items = 20 ) {
    let token = `Bearer ${localStorage.getItem('token')}`;
    return axios( { method: 'get', url: `http://localhost:3000/v1/parts?page=${page}?items=${items}`, headers: { 'Authorization': token } } )
}