export const generateAndOrderByScore = (users = []) => users.map(e => ({
   ...e,
   score: getUserScore(e)
})).sort((a, b) => b.score - a.score);

export const getUserScore = (user) => {
   let score = 0;
   score += Object.keys(user.answers || {}).length;
   score += user.questions ? user.questions.length : 0;
   return score;
};
