import React, {Component} from 'react';
import {connect} from "react-redux";
import {Container, Segment, Card, Form, Radio, Button, Icon} from "semantic-ui-react";

import {convertObjectToArray} from "../../../utils";
import QuestionCard from "../../../components/question-card/QuestionCard";
import {filterQuestions} from "./Questions.util";

import './Questions.css'
import NewQuestionModal from "./components/NewQuestionModal";

import questionActions from "../../../actions/questions.action";

const filterByOptions = [{
   key: 'unanswered',
   value: 'unanswered',
   text: 'Unanswered'
}, {
   key: 'answered',
   value: 'answered',
   text: 'Answered'
}, {
   key: 'all',
   value: 'all',
   text: 'All'
},];

class QuestionsPage extends Component {
   state = {
      filterBy: 'unanswered',
      isNewQuestionOpen: false
   };
   handleOpenQuestion = (id) => this.props.history.push(`/questions/${id}`);

   handleFilterByChange = (e, {value}) => this.setState({filterBy: value});

   handleSubmit = (values) => {
      this.props.addQuestion(values.optionOne, values.optionTwo);
      this.openNewQuestion(false);
   };

   openNewQuestion = (isOpen) => this.setState({isNewQuestionOpen: isOpen});

   render() {
      const {filterBy, isNewQuestionOpen} = this.state;
      const {questions, users, authenticatedUserId} = this.props;
      const questionList = filterQuestions(convertObjectToArray(questions), filterBy, authenticatedUserId);
      return (
         <Container className='QuestionsPage'>
            <Segment>
               <Segment basic>
                  <Form className='toolbar'>
                     <Form.Group widths='equal'>
                        <Form.Group inline className='left-options'>
                           <label>Show: </label>
                           {filterByOptions.map((e) => (
                              <Form.Field
                                 key={e.key}
                                 control={Radio}
                                 label={e.text}
                                 value={e.value}
                                 checked={filterBy === e.value}
                                 onChange={this.handleFilterByChange}
                              />
                           ))}
                        </Form.Group>
                        <Form.Field className='right-options'>
                           <NewQuestionModal
                              isOpen={isNewQuestionOpen}
                              onClose={() => this.openNewQuestion(false)}
                              onSubmit={this.handleSubmit}
                              trigger={
                                 <Button icon labelPosition='left' onClick={() => this.openNewQuestion(true)}>
                                    <Icon name='plus'/>
                                    New Question
                                 </Button>
                              }/>
                        </Form.Field>
                     </Form.Group>
                  </Form>
               </Segment>
               <Card.Group centered>
                  {questionList && questionList.map((e) => (
                     <QuestionCard key={e.id} question={e} author={users[e.author]}
                                   onOpenQuestion={this.handleOpenQuestion}/>
                  ))}
               </Card.Group>
            </Segment>
         </Container>
      );
   }
}

QuestionsPage.propTypes = {};

const mapStateToProps = (state) => {
   const users = state.users.data;
   const {user = {}} = state.authentication;
   return {
      users,
      questions: state.questions.data,
      authenticatedUserId: user.id
   }
};

const mapDispatchToProps = (dispatch) => ({
   addQuestion: (optionOneText, optionTwoText) => dispatch(questionActions.add(optionOneText, optionTwoText))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
