import React, { useState } from 'react';
import './index.css';
import { Redirect, Link } from 'react-router-dom';
import  displayError  from '../../lib/validationMail';
import {Input} from 'antd';
// component = function return element to display
const Mail = ({mail, update, error, onSubmit, init}) => {
    
    init();



    const [formState, setFormState] = useState({mail});
    const handleChange = (e) => {
        const name: string = e.target.name;
        const value: string = e.target.value;
        
        setFormState({...formState, [name]: value}); // name_input : input_value
        
     
            
    }

   const result = displayError(formState); 

 const handleSubmit = (e) => {
        e.preventDefault();
        
       
      
        if (!result[0]) { 
          onSubmit(formState);
        }
        
        
   
    }

            if (update) return <Redirect to="/account" />
     
   

    return (

        <div className="setAccount">
        <h1>Modifier votre e-mail</h1>
        <Link to="/account" className="return"> Retour </Link>
         <form onSubmit={handleSubmit} action="/updateMail" method="POST" >
          <Input className="input" name="mail" placeholder="Entrer votre mail" onChange={handleChange} value={formState.mail} required></Input>
         
          <button type="submit" >< img src="../../../images/clap2.png" alt="un clap de cinéma " /></button>

          <p> {result}  {error}</p>
        </form>
        
        </div>

    )
    
} 

export default Mail;