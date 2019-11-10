import React, { useState } from 'react';
import './index.css';
import { Redirect, Link } from 'react-router-dom';
// component = function return element to display
const Pseudo = ({pseudo, update, error, onSubmit, init}) => {
    
    init();

    console.log("states come from update:", pseudo, error);

    const [formState, setFormState] = useState({pseudo, });
    const handleChange = (e) => {
        const name: string = e.target.name;
        const value: string = e.target.value;
        
        setFormState({...formState, [name]: value}); // name_input : input_value
        
        console.log("handleChange update:", name, "value: ", value);
            
    }


 const handleSubmit = (e) => {
        e.preventDefault();
        console.log("props of update after submit: ",  formState);
        console.log("value input: ",formState.pseudo);
        
        const {pseudo} = formState;
        console.log("props update by input value:", pseudo,  );
        onSubmit(formState);
   
    }

            if (update) return <Redirect to="/account" />
     
   

    return (

        <div>
        <h1>Modifications</h1>
         <form onSubmit={handleSubmit} action="/updatePseudo" method="POST" >
          <input name="pseudo" placeholder="Entrer votre pseudo" onChange={handleChange} value={formState.pseudo} required></input>
         
          <button type="submit" >Valider</button>
        </form>
        <p>   {error}</p>
        </div>

    )
    
} 

export default Pseudo;