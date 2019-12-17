import React, { useState } from 'react';
import './index.css';
import { Redirect, Link } from 'react-router-dom';
import {Input} from 'antd';
// component = function return element to display
const Pseudo = ({pseudo, update, error, onSubmit, init}) => {
    
    init();

   

    const [formState, setFormState] = useState({pseudo});
    const handleChange = (e) => {
        const name: string = e.target.name;
        const value: string = e.target.value;
        
        setFormState({...formState, [name]: value}); // name_input : input_value
        
       
            
    }


 const handleSubmit = (e) => {
        e.preventDefault();
        
        onSubmit(formState);
    
    }

            if (update) return <Redirect to="/account" />
     
   

    return (

        <div className="setAccount">
        <h1>Modifier votre pseudo</h1>
        <Link to="/account" className="return">  Retour </Link>
         <form onSubmit={handleSubmit} action="/updatePseudo" method="POST" >
          <Input className="input" name="pseudo" placeholder="Entrer votre pseudo" onChange={handleChange} value={formState.pseudo} required></Input>
         
          <button  type="submit" >< img src="../../../images/clap2.png" alt="un clap de cinéma " /></button>

          <p> {error}</p>

        </form>
        
        </div>

    )
    
} 

export default Pseudo;