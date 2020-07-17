import React from 'react';
import PrivateRoute from "../routers/PrivateRoute";
import PublicRoute from "../routers/PublicRoute";
import HomePage from "./home/Home.page";
import Login from "./login/Login.page";

const RouterPage = (props) => {
   return (
      <React.Fragment>
         <PrivateRoute path='/' component={HomePage}/>
         <PublicRoute exact={true} path='/login' component={Login}/>
      </React.Fragment>
   );
};

RouterPage.propTypes = {};

export default RouterPage;
