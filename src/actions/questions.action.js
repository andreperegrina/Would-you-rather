import {_getQuestions} from "../utils/_DATA";

const FETCHING_REQUEST = () => ({
   type: 'IS_FETCHING_QUESTIONS',
   response: true
});

const LOAD_QUESTIONS_SUCCESS = (questions) => ({
   type: 'LOAD_QUESTIONS_SUCCESS',
   response: questions
});

export const load = () => async (dispatch) => {
   dispatch(FETCHING_REQUEST());
   const questions = await _getQuestions();
   dispatch(LOAD_QUESTIONS_SUCCESS(questions));
};


export default {load}
