import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from "prop-types";

const PublicRoute = ({
                        isAuthenticated,
                        component: Component,
                        ...rest
                     }) => (
   <Route {...rest} component={(props) => (
      isAuthenticated ? (
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
   isAuthenticated: state.authentication.user != null
});

export default connect(mapStateToProps)(PublicRoute);
