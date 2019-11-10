import React, { useState, useEffect }  from 'react';
import { Redirect, Link  } from 'react-router-dom';
import './index.css';


const Account = ({display,pseudo, mail, password, date, onSubmit, onClick, error, init}) => {

display();

console.log({pseudo, mail, password, date});

const handleDelete = () => {
    onClick();
}

const handleInit = () => {
    init();
}

    return (

        <div><h1>Votre compte</h1>Pseudo: {pseudo} adresse mail: {mail} 
        Date d'inscription: {date} 
        <Link to="/" onClick={handleDelete}>Désinscription</Link>
        <Link to="/updatePseudo" onClick={handleInit}>Modifier votre pseudo</Link>
        <Link to="/updateMail" onClick={handleInit}>Modifier votreadresse mail</Link>
        <Link to="/updatePassword" onClick={handleInit}>Modifier votre mot de passe</Link>
        </div>

    )
    
} 

export default Account;