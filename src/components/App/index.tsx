import React, { useState } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
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
import Admin from '../Admin';
import Load from '../Load';
import Forbidden from '../Forbidden';
import Media from '../Media';
import Genre from '../Genre';
import GenreTv from '../GenreTv';
import Mentions from '../Mentions';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';

const App = () => {
  userAPI.index();

  const [loading, setLoading] = useState(true);
    
     setTimeout(function () {
      setLoading(false);
    }, 1000);
    if (loading) {
           return <Load />
         }
   
  return (
     
    <div className="app" >
     <header><p className="title">To Watch </p></header>
     
      <Switch>
                
                <Route path="/" exact component={H} />
                <PrivateRoute  path="/home" exact component={Home} />
                <PrivateRoute path="/account"exact  component={Account} />
                <PrivateRoute path="/updatePseudo" exact component={Pseudo} />
                <PrivateRoute path="/updateMail" component={Mail} />
                <PrivateRoute path="/updatePassword" exact component={Password} />
                <PrivateRoute path="/media/:media/:id" exact  component={Media} />
                <PrivateRoute path="/genre/:id" exact component={Genre} />
                <PrivateRoute path="/genretv/:id" exact component={GenreTv} />
                <PrivateRoute path="/mentions" exact component={Mentions} />
                <PrivateRoute path="/forbidden" exact  component={Forbidden} />
                <PublicRoute path="/signup" exact  component={Signup} />
                <PublicRoute path="/login" exact  component={Login}/>
                <PrivateRoute path="/admin" exact component={Admin}/>
                <Route path="/404" component={NotFoundPage} />
                    <Redirect to="/404" />
            </Switch> 
    </div>
    
  );
}

export default App;
