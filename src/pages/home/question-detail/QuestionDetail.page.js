import React, {Component} from 'react';
import {Container, Segment} from "semantic-ui-react";
import {connect} from "react-redux";

import QuestionCard from "../../../components/question-card/QuestionCard";

import questionActions from "../../../actions/questions.action";
import {isEmptyObject} from "../../../utils";
import {Redirect} from "react-router-dom";

class QuestionDetailPage extends Component {
   componentDidMount = () => {
      const {match} = this.props;
      if (match != null) {
         const {id} = match;
         this.setState({id})
      }
   };

   handleAnswerSelected = (answer) => {
      const id = this.getQuestionId();
      this.props.setAnswer(id, answer)
   };

   handleBack = () => {
      this.props.history.push('/');
   };

   getQuestionId = () => {
      const {match} = this.props;
      if (match != null) {
         return match.params.id;
      }
   };

   render() {
      const {authenticatedUser, users, questions, isFetching} = this.props;
      const id = this.getQuestionId();
      const question = questions[id] || {};
      const user = authenticatedUser || {};
      const author = users[question.author] || {};

      // Validate if the user access to a question through the URL and the question is not created
      const questionNotFound = questions && !isEmptyObject(questions) && isEmptyObject(question);

      return (
         <Container>
            <Segment basic>
               {!questionNotFound && (
                  <QuestionCard fluid={true} question={question} user={user} author={author} isAnswerMode={true}
                                onClickBack={this.handleBack} isLoading={isFetching}
                                onAnswerSelected={this.handleAnswerSelected}/>
               )}
               {/*{questionNotFound && <Segment>*/}
               {/*   <Header>Question not found</Header>*/}
               {/*   <div>Please go back to the <Link to='/'>Home page</Link></div>*/}
               {/*</Segment>}*/}

               {questionNotFound && <Redirect to='/404'/>}
            </Segment>
         </Container>
      );
   }
}


QuestionDetailPage.propTypes = {};

const mapStateToProps = (state) => {
   const users = state.users.data;
   const {user = {}} = state.authentication;
   return {
      isFetching: state.questions.isFetching || state.users.isFetching,
      users,
      questions: state.questions.data,
      authenticatedUser: users[user.id]
   }
};
const mapDispatchToProps = (dispatch) => ({
   setAnswer: (id, answer) => dispatch(questionActions.setAnswer(id, answer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailPage);
