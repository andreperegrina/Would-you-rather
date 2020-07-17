import React from 'react';
import {Button, Card, Feed, Header} from "semantic-ui-react";
import PropTypes from "prop-types";

const QuestionCard = (props) => {
   const handleOpenQuestion = () => {
      const {question, onOpenQuestion} = props;
      if (onOpenQuestion) {
         onOpenQuestion(question.id);
      }
   };

   const {user = {}, question = {}} = props;
   const {optionOne} = question;
   return (
      <Card>
         <Card.Content>
            <Feed>
               <Feed.Event>
                  <Feed.Label image={user.avatarURL}/>
                  <Feed.Content>
                     <Feed.Summary>
                        <a href='/'>{user.name}</a> asks
                     </Feed.Summary>
                  </Feed.Content>
               </Feed.Event>
            </Feed>
         </Card.Content>
         <Card.Content>
            <Header as='h3'>Would you rather?</Header>
            {optionOne && optionOne.text.substring(0, 10)}...
         </Card.Content>
         <Card.Content>
            <Button fluid onClick={handleOpenQuestion}>View poll</Button>
         </Card.Content>
      </Card>
   );
};

QuestionCard.propTypes = {
   user: PropTypes.object,
   question: PropTypes.object,
   onOpenQuestion: PropTypes.func,
};

export default QuestionCard;
