export default (state = {data: {}}, action = {}) => {
   // Type is the action to be executed and response will centralize all the data that pass through
   const {type, response} = action;

   switch (type) {
      // This case is used to let now the application that the questions is being fetch
      case 'IS_FETCHING_QUESTIONS': {
         return {
            ...state,
            isFetching: true
         };
      }

      // This case will handle when the user creates a new question
      case 'ADD_QUESTIONS_SUCCESS': {
         // Using the spread operator we update only the necessary information
         return {
            ...state,
            data: {
               ...state.data,
               [response.id]: response
            },
            error: null,
            isFetching: false
         };
      }

      // This case will handle all logic of the answer
      case 'SET_QUESTION_ANSWER_SUCCESS': {
         const {id, userId, answer} = response;
         // Using the spread operator we update only the necessary information
         return {
            ...state,
            data: {
               ...state.data,
               [response.id]: {
                  ...state.data[id],
                  [answer]: {
                     ...state.data[id][answer],
                     votes: state.data[id][answer].votes.concat([userId])
                  }
               }
            },
            error: null,
            isFetching: false
         };
      }


      // Because we are using the optimistic update pattern we need to revert all information if the API call's failed
      // This case will handle if the answer failed to be store in the API call
      case 'SET_QUESTION_ANSWER_FAILURE': {
         const {id, userId, answer} = response;
         // Using the spread operator we update only the necessary information
         return {
            ...state,
            data: {
               ...state.data,
               [response.id]: {
                  ...state.data[id],
                  [answer]: {
                     ...state.data[id][answer],
                     votes: state.data[id][answer].votes.filter(e => e !== userId)
                  }
               }
            },
            error: null,
            isFetching: false
         };
      }

      // This case will load all the questions from the API
      case 'LOAD_QUESTIONS_SUCCESS': {
         return {
            ...state,
            data: response,
            error: null,
            isFetching: false
         };
      }

      // In case that an not handle action is being executed the reducer will return the current state without modification
      default: {
         return state;
      }
   }
};
