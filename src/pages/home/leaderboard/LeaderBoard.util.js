/**
 * @description Generate score for every user in the array and sort the array based on the score
 * @param {array} users
 * @returns {array} Array that contain all the users sorted with a score
 */
export const generateAndOrderByScore = (users = []) => users.map(e => ({
   ...e,
   score: getUserScore(e)
})).sort((a, b) => b.score - a.score);


/**
 * @description Returns the score of the user based on the questions created and the answers
 * @param {object} user
 * @returns {number} Number that represent the score of the user
 */
export const getUserScore = (user) => {
   let score = 0;
   score += Object.keys(user.answers || {}).length;
   score += user.questions ? user.questions.length : 0;
   return score;
};
