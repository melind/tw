import React, { useState} from 'react';
import './index.css';

const Login = ({pseudo, password, loggedin, subscriber}) => {
  const [formState, setFormState] = useState({pseudo, password, loggedin, subscriber});

  const handleChange = (e) => {
      const name: string = e.target.name;
      const value: string = e.target.value;
      setFormState({...formState, [name]: value}); // name_input : input_value
      
      
      console.log("handleChange :", name, "value: ", value);
  }
 const handleSubmit = (e) => {
        e.preventDefault();
        console.log("value input: ",formState.pseudo);
    }
    return (

        <div>
        <h1>Connectez-Vous</h1>
        <form onSubmit={handleSubmit}>
          <input name="pseudo" placeholder="Entrer votre pseudo" onChange={handleChange} value={formState.pseudo}></input>
          <input name="password" placeholder="Entrer votre mot de passe" onChange={handleChange} value={formState.password}></input>
          <button type="submit">Valider</button>

        </form>
        </div>

    )
    
}

export default Login;