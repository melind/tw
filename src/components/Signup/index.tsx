import React, { useState } from 'react';
import './index.css';
import { Redirect, Link } from 'react-router-dom';
import  displayError  from '../../lib/validation';
// component = function return element to display
const Signup = ({pseudo, mail, password, subscriber, onSubmit, error, init}) => {
    
    init();

    console.log("states come from reducer:", pseudo, mail, subscriber, error);

    const [formState, setFormState] = useState({pseudo, mail, password, subscriber});
    const handleChange = (e) => {
        const name: string = e.target.name;
        const value: string = e.target.value;
        
        setFormState({...formState, [name]: value}); // name_input : input_value
        
        console.log("handleChange :", name, "value: ", value);
            
    }

   const result = displayError(formState); 
   console.log("error from result validation de signup: ",result , "0", result[0]);

 const handleSubmit = (e) => {
        e.preventDefault();
        console.log("props of signup  after submit: ",  formState);
        console.log("value input: ",formState.pseudo, formState.mail);
        
        const {pseudo, mail, password, subscriber} = formState;
        console.log("props update by input value:", pseudo, mail, password, subscriber);
        if (result[0] === undefined && result[2] === undefined) { 
        onSubmit(formState);}
   
    }


    
    if(subscriber) return  <Redirect to="/login" />
     
   

    return (

        <div>
        <h1>Inscrivez-vous</h1>
         <form onSubmit={handleSubmit} action="/signup" method="POST" >
          <input name="pseudo" placeholder="Entrer votre pseudo" onChange={handleChange} value={formState.pseudo} required></input>
          <input name="mail" placeholder="Entrer votre e-mail" onChange={handleChange} value={formState.mail} ></input>
          <input name="password" type="password" placeholder="Entrer votre mot de passe" onChange={handleChange} value={formState.password} ></input>
          <button type="submit" >Valider</button>
        </form>
        <p>  {result} {error}</p>
        <Link to="/login">Déjà inscrit ?</Link>
        </div>

    )
    
} 

export default Signup;