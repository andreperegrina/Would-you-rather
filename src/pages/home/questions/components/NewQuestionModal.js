import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Divider, Form, Header, Input, Label, Modal} from "semantic-ui-react";

class NewQuestionModal extends Component {
   state = {
      optionOne: '',
      optionTwo: '',
      enableValidation: false,
   };

   handleClose = () => {
      const {onClose} = this.props;
      if (onClose) {
         onClose()
      }
   };

   handleSubmit = (e) => {
      e.preventDefault();
      const {onSubmit} = this.props;
      const {optionOne, optionTwo} = this.state;
      if (optionTwo === '' || optionTwo === '') {
         this.setState({enableValidation: true});
         return;
      }
      this.setState({enableValidation: false});
      if (onSubmit) {
         onSubmit({optionOne, optionTwo})
      }
   };

   render() {
      const {enableValidation, optionOne, optionTwo} = this.state;
      const {trigger, isOpen} = this.props;
      return (
         <Modal trigger={trigger} open={isOpen} onClose={this.handleClose}>
            <Modal.Header>Create new question</Modal.Header>
            <Modal.Content>
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
            </Modal.Content>
            <Modal.Actions>
               <span style={{float:'left',marginTop:'10px',fontSize:'8px'}}>Hey. psst. Yes you!. If you are fan of Re-zero. Type the twins ;)</span>
               <Button onClick={this.handleSubmit}>Submit</Button>
            </Modal.Actions>
         </Modal>
      );
   }
}

NewQuestionModal.propTypes = {
   isOpen: PropTypes.bool,
   trigger: PropTypes.any,
   onClose: PropTypes.func,
   onSubmit: PropTypes.func
};

export default NewQuestionModal;
