import React from 'react';
import {Button, Card, Dimmer, Divider, Feed, Grid, Header, Icon, Loader, Segment} from "semantic-ui-react";
import PropTypes from "prop-types";

import './QuestionCard.css'
import VoteCard from "./components/vote-card/VoteCard";
import moment from "moment";

const square = {width: 100, height: 100, top: -50};


const QuestionCard = (props) => {
   const {user = {}, question = {}, author = {}, fluid, isAnswerMode, onAnswerSelected, isLoading = false, onClickBack} = props;
   const {onOpenQuestion} = props;
   const handleOpenQuestion = () => {
      if (onOpenQuestion) {
         onOpenQuestion(question.id);
      }
   };
   const handleAnswerSelected = (answered) => {
      if (answer == null && onAnswerSelected) {
         onAnswerSelected(answered);
      }
   };

   const {optionOne = {}, optionTwo = {}} = question;

   let answer;
   if (user.answers) {
      answer = user.answers[question.id];
   }

   let totalVotes = 0;
   if (optionOne && optionOne.votes) {
      totalVotes += optionOne.votes.length;
   }
   if (optionTwo && optionTwo.votes) {
      totalVotes += optionTwo.votes.length;
   }


   return (
      <Card fluid={fluid} className={`QuestionCard ${isAnswerMode ? 'answer-mode' : ''}`}>
         <Dimmer active={isLoading}>
            <Loader/>
         </Dimmer>
         <Card.Content>
            <div className='card-header'>
               {onClickBack && <Icon name='arrow left' onClick={onClickBack} className='back-button'/>}
               <Feed>
                  <Feed.Event>
                     <Feed.Label image={author.avatarURL}/>
                     <Feed.Content>
                        <Feed.Summary>
                           <div className='author-name'>
                              <a href='/'>{author.name}</a> asks
                           </div>
                           <Card.Meta className='created-date'>
                              <span className='date'>{moment(question.timestamp).fromNow()}</span>
                           </Card.Meta>
                        </Feed.Summary>
                     </Feed.Content>
                  </Feed.Event>
               </Feed>
            </div>
         </Card.Content>
         <Card.Content>
            <div className='question-title'>
               <Header as='h2'>Would you rather?</Header>
            </div>
            {isAnswerMode && (
               <div className='answers'>
                  <Grid columns={2} stackable textAlign='center'>
                     <Grid.Row verticalAlign='middle'>
                        <Divider vertical>
                           <Segment circular inverted style={square}>
                              <Header as='h3' inverted>OR</Header>
                           </Segment>
                        </Divider>
                        <Grid.Column className='answer'>
                           <VoteCard isSelected={answer === "optionOne"} isAnswered={answer != null} item={optionOne}
                                     totalVotes={totalVotes}
                                     onAnswerSelected={handleAnswerSelected} value={'optionOne'}/>

                        </Grid.Column>
                        <Grid.Column className='answer'>
                           <VoteCard isSelected={answer === "optionTwo"} isAnswered={answer != null} item={optionTwo}
                                     totalVotes={totalVotes}
                                     onAnswerSelected={handleAnswerSelected} value={'optionTwo'}/>
                        </Grid.Column>
                     </Grid.Row>
                  </Grid>
               </div>
            )}
            {!isAnswerMode && optionOne && <span>{optionOne.text.substring(0, 10)}...</span>}
         </Card.Content>
         {onOpenQuestion && <Card.Content>
            <Button fluid onClick={handleOpenQuestion}>View poll</Button>
         </Card.Content>}
      </Card>
   );
};

QuestionCard.propTypes = {
   user: PropTypes.object,
   question: PropTypes.object,
   isAnswerMode: PropTypes.bool,
   onClickBack: PropTypes.func,
   onOpenQuestion: PropTypes.func,
   onAnswerSelected: PropTypes.func,
};

export default QuestionCard;
