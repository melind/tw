import React, { useState, useEffect }  from 'react';
import { Redirect, Link  } from 'react-router-dom';
import './index.css';


const Account = ({display,pseudo, mail, password, date, onClick,  init}) => {

display();

console.log({pseudo, mail, password, date});

date = date.slice(0, 10);

console.log(date.slice(0, 10));
const handleDelete = () => {
    
        onClick();
    
}

const handleInit = () => {
    init();
}

    return (

        <div className="account"><h1>Votre compte</h1>Pseudo: {pseudo} < br/> adresse mail: {mail} < br/>
        Date d'inscription: {date} < br/>< br/> < br/> 
        <Link to="/" onClick={handleDelete}>Désinscription</Link> < br/>  
        <Link to="/updatePseudo" onClick={handleInit}>Modifier votre pseudo</Link> < br/>
        <Link to="/updateMail" onClick={handleInit}>Modifier votreadresse mail</Link> < br/>
        <Link to="/updatePassword" onClick={handleInit}>Modifier votre mot de passe</Link>< br/>< br/>
        <Link to="/home"> Accueil </Link>
        </div>

    )
    
} 

export default Account;