// This reducer contain all the information of the authenticated user
export default (state = {user: undefined}, action = {}) => {
   // Type is the action to be executed and response will centralize all the data that pass through
   const {type, response} = action;

   switch (type) {
      // This case handle when the user is authenticated
      case 'AUTHENTICATED': {
         return {
            ...state,
            user: response
         };
      }

      // This case remove the user authenticated when the user log out
      case 'LOG_OUT': {
         return {
            ...state,
            user: undefined
         }
      }

      // In case that an not handle action is being executed the reducer will return the current state without modification
      default: {
         return state;
      }
   }
};
