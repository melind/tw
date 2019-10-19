import React, { useState} from 'react';
import './index.css';
import Home from '../Home';

const Login = ({pseudo, password, loggedin, subscriber, onSubmit}) => {
  console.log("states come from reducer:", pseudo, subscriber);
  const [formState, setFormState] = useState({pseudo, password, loggedin, subscriber});

  const handleChange = (e) => {
      const name: string = e.target.name;
      const value: string = e.target.value;
      setFormState({...formState, [name]: value}); // name_input : input_value
      
      
      console.log("handleChange :", name, "value: ", value);
  }
 const handleSubmit = (e) => {
        e.preventDefault();
        console.log("props of signup  after submit: ",  formState);
        console.log("value input: ",formState.pseudo);
        
        const {pseudo,  password, subscriber, loggedin} = formState;
        console.log("props update by input value:", pseudo, password, subscriber, loggedin);
        onSubmit(formState);

        if(loggedin) return <Home/>
    }
    return (

        <div>
        <h1>Connectez-Vous</h1>
        <form onSubmit={handleSubmit}>
          <input name="pseudo" placeholder="Entrer votre pseudo" onChange={handleChange} value={formState.pseudo}></input>
          <input name="password" type="password" placeholder="Entrer votre mot de passe" onChange={handleChange} value={formState.password}></input>
          <button type="submit">Valider</button>

        </form>
        </div>

    )
    
}

export default Login;