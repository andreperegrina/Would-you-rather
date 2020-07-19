// Libraries
import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, Container, Segment} from "semantic-ui-react";

// Components
import LeaderBoardCard from "./components/leader-board-card/LeaderBoardCard";

// Utils
import {convertObjectToArray} from "../../../utils";
import {generateAndOrderByScore} from "./LeaderBoard.util";

class LeaderBoardPage extends Component {
   render() {
      const {users = {}} = this.props;
      // Convert users to array and created a new user list that contains the score of the user and it's sorted by the score
      const userList = generateAndOrderByScore(convertObjectToArray(users));
      return (
         <Container>
            <Segment>
               <Card.Group>
                  {userList && userList.map((e, index) => <LeaderBoardCard key={e.id} item={e} place={index + 1}/>)}
               </Card.Group>
            </Segment>
         </Container>
      );
   }
}

const mapStateToProps = (state) => ({
   users: state.users.data,
});

export default connect(mapStateToProps)(LeaderBoardPage);
