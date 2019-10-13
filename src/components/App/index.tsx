import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import './index.css';

import Home from '../Home';
import Signup from '../../containers/Signup';
import Login from '../../containers/Login';

const App = () => {
  return (
     
    <div >
     
      <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/signup"  component={Signup} />
                <Route path="/login" component={Login}/>
                <Route render={() => (
                    <div className="App"> 
                     <header className="App-header">  
                     </header>
                        <h1>Ici c'est le component APP pas l'accueil</h1>
                    </div>
                )} />
            </Switch>
    </div>
    
  );
}

export default App;
