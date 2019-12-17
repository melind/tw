import React, { useState} from 'react';
import { Redirect, Link} from 'react-router-dom';
import {Button, Input} from 'antd';
import './index.css';

const Login = ({pseudo, password, loggedin, subscriber, onSubmit, error, init}) => {


 setTimeout(function () {
    init();
  }, 1000);

 
  const [formState, setFormState] = useState({pseudo, password, loggedin, subscriber});
 
 
  const handleChange = (e) => {
      const name: string = e.target.name;
      const value: string = e.target.value;
      setFormState({...formState, [name]: value}); // name_input : input_value
      
      
    
  }
  const handleSubmit = (e) => {
        e.preventDefault();
    
        onSubmit(formState);
        
        
    }
    if(loggedin) return <Redirect to="/home" />
   
     
     
    return (

        <div className="form"> 

        <h1>Connectez-Vous</h1>< br/>
        
        <form onSubmit={handleSubmit} >
        <label htmlFor="pseudo">Pseudo :  </label><Input className="input" id="pseudo" name="pseudo" placeholder="Entrer votre pseudo" onChange={handleChange} value={formState.pseudo} required></Input> < br/>< br/>
        <label htmlFor="password">Mot de passe : </label><Input className="input" id="password" name="password" type="password" placeholder="Entrer votre mot de passe" onChange={handleChange} value={formState.password} required></Input> < br/>< br/>< br/>
          <Button  htmlType="submit" >Valider</Button>
          <p>{error}<br/>  
            <Link to="/signup">Pas encore inscrit ?</Link>
          </p> 
        </form>
        
        </div>

    )
    
}

export default Login;