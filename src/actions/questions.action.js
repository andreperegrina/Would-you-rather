import {_getQuestions, _saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";

import userActions from "./users.action";

const FETCHING_REQUEST = {
   type: 'IS_FETCHING_QUESTIONS',
   response: true
};

const LOAD_QUESTIONS_SUCCESS = (questions) => ({
   type: 'LOAD_QUESTIONS_SUCCESS',
   response: questions
});

export const load = () => async (dispatch) => {
   dispatch(FETCHING_REQUEST);
   const questions = await _getQuestions();
   dispatch(LOAD_QUESTIONS_SUCCESS(questions));
};

export const add = (optionOneText, optionTwoText) => async (dispatch, getState) => {
   dispatch(FETCHING_REQUEST);
   const state = getState();
   const {id: userId} = state.authentication.user;
   await _saveQuestion({optionOneText, optionTwoText, author: userId});
   await dispatch(userActions.load());
   await dispatch(load());
};

export const setAnswer = (id, answer) => async (dispatch, getState) => {
   dispatch(FETCHING_REQUEST);
   const state = getState();
   const {id: userId} = state.authentication.user;
   await _saveQuestionAnswer({authedUser: userId, qid: id, answer});
   await dispatch(userActions.load());
   await dispatch(load());
};


export default {add, load, setAnswer}
