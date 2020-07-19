// Libraries
import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from "prop-types";

// This is a custom route that defines the logic when the user access to a public route
const PublicRoute = ({
                        isAuthenticated,
                        component: Component,
                        ...rest
                     }) => (
   <Route {...rest} component={(props) => (
      isAuthenticated ? (
         // If the user is already log in it will redirect the user to the home page
         <Redirect to="/"/>
      ) : (
         <Component {...props} />
      )
   )}/>
);

PublicRoute.propTypes = {
   isAuthenticated: PropTypes.any,
   component: PropTypes.any.isRequired,
   ...Route.propTypes
};

const mapStateToProps = (state) => ({
   isAuthenticated: state.authentication.user != null // Validate if the user is authenticated
});

export default connect(mapStateToProps)(PublicRoute);
