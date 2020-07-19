/**
 * @description Filter questions by chosen category
 * @param {array} questions
 * @param {string} filterBy
 * @param {string} userId
 * @returns {array} Array that contains only the category chosen
 */
export const filterQuestions = (questions = [], filterBy = 'unanswered', userId) => questions.filter((e) => {
   if (filterBy === 'all') {
      return true
   }
   const doesUserVote = doesUserVoteInThisQuestion(e, userId);
   if (filterBy === 'answered' && doesUserVote) {
      return true;
   }
   return filterBy === 'unanswered' && !doesUserVote;

});

/**
 * @description Sort questions by timestamp
 * @param {array} questions
 * @returns {array} Array that contain all the questions sorted
 */
export const orderQuestions = (questions = []) => questions.sort((a, b) => b.timestamp - a.timestamp);


/**
 * @description Compare the question with the user provided to know if the user vote in the question
 * @param {object} question
 * @param {string} userId
 * @returns {boolean} True or False depending if the user vote in the question
 */
export const doesUserVoteInThisQuestion = (question = {}, userId = "") => {
   if (question.optionOne && question.optionOne.votes.includes(userId)) {
      return true;
   }
   return !!(question.optionTwo && question.optionTwo.votes.includes(userId));
};
