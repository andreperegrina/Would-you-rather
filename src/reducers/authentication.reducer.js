export default (state = {user: undefined}, action = {}) => {
   const {error, type, response} = action;

   switch (type) {

      case 'AUTHENTICATED': {
         return {
            ...state,
            error,
            user: response
         };
      }

      case 'LOG_OUT': {
         return {
            ...state,
            user: undefined
         }
      }

      default: {
         return state;
      }
   }
};
