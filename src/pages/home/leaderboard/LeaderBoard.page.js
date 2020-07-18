import React, {Component} from 'react';
import {convertObjectToArray} from "../../../utils";
import {connect} from "react-redux";
import LeaderBoardCard from "./components/leader-board-card/LeaderBoardCard";
import {Card, Container, Segment} from "semantic-ui-react";
import {generateAndOrderByScore} from "./LeaderBoard.util";


class LeaderBoardPage extends Component {
   render() {
      const {users = {}} = this.props;
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
