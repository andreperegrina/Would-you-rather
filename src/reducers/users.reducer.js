export default (state = {data: {}}, action = {}) => {
   const {type, response} = action;

   switch (type) {
      case 'LOAD_USERS_REQUEST': {
         return {
            ...state,
            isFetching: true
         };
      }

      case 'LOAD_USERS_FAILURE': {
         return {
            ...state,
            isFetching: false
         };
      }

      case 'LOAD_USERS_SUCCESS': {
         return {
            ...state,
            data: response,
            error: null,
            isFetching: false
         };
      }

      case 'CLEAR_USER': {
         return {
            ...state,
         }
      }

      default: {
         return state;
      }
   }
};
