import React, { useState } from 'react';
import './index.css';
import axios from 'axios';

// Un composant est une fonction renvoyant les éléments à afficher
const Signup = ({pseudo, mail, password, subscriber, loggedin, onSubmit}) => {
    console.log("states come from reducer:", pseudo, mail, subscriber, loggedin);
    const [formState, setFormState] = useState({pseudo, mail, password, subscriber, loggedin});

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
        
        const {pseudo, mail, password, subscriber, loggedin} = formState;
        console.log("props update by input value:", pseudo, mail, subscriber, loggedin);
        onSubmit(formState);
        
    }
    
    return (

        <div>
        <h1>Inscrivez-vous</h1>
         <form onSubmit={handleSubmit} >
          <input name="pseudo" placeholder="Entrer votre pseudo" onChange={handleChange} value={formState.pseudo} required></input>
          <input name="mail" placeholder="Entrer votre mail" onChange={handleChange} value={formState.mail}></input>
          <input name="password" type="password" placeholder="Entrer votre mot de passe" onChange={handleChange} value={formState.password} ></input>
          <button type="submit" >Valider</button>

        </form>
        
        
        </div>

    )
    
} 

export default Signup;