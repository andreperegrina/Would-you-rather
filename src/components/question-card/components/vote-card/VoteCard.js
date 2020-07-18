import {Card, Header, Label, Progress} from "semantic-ui-react";
import React from "react";


const calculatePercentage = (total, votes) => Math.round(votes / total * 100);

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
