import React, {Component} from 'react';
import {connect} from "react-redux";
import {Container, Segment, Card, Form, Radio, Loader, Dimmer} from "semantic-ui-react";

import {convertObjectToArray} from "../../../utils";
import QuestionCard from "../../../components/question-card/QuestionCard";
import {filterQuestions, orderQuestions} from "./Questions.util";

import './Questions.css'
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
      filterBy: 'unanswered'
   };
   handleOpenQuestion = (id) => this.props.history.push(`/questions/${id}`);

   handleFilterByChange = (e, {value}) => this.setState({filterBy: value});

   render() {
      const {filterBy} = this.state;
      const {questions, users, authenticatedUserId, isFetching} = this.props;
      const questionList = orderQuestions(filterQuestions(convertObjectToArray(questions), filterBy, authenticatedUserId));
      return (
         <Container className='QuestionsPage'>
            <Dimmer active={isFetching}>
               <Loader/>
            </Dimmer>
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
      isFetching: state.questions.isFetching,
      questions: state.questions.data,
      authenticatedUserId: user.id
   }
};

const mapDispatchToProps = (dispatch) => ({
   addQuestion: (optionOneText, optionTwoText) => dispatch(questionActions.add(optionOneText, optionTwoText))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
