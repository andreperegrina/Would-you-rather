/**
 * @description This functions returns an object with all you need to login an user
 * @param {string} id
 * @returns {object} object with all you need to trigger the authenticated action
 */
const SET_AUTHENTICATED_USER = (id) => ({
   type: 'AUTHENTICATED',
   response: {id}
});

/**
 * @description This functions returns an object with all you need to log out an user
 * @returns {object} object with all you need to trigger the log out action
 */
const LOGOUT = () => ({type: 'LOG_OUT'});

/**
 * @description Action that authenticate the user selected
 */
export const authenticate = (id) => async (dispatch) => {
   dispatch(SET_AUTHENTICATED_USER(id));
};

/**
 * @description Action that logout the current user
 */
export const logout = () => async (dispatch) => {
   dispatch(LOGOUT());
};


export default {authenticate, logout}
