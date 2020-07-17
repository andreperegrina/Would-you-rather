import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Card, Dropdown, Form} from "semantic-ui-react";

import './Login.css'

// Utils
import authenticationActions from "../../actions/authentication.action";

class LoginPage extends Component {
   state = {
      userId: undefined
   };

   handleUserChange = (e, data) => this.setState({userId: data.value});

   handleClickSignIn = () => {
      const {userId} = this.state;
      const {users} = this.props;
      if (users[userId]) {
         this.props.authenticate(userId);
      }
   };

   render() {
      const {users} = this.props;
      const userOptions = Object.keys(users).map((key) => ({
         key: users[key].id, value: users[key].id, text: users[key].name,
         image: {avatar: true, src: users[key].avatarURL},
      }));
      return (
         <div className='Login'>
            <Card>
               <Card.Content>
                  <Card.Header>Welcome to the Would You Rather App</Card.Header>
                  <Card.Meta>
                     <span className='date'>Please sign in to continue</span>
                  </Card.Meta>
               </Card.Content>
               <Card.Content>
                  <Form>
                     <label>Select your username:</label>
                     <Dropdown
                        placeholder='Select Friend'
                        fluid
                        selection
                        options={userOptions}
                        onChange={this.handleUserChange}
                     />
                  </Form>
               </Card.Content>
               <Card.Content extra>
                  <Button fluid onClick={this.handleClickSignIn}>Sign in</Button>
               </Card.Content>
            </Card>
         </div>
      );
   }
}

LoginPage.propTypes = {};

const mapStateToProps = (state) => ({
   users: state.users.data
});
const mapDispatchToProps = (dispatch) => ({
   authenticate: (id) => dispatch(authenticationActions.authenticate(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
