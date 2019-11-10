import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
//import logo from './logo.svg';
import userAPI from '../../services/userAPI';
import './index.css';

import Home from '../Home';
import H from '../H';
import Signup from '../../containers/Signup';
import Login from '../../containers/Login';
import Account from '../../containers/Account';
import Pseudo from '../../containers/Pseudo';
import Mail from '../../containers/Mail';
import Password from '../../containers/Password';
import NotFoundPage from '../NotFoundPage';
import Media from '../Media';
import Genres from '../Genres';
import Genrestv from '../Genrestv';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';

const App = () => {
  userAPI.index();
  return (
     
    <div >
     
      <Switch>
                
                <Route path="/" exact component={H} />
                <PrivateRoute  path="/home"  component={Home} />
                <PrivateRoute path="/account" component={Account} />
                <PrivateRoute path="/updatePseudo" component={Pseudo} />
                <PrivateRoute path="/updateMail" component={Mail} />
                <PrivateRoute path="/updatePassword" component={Password} />
                <PrivateRoute path="/media/:media/:id"  component={Media} />
                <PrivateRoute path="/genres/:id"  component={Genres} />
                <PrivateRoute path="/genrestv/:id"  component={Genrestv} />
                <PublicRoute path="/signup"  component={Signup} />
                <PublicRoute path="/login" component={Login}/>
                <Route path="/404" component={NotFoundPage} />
                    <Redirect to="/404" />
            </Switch> 
    </div>
    
  );
}

export default App;
