import React, { useState, useEffect } from 'react';
import './index.css';
import { Redirect } from 'react-router-dom';
import Home from '../Home';
import validate from 'validate.js';
import Regex from 'regex';
// component = function return element to display
const Signup = ({pseudo, mail, password, subscriber, onSubmit}) => {
    console.log("states come from reducer:", pseudo, mail, subscriber);
    const [formState, setFormState] = useState({pseudo, mail, password, subscriber});
  const [error, setErrorState] = useState({'mail': '', 'pseudo': '', 'password': ''});
    const handleChange = (e) => {
        const name: string = e.target.name;
        const value: string = e.target.value;
        
        setFormState({...formState, [name]: value}); // name_input : input_value
        
        console.log("handleChange :", name, "value: ", value);
            
    }
    
   
   
 const handleSubmit = (e) => {
        e.preventDefault();
        console.log("props of signup  after submit: ",  formState);
        console.log("value input: ",formState.pseudo, formState.mail);
        
        const {pseudo, mail, password, subscriber} = formState;
        console.log("props update by input value:", pseudo, mail, password, subscriber);
        onSubmit(formState);
   
     const constraints = {
            mail: {
              presence: true,
              format: {
                pattern: "^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$"//limit 4 marche pas ???
              }
            },
            password: {
              presence: true,
              length: {
                minimum: 8,
                message: "must be at least 8 characters"
              }
            },
            pseudo: {
              presence: true,
            }
        };
        
        const result = validate(formState, constraints);
        if (result) { 
        console.log("result: ",result);
      setErrorState({...error, ...result});
      console.log("error of typing",error)
        }
       
    }
    
    if(subscriber === true) return <Redirect to="/login" />
     
   

    return (

        <div>
        <h1>Inscrivez-vous</h1>
         <form onSubmit={handleSubmit} action="/signup" method="POST" >
          <input name="pseudo" placeholder="Entrer votre pseudo" onChange={handleChange} value={formState.pseudo} required></input>
          <input name="mail" placeholder="Entrer votre mail" onChange={handleChange} value={formState.mail} ></input>
          <input name="password" type="password" placeholder="Entrer votre mot de passe" onChange={handleChange} value={formState.password} ></input>
          <button type="submit" >Valider</button>
        </form>
        <p> {error.mail} {error.password} {error.pseudo}</p>
        
        </div>

    )
    
} 

export default Signup;