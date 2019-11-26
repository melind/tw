import React, {useState} from 'react';
import './index.css';
import {Redirect } from 'react-router-dom';
const Forbidden = () => {
    const [redirect, setRedirect] = useState(false);
    
    setTimeout(function () { 
     setRedirect(true);
   }, 4000);
   if (redirect) {
          return <Redirect to="/home" />;
        }
    return (

        <div className="forbidden"> <h1>VIP  ONLY !</h1> <br/>
        <img src="https://media.giphy.com/media/Qak0pFjTzg16g0mcxt/giphy.gif" alt="gif d'une salle de cinéma vide avec à l'écran king-kong"/><br/>
        <p>“Powered by Giphy” add and the Giphy logo</p>
        </div>
        
    )
    
} 

export default Forbidden;