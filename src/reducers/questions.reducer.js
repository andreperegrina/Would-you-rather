export default (state = {data: {}}, action = {}) => {
   const {type, response} = action;

   switch (type) {
      case 'IS_FETCHING_QUESTIONS': {
         return {
            ...state,
            isFetching: true
         };
      }

      case 'LOAD_QUESTIONS_SUCCESS': {
         return {
            ...state,
            data: response,
            error: null,
            isFetching: false
         };
      }

      case 'CLEAR_QUESTIONS': {
         return {
            ...state,
            active: undefined
         }
      }

      default: {
         return state;
      }
   }
};
