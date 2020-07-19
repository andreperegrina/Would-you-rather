// API
import {_getQuestions, _saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";

/**
 * @description This functions returns an object with all you need trigger the fetching of questions
 * @returns {object} object with all you need to trigger the fetching action
 */
const FETCHING_REQUEST = {
   type: 'IS_FETCHING_QUESTIONS',
   response: true
};

/**
 * @description This functions returns an object with all you need to load the questions
 * @param {object} questions
 * @returns {object} object with all you need to trigger the load questions action
 */
const LOAD_QUESTIONS_SUCCESS = (questions) => ({
   type: 'LOAD_QUESTIONS_SUCCESS',
   response: questions
});

/**
 * @description This functions returns an object with all you need to add a new questions
 * @param {object} question
 * @returns {object} object with all you need to trigger the add question action
 */
const ADD_QUESTION = (question) => ({
   type: 'ADD_QUESTIONS_SUCCESS',
   response: question
});

/**
 * @description This functions returns an object with all you need to set answer in a question
 * @param {string} id
 * @param {string} userId
 * @param {string} answer
 * @returns {object} object with all you need to trigger the set question answer
 */
const SET_QUESTION_ANSWER = (id, userId, answer) => ({
   type: 'SET_QUESTION_ANSWER_SUCCESS',
   response: {id, userId, answer}
});


/**
 * @description Action that load all questions from the API
 */
export const load = () => async (dispatch) => {
   // Let know the application that we are fetching the questions
   dispatch(FETCHING_REQUEST);
   const questions = await _getQuestions();
   // Load questions in the store state
   dispatch(LOAD_QUESTIONS_SUCCESS(questions));
};

/**
 * @description Action that add a new question
 * @param {string} optionOneText
 * @param {string} optionTwoText
 */
export const add = (optionOneText, optionTwoText) => async (dispatch, getState) => {
   const state = getState();
   const {id: userId} = state.authentication.user;
   // Let know the application that we are fetching the questions
   dispatch(FETCHING_REQUEST);
   const question = await _saveQuestion({optionOneText, optionTwoText, author: userId});
   // Add the new question to the store state
   dispatch(ADD_QUESTION(question))
};

/**
 * @description Action that add the vote to the question
 * @param {string} id
 * @param {string} answer
 */
export const setAnswer = (id, answer) => async (dispatch, getState) => {
   // Let know the application that we are fetching the questions
   dispatch(FETCHING_REQUEST);
   const state = getState();
   const {id: userId} = state.authentication.user;
   // Add new vote to the question in the store state
   dispatch(SET_QUESTION_ANSWER(id, userId, answer));
   // Add vote the API
   // We are using the Optimistic Update to update the UI before calling the API to improve the behavior of the app
   return _saveQuestionAnswer({authedUser: userId, qid: id, answer});
};


export default {add, load, setAnswer}
