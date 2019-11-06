import React from 'react';
import { Route,  Redirect } from 'react-router-dom';
import userAPI from '../../services/userAPI';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} //contains the React Router props when the initial component is rendered
    render={(props) => {
      if (userAPI.isAuth()) {
        return <Redirect to="/home" />;
      }
        else {
        return <Component {...props} />;
      }
    }}
  />
);

export default PublicRoute;