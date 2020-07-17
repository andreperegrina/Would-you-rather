import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from "prop-types";

const PrivateRoute = ({
                         isAuthenticated,
                         component: Component,
                         ...rest
                      }) => (
   <Route {...rest} render={(props) => (
      isAuthenticated ? (
         <div>
            <Component {...props} />
         </div>
      ) : (
         <Redirect to="/login"/>
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
