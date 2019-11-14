import React, { useState } from 'react';
import './index.css';
import { Redirect, Link } from 'react-router-dom';
import  displayError  from '../../lib/validationPassword';
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
      
          onSubmit(formState);
      
        
   
    }

            if (update) return <Redirect to="/account" />
     
   

    return (

        <div>
        <h1>Modifications</h1>
         <form onSubmit={handleSubmit} action="/updatePassword" method="POST" >
          <input name="password" type="password" placeholder="Entrer votre password" onChange={handleChange} value={formState.password} required></input>
         
          <button type="submit"  >Valider</button>
        </form>
        <p>  {result} {error}</p>
        </div>

    )
    
} 

export default Password;