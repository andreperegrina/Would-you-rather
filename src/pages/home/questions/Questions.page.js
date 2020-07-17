import React, {Component} from 'react';
import {connect} from "react-redux";
import {Container, Segment, Card} from "semantic-ui-react";

import {convertObjectToArray} from "../../../utils";
import QuestionCard from "../../../components/question-card/QuestionCard";

class QuestionsPage extends Component {
   handleOpenQuestion = (id) => this.props.history.push(`/questions/${id}`);

   render() {
      const {questions, users} = this.props;
      const questionList = convertObjectToArray(questions);
      return (
         <Container>
            <Segment>
               <Card.Group>
                  {questionList && questionList.map((e) => (
                     <QuestionCard key={e.id} question={e} user={users[e.author]}
                                   onOpenQuestion={this.handleOpenQuestion}/>
                  ))}
               </Card.Group>
            </Segment>
         </Container>
      );
   }
}

QuestionsPage.propTypes = {};

const mapStateToProps = (state) => ({
   questions: state.questions.data,
   users: state.users.data
});

export default connect(mapStateToProps)(QuestionsPage);
