/**
 * Check whether or not the current environment is a dev environment or not
 * @returns {boolean}
 */
export const isDev = () => {
    return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
}