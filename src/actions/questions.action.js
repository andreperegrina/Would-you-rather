import {_getQuestions, _saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";

const FETCHING_REQUEST = {
   type: 'IS_FETCHING_QUESTIONS',
   response: true
};

const LOAD_QUESTIONS_SUCCESS = (questions) => ({
   type: 'LOAD_QUESTIONS_SUCCESS',
   response: questions
});
const ADD_QUESTION = (question) => ({
   type: 'ADD_QUESTIONS_SUCCESS',
   response: question
});

const SET_QUESTION_ANSWER = (id, userId, answer) => ({
   type: 'SET_QUESTION_ANSWER_SUCCESS',
   response: {id, userId, answer}
});

export const load = () => async (dispatch) => {
   dispatch(FETCHING_REQUEST);
   const questions = await _getQuestions();
   dispatch(LOAD_QUESTIONS_SUCCESS(questions));
};

export const add = (optionOneText, optionTwoText) => async (dispatch, getState) => {
   const state = getState();
   const {id: userId} = state.authentication.user;
   dispatch(FETCHING_REQUEST);
   const question = await _saveQuestion({optionOneText, optionTwoText, author: userId});
   dispatch(ADD_QUESTION(question))
};

export const setAnswer = (id, answer) => async (dispatch, getState) => {
   dispatch(FETCHING_REQUEST);
   const state = getState();
   const {id: userId} = state.authentication.user;
   dispatch(SET_QUESTION_ANSWER(id, userId, answer));
   return _saveQuestionAnswer({authedUser: userId, qid: id, answer});
};


export default {add, load, setAnswer}
