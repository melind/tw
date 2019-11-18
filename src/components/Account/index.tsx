import React, { useState, useEffect }  from 'react';
import { Redirect, Link  } from 'react-router-dom';
import './index.css';


const Account = ({display, pseudo, mail, password, date, onClick, init}) => {

display();
const [subscriber, setSubscriber] = useState(true);
console.log({pseudo, mail, password, date});

date = date.slice(0, 10);

console.log(date.slice(0, 10));
const handleDelete = () => {
    if(window.confirm("Etes-vous sur?")) { 
        onClick();
        setSubscriber(false);
    }
}

const handleInit = () => {
    init();
}

if(!subscriber) { return <Redirect to="/" />}


    return (

        <div className="account"><h1>< img src="../../../images/popcorn.svg" alt="image d'un pot de popcorn" />Votre compte< img src="../../../images/popcorn.svg" alt="image d'un pot de popcorn"/></h1>Pseudo: {pseudo} < br/> adresse mail: {mail} < br/>
        Date d'inscription: {date} < br/>< br/> < br/> 
          
        <Link to="/updatePseudo" onClick={handleInit}>Modifier votre pseudo</Link> < br/>
        <Link to="/updateMail" onClick={handleInit}>Modifier votre adresse mail</Link> < br/>
        <Link to="/updatePassword" onClick={handleInit}>Modifier votre mot de passe</Link>< br/>
        <Link to="/home"> Accueil </Link>< br/>< br/>
        <button onClick={handleDelete}><img src="https://media.giphy.com/media/3o7aD7TFLsZjgzXrZS/giphy.gif" alt="regard de john travoltat dans grease"/>Désinscription</button> 
        <p>“Powered by Giphy” add and the Giphy logo</p>
        </div>

    )
    
} 

export default Account;