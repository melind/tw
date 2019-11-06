import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
//import logo from './logo.svg';
import userAPI from '../../services/userAPI';
import './index.css';

import Home from '../Home';
import Signup from '../../containers/Signup';
import Login from '../../containers/Login';
import Account from '../../containers/Account';
import NotFoundPage from '../NotFoundPage';
import Media from '../Media';
import Genres from '../Genres';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
const App = () => {
  userAPI.index();
  

  return (
     
    <div >
     
      <Switch>
                <Route path="/" exact render={ () => (
                    <div className="App"> 
                     <header className="App-header"> 
                     <h1>Accueil des non connectés </h1> 
                     <Link to="/signup">SignUp</Link>
                     <Link to="/login">login</Link>
                     </header>
                    </div>
                )} />
                <PrivateRoute  path="/home"  component={Home} />
                <PrivateRoute path="/account"  component={Account} />
                <PrivateRoute path="/media"  component={Media} />
                <PrivateRoute path="/genres/:id"  component={Genres} />
                <PublicRoute path="/signup"  component={Signup} />
                <PublicRoute path="/login" component={Login}/>
                <Route path="/404" component={NotFoundPage} />
                    <Redirect to="/404" />
            </Switch>
    </div>
    
  );
}

export default App;
