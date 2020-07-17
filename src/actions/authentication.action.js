const SET_AUTHENTICATED_USER = (id) => ({
   type: 'AUTHENTICATED',
   response: {id}
});
const LOGOUT = () => ({type: 'LOG_OUT'});

export const authenticate = (id) => async (dispatch) => {
   dispatch(SET_AUTHENTICATED_USER(id));
};
export const logout = () => async (dispatch) => {
   dispatch(LOGOUT());
};


export default {authenticate, logout}
