export default (state = {data: {}}, action = {}) => {
   const {type, response} = action;

   switch (type) {
      case 'IS_FETCHING_USERS': {
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

      case 'SET_QUESTION_ANSWER_SUCCESS': {
         const {id, answer, userId} = response;
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
      case 'ADD_QUESTIONS_SUCCESS': {
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
