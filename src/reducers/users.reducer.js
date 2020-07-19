// This reducer handle all user data
export default (state = {data: {}}, action = {}) => {
   // Type is the action to be executed and response will centralize all the data that pass through
   const {type, response} = action;

   switch (type) {
      // This case is used to let now the application that the users is being fetch
      case 'IS_FETCHING_USERS': {
         return {
            ...state,
            isFetching: true
         };
      }

      // If the users load failed the this case will handle all necessary logic
      case 'LOAD_USERS_FAILURE': {
         return {
            ...state,
            isFetching: false
         };
      }

      // Because we are using the optimistic update pattern we need to revert all information if the API call's failed
      // This case will handle if the answer failed to be store in the API call
      case 'SET_QUESTION_ANSWER_FAILURE': {
         const {id, answer, userId} = response;
         const currentAnswers = {
            ...state.data[userId].answers,
            [id]: answer
         };
         delete currentAnswers[id];
         return {
            ...state,
            data: {
               ...state.data,
               [userId]: {
                  ...state.data[userId],
                  answers: currentAnswers
               }
            },
            error: null,
            isFetching: false
         };
      }

      // Update the user if the has respond a new question
      case 'SET_QUESTION_ANSWER_SUCCESS': {
         const {id, answer, userId} = response;
         // Using the spread operator we update only the necessary information
         return {
            ...state,
            data: {
               ...state.data,
               [userId]: {
                  ...state.data[userId],
                  answers: {
                     ...state.data[userId].answers,
                     [id]: answer
                  }
               }
            },
            error: null,
            isFetching: false
         };
      }

      // This case will handle when the user creates a new question
      case 'ADD_QUESTIONS_SUCCESS': {
         // Using the spread operator we update only the necessary information
         return {
            ...state,
            data: {
               ...state.data,
               [response.author]: {
                  ...state.data[response.author],
                  questions: state.data[response.author].questions.concat([response.id])
               }
            },
            error: null,
            isFetching: false
         };
      }

      // This case will load all the users from the API
      case 'LOAD_USERS_SUCCESS': {
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
