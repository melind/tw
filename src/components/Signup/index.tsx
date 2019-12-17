import React, { useState } from 'react';
import './index.css';
import { Redirect, Link } from 'react-router-dom';
import  displayError  from '../../lib/validation';
import {Button, Input} from 'antd';
// component = function return element to display
const Signup = ({pseudo, mail, password, subscriber, onSubmit, error, init}) => {
    
    setTimeout(function () {
        init();
    
      }, 1000);


    const [formState, setFormState] = useState({pseudo, mail, password, subscriber});
    const handleChange = (e) => {
        const name: string = e.target.name;
        const value: string = e.target.value;
        
        setFormState({...formState, [name]: value}); // name_input : input_value
        
       
            
    }

   const result = displayError(formState); 
 

 const handleSubmit = (e) => {
        e.preventDefault();
        
        
        if (result[0] === undefined && result[2] === undefined) { 
        onSubmit(formState);}
   
    }


    
    if(subscriber) return  <Redirect to="/login" />
     
   

    return (

        <div className="form">

        <h1>Inscrivez-vous</h1><br/>

         <form onSubmit={handleSubmit} action="/signup" method="POST" >
          <label htmlFor="pseudo">Pseudo : </label><Input className="input" id="pseudo" name="pseudo" placeholder="Entrer votre pseudo" onChange={handleChange} value={formState.pseudo} required></Input> <br/>
          <label htmlFor="mail">E-mail : </label><Input className="input" id="mail" name="mail" placeholder="Entrer votre e-mail" onChange={handleChange} value={formState.mail} required></Input> <br/>
          <label htmlFor="password"> Mot de passe : </label><Input className="input" id="password" name="password" type="password" placeholder="Entrer votre mot de passe" onChange={handleChange} value={formState.password} required></Input> < br/><br/>
          <Button htmlType="submit" >Valider</Button>
          <p>  < br/>{result[0]} <br/> {result[2]} {error} <br/>
            <Link to="/login">Déjà inscrit ?</Link>
          </p>
        </form>
        
        </div>

    )
    
} 

export default Signup;