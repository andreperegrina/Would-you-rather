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


export const doesUserVoteInThisQuestion = (question = {}, userId = "") => {
   if (question.optionOne && question.optionOne.votes.includes(userId)) {
      return true;
   }
   return !!(question.optionTwo && question.optionTwo.votes.includes(userId));
};
