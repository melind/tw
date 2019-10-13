import React, { useState } from 'react';
import './index.css';

const Signup = ({pseudo, mail, password, subscriber}) => {
console.log("above all:", pseudo, mail, subscriber);
const [formState, setFormState] = useState({pseudo, mail, password, subscriber});

    const handleChange = (e) => {
        const name: string = e.target.name;
        const value: string = e.target.value;
        setFormState({...formState, [name]: value}); // name_input : input_value
        
       //signup({[name]: value});
        
        console.log("handleChange :", name, "value: ", value);
    }
    
 const handleSubmit = (e) => {
        e.preventDefault();
        console.log("props de signup  après submit: ",  formState);
        console.log("value input: ",formState.pseudo, formState.mail);
        
        const {pseudo, mail, password, subscriber} = formState;
        console.log("after all:", pseudo, mail, subscriber);
        /* COMMENT TRANSFERER pseudo = formState.pseudo, mail = formState.mail, password = formState.password, subscriber = formState.subscriber OU onSubmit(formState)*/
    }
    return (

        <div>
        <h1>Inscrivez-vous</h1>
         <form onSubmit={handleSubmit} >
          <input name="pseudo" placeholder="Entrer votre pseudo" onChange={handleChange} value={formState.pseudo} ></input>
          <input name="mail" placeholder="Entrer votre mail" onChange={handleChange} value={formState.mail}></input>
          <input name="password" placeholder="Entrer votre mot de passe" onChange={handleChange} value={formState.password} ></input>
          <button type="submit">Valider</button>

        </form>
        
        
        </div>

    )
    
} 

export default Signup;