import React from 'react';
import { Route,  Redirect } from 'react-router-dom';
import userAPI from '../services/userAPI';
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (userAPI.isAuth() === false) {
        return <Redirect to="/" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

export default PrivateRoute;