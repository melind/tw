import React, { useState, useEffect} from 'react';
import { Redirect, Link} from 'react-router-dom';
import './index.css';

const Login = ({pseudo, password, loggedin, subscriber, onSubmit, error, init}) => {


 setTimeout(function () {
    init();

  }, 1000);

  console.log("states come from reducer:", pseudo, "abonné ",subscriber, "erreur ",error);
  const [formState, setFormState] = useState({pseudo, password, loggedin, subscriber});
 
 
  const handleChange = (e) => {
      const name: string = e.target.name;
      const value: string = e.target.value;
      setFormState({...formState, [name]: value}); // name_input : input_value
      
      
      console.log("handleChange :", name, "value: ", value);
  }
 const handleSubmit = (e) => {
        e.preventDefault();
        console.log("props of signup send after submit: ",  formState);
        console.log("value input: ",formState.pseudo);
        
        const {pseudo,  password, subscriber, loggedin} = formState;
        console.log("props update send  by input value:", pseudo, password, subscriber, loggedin);
        onSubmit(formState);
        
        
    }
    if(loggedin) return <Redirect to="/home" />
   
     
    
    return (

        <div className="login"> 

        <h1>Connectez-Vous</h1>< br/>
        
        <form onSubmit={handleSubmit} >
        <p>Pseudo : </p> <input className="inputLogin" name="pseudo" placeholder="Entrer votre pseudo" onChange={handleChange} value={formState.pseudo}></input> < br/>< br/>
        <p>Mot de passe : </p><input className="inputLogin" name="password" type="password" placeholder="Entrer votre mot de passe" onChange={handleChange} value={formState.password}></input> < br/>< br/>< br/>
          <button className="buttonLogin" type="submit" >Valider</button>
          <p>{error}<br/>  
            <Link to="/signup">Pas encore inscrit ?</Link>
          </p> 
        </form>
        
        </div>

    )
    
}

export default Login;