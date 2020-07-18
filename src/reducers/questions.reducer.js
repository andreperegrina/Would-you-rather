export default (state = {data: {}}, action = {}) => {
   const {type, response} = action;

   switch (type) {
      case 'IS_FETCHING_QUESTIONS': {
         return {
            ...state,
            isFetching: true
         };
      }

      case 'ADD_QUESTIONS_SUCCESS': {
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

      case 'SET_QUESTION_ANSWER_SUCCESS': {
         const {id, userId, answer} = response;
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

      case 'SET_QUESTION_ANSWER_FAILURE': {
         const {id, userId, answer} = response;
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
