// API
import {_getUsers} from "../utils/_DATA";

/**
 * @description This functions returns an object with all you need trigger the fetching of users
 * @returns {object} object with all you need to trigger the fetching action
 */
const FETCHING_REQUEST = () => ({
   type: 'IS_FETCHING_USERS',
   response: true
});

/**
 * @description This functions returns an object with all you need to load the users
 * @param {object} users
 * @returns {object} object with all you need to trigger the load users action
 */
const LOAD_USERS_SUCCESS = (users) => ({
   type: 'LOAD_USERS_SUCCESS',
   response: users
});

/**
 * @description Action that load all users from the API
 */
export const load = () => async (dispatch) => {
   // Let know the application that we are fetching the users
   dispatch(FETCHING_REQUEST());
   const users = await _getUsers();
   // Load users in the store state
   dispatch(LOAD_USERS_SUCCESS(users));
};


export default {load}
