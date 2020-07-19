// Libraries
import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import PropTypes from "prop-types";

// This is a custom route that define what should happen when the user enter in a private route.
const PrivateRoute = ({
                         isAuthenticated,
                         component: Component,
                         ...rest
                      }) => (
   <Route {...rest} render={(props) => (
      isAuthenticated ? (
         <Component {...props} />
      ) : (
         // If the user is not authenticated it will be redirected to the login, saving the route that try to access,
         // To redirect to that route after the login
         <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
      )
   )}/>
);

PrivateRoute.propTypes = {
   isAuthenticated: PropTypes.any,
   component: PropTypes.any,
   ...Route.propTypes
};

const mapStateToProps = (state) => ({
   isAuthenticated: state.authentication.user != null
});

export default connect(mapStateToProps)(PrivateRoute);
