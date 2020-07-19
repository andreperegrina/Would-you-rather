// Libraries
import React, {Component} from 'react';
import {connect} from "react-redux";
import {
   Container,
   Segment,
   Loader,
   Dimmer,
   Form,
   Header,
   Input,
   Label,
   Divider,
   Card,
   Button
} from "semantic-ui-react";

// Actions
import questionActions from "../../../actions/questions.action";


class NewQuestionPage extends Component {
   state = {
      optionOne: '',
      optionTwo: '',
      enableValidation: false,
   };

   // This code will handle when the user created a new question
   handleSubmit = (e) => {
      e.preventDefault();
      const {optionOne, optionTwo} = this.state;
      if (optionTwo === '' || optionTwo === '') {
         this.setState({enableValidation: true});
         return;
      }
      this.setState({enableValidation: false});
      this.props.addQuestion(optionOne, optionTwo).then(() => this.props.history.push('/'));
   };

   render() {
      const {enableValidation, optionOne, optionTwo} = this.state;
      const {isFetching} = this.props;
      return (
         <Container className='QuestionsPage'>
            <Dimmer active={isFetching}>
               <Loader/>
            </Dimmer>
            <Segment basic>
               <Card fluid>
                  <Card.Content>
                     <Card.Header>Create new question</Card.Header>
                     <Form>
                        <Form.Field required>
                           <div>Complete the question</div>
                           <Header as='h2'>Would you rather...</Header>
                        </Form.Field>
                        <Form.Field required>
                           <Input placeholder='Enter option one text here'
                                  onChange={(e, {value}) => this.setState({optionOne: value})}/>
                           {enableValidation && optionOne === '' && <Label basic color='red' pointing>
                              Please enter a value
                           </Label>}
                        </Form.Field>
                        <Divider horizontal>Or</Divider>
                        <Form.Field>
                           <Input placeholder='Enter option two text here'
                                  onChange={(e, {value}) => this.setState({optionTwo: value})}/>
                           {enableValidation && optionTwo === '' && <Label basic color='red' pointing>
                              Please enter a value
                           </Label>}
                        </Form.Field>
                     </Form>
                  </Card.Content>
                  <Card.Content extra style={{textAlign:'right'}}>
                     <span style={{float: 'left', marginTop: '10px', fontSize: '8px'}}>Hey. psst. Yes you!. If you are fan of Re-zero. Type the twins ;)</span>
                     <Button onClick={this.handleSubmit}>Submit</Button>
                  </Card.Content>
               </Card>
            </Segment>
         </Container>
      );
   }
}

NewQuestionPage.propTypes = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionPage);
