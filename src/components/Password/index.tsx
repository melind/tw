import React, { useState } from 'react';
import './index.css';
import { Redirect, Link } from 'react-router-dom';
import  displayError  from '../../lib/validationPassword';
import {Input} from 'antd';
// component = function return element to display
const Password = ({password, update, error, onSubmit, init}) => {
    
    init();

    console.log("states come from update:", password, error);

    const [formState, setFormState] = useState({password, });
    const handleChange = (e) => {
        const name: string = e.target.name;
        const value: string = e.target.value;
        
        setFormState({...formState, [name]: value}); // name_input : input_value
        
        console.log("handleChange update:", name, "value: ", value);
            
    }

   const result = displayError(formState); 

 const handleSubmit = (e) => {
        e.preventDefault();
        console.log("props of update after submit: ",  formState);
        console.log("value input: ",formState.password);
        
        const {password} = formState;
        console.log("props update by input value:", password,  );
      
        console.log(result);
        
        if (!result[0]) { 
          onSubmit(formState);
        }
      
       
   
    }

  

            if (update) return <Redirect to="/account" />
     
   

    return (

        <div className="password">
        <h1>Modifications</h1>
        <Link to="/account"> Retour </Link>
         <form onSubmit={handleSubmit} action="/updatePassword" method="POST" >
          <Input className="input" name="password" type="password" placeholder="Entrer votre password" onChange={handleChange} value={formState.password} required></Input>
         
          <button type="submit"  >< img src="../../../images/clap2.png" alt="image d'un clap de cinéma " /></button>

          <p>  {result} {error}</p>
        </form>
       
        </div>

    )
    
} 

export default Password;