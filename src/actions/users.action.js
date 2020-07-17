import {_getUsers} from "../utils/_DATA";

const FETCHING_REQUEST = () => ({
   type: 'IS_FETCHING_USERS',
   response: true
});

const LOAD_USERS_SUCCESS = (users) => ({
   type: 'LOAD_USERS_SUCCESS',
   response: users
});

export const load = () => async (dispatch) => {
   dispatch(FETCHING_REQUEST());
   const users = await _getUsers();
   dispatch(LOAD_USERS_SUCCESS(users));
};


export default {load}
