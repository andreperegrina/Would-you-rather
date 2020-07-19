// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import {Card, Grid, Header, Image, Label, Segment, Statistic} from "semantic-ui-react";

// Style
import './LeaderBoardCard.css'

/**
 * @description Based on the place return a color representing the number of the place
 * @param {number} place
 * @returns {string} Returns a color that represents the place passed
 */
const colorFromPlace = (place) => {
   switch (place) {
      case 1:
         return 'yellow';
      case 2:
         return 'grey';
      case 3:
         return 'brown';
      default:
         return 'red'
   }
};

const LeaderBoardCard = (props) => {
   const {item, place} = props;
   const {avatarURL, score} = item;

   // Get the number of answers
   const answersCount = Object.keys(item.answers || {}).length;
   // Get the number of questions created
   const questionsCount = item.questions ? item.questions.length : 0;
   return (
      <Card className='LeaderBoardCard' fluid>
         {place && place <= 3 && <Label as='a' color={colorFromPlace(place)} corner icon='trophy'/>}
            <Grid columns={3}>
               <Grid.Row stretched>
                  <Grid.Column width={3}>
                     <Image src={avatarURL}/>
                  </Grid.Column>
                  <Grid.Column  width={9}>
                     <Segment basic><Header as='h1'>{item.name}</Header></Segment>
                     <Segment basic>
                        <Header as='h2'>Answered Questions: {answersCount}</Header>
                        <Header as='h2'>Created Questions: {questionsCount}</Header>
                     </Segment>
                  </Grid.Column>
                  <Grid.Column width={3}>
                     <div className='score-statistics'>
                        <Statistic size='huge'>
                           <Statistic.Value>{score}</Statistic.Value>
                           <Statistic.Label>Score</Statistic.Label>
                        </Statistic>
                     </div>
                  </Grid.Column>
               </Grid.Row>
            </Grid>
      </Card>
   );
};

LeaderBoardCard.propTypes = {
   item: PropTypes.object,
   place: PropTypes.number,
};

export default LeaderBoardCard;
