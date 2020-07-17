import React, {Component} from 'react';
import {connect} from "react-redux";
import {BrowserRouter, Switch} from "react-router-dom";

import './App.css';
import RouterPage from "./pages";
import userActions from "./actions/users.action";





class App extends Component {
   componentDidMount() {
      this.props.loadUsers();
   }

   render() {
      return (
         <div className="App">
            <BrowserRouter>
               <Switch>
                  <RouterPage/>
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
