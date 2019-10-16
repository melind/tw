import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//import logo from './logo.svg';
import './index.css';

import Home from '../Home';
import Signup from '../../containers/Signup';
import Login from '../../containers/Login';
import NotFoundPage from '../NotFoundPage';

const App = () => {
  return (
     
    <div >
     
      <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup"  component={Signup} />
                <Route path="/login" component={Login}/>
                <Route path="/404" component={NotFoundPage} />
                    <Redirect to="/404" />
                <Route render={() => (
                    <div className="App"> 
                     <header className="App-header"> 
                     <h1>Ici c'est le component APP pas l'accueil</h1> 
                     </header>
                    </div>
                )} />         
            </Switch>
    </div>
    
  );
}

export default App;
