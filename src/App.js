// Libraries
import React, {Component} from 'react';
import {connect} from "react-redux";
import {BrowserRouter, Switch} from "react-router-dom";

// Custom routes
import PublicRoute from "./routers/PublicRoute";
import PrivateRoute from "./routers/PrivateRoute";

// Pages
import LoginPage from "./pages/login/Login.page";
import HomePage from "./pages/home/Home.page";

// Actions
import userActions from "./actions/users.action";

// Style
import './App.css';

class App extends Component {
   componentDidMount() {
      this.props.loadUsers();
   }

   render() {
      return (
         <div className="App">
            <BrowserRouter>
               <Switch>
                  <PublicRoute exact={true} path='/login' component={LoginPage}/>
                  <PrivateRoute path='/' component={HomePage}/>
               </Switch>
            </BrowserRouter>
         </div>
      );
   }
}

const mapDispatchToProps = (dispatch) => ({
   loadUsers: () => dispatch(userActions.load()),
});

export default connect(undefined, mapDispatchToProps)(App);
