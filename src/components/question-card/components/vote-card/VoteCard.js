// Libraries
import React from "react";
import {Card, Header, Label, Progress} from "semantic-ui-react";

/**
 * @description Calculate the percentage of votes of this answer based on the total of votes
 * @param {number} total
 * @param {number} votes
 * @returns {number} Return the percentage of this answer
 */
const calculatePercentage = (total, votes) => Math.round(votes / total * 100);

/**
 * @description This function return a funny easter egg of the fans of Re-zero
 * @param {string} text
 * @returns {string} Return a string depending if the user type the correct answers in the option one and two
 */
const easterEgg = (text = '') => {
   switch (text.toLowerCase()) {
      case 'rem':
         return 'easter-egg-1';
      case 'ram':
         return 'easter-egg-2';
      default:
         return '';
   }
};

const VoteCard = ({item, isSelected, isAnswered, totalVotes, onAnswerSelected, value}) => {
   const {votes, text} = item;
   const numberVotes = votes ? votes.length : 0;
   // if the user already answer this question, it will not allow the user to click in this option
   const handleAnswerSelected = !isAnswered ? () => onAnswerSelected(value) : undefined;

   return (
      <Card fluid onClick={handleAnswerSelected} className={`VoteCard ${easterEgg(text)}`}>
         {isSelected && <Label as='a' color='blue' ribbon>Your Vote</Label>}
         <Card.Content>
            <Header as='h1'>{text}</Header>
            {isAnswered && (
               <div style={{width: '100%', padding: '0 3rem'}}>
                  <Progress percent={calculatePercentage(totalVotes, numberVotes)} progress
                            indicating/>
                  <Header as='h4'>{`${numberVotes} out of ${totalVotes} votes`}</Header>
               </div>
            )}
         </Card.Content>
      </Card>
   )
};


export default VoteCard;
