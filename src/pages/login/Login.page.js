// Libraries
import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Card, Dropdown, Form} from "semantic-ui-react";

// Actions
import authenticationActions from "../../actions/authentication.action";

// Utils
import {convertUsersToOptions} from "./Login.util";

// Style
import './Login.css'

class LoginPage extends Component {
   state = {
      userId: undefined // This variable of the state will hold the user selected account
   };

   // This function will update the state when the user selected an account to login in
   handleUserChange = (e, data) => this.setState({userId: data.value});

   // This function will handle when the user click on the sign in button
   handleClickSignIn = () => {
      const {userId} = this.state;
      const {users} = this.props;
      if (users[userId]) {
         // If is a valid user it will authenticated the user with that account
         this.props.authenticate(userId);

         // In case of the user attempt to access a private route before this code will redirect the user to the
         // route that try to access the first time
         const {location} = this.props;
         // This information was handle before in the PrivateRoute.js file
         if(location.state && location.state.from) {
            this.props.history.push(location.state.from);
         }
      }

   };

   render() {
      const {users} = this.props;
      // Convert all the users into a option array
      const userOptions = convertUsersToOptions(users);
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
