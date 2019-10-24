import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//import logo from './logo.svg';
import './index.css';

import Home from '../Home';
import Signup from '../../containers/Signup';
import Login from '../../containers/Login';
import NotFoundPage from '../NotFoundPage';
import PrivateRoute from '../PrivateRoute';

const App = () => {
  return (
     
    <div >
     
      <Switch>
                <Route path="/" exact render={() => (
                    <div className="App"> 
                     <header className="App-header"> 
                     <h1>Accueil des non connectés </h1> 
                     </header>
                    </div>
                )} />
                <PrivateRoute path="/home"  component={Home} />
                <Route path="/signup"  component={Signup} />
                <Route path="/login" component={Login}/>
                <Route path="/404" component={NotFoundPage} />
                    <Redirect to="/404" />
            </Switch>
    </div>
    
  );
}

export default App;
