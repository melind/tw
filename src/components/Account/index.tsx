import React, { useState, useEffect }  from 'react';
import { Redirect, Link  } from 'react-router-dom';
import './index.css';


const Account = ({display,pseudo, mail, password, date, onSubmit, onClick}) => {
display();
console.log({pseudo, mail, password, date});

const handleDelete = () => {
    onClick();
}

    return (

        <div><h1>Votre compte</h1>Pseudo: {pseudo} adresse mail: {mail} 
        Date d'inscription: {date} 
        <Link to="/" onClick={handleDelete}>Désinscription</Link>
        <Link to="/update" >Modifier information personnelles</Link>
        </div>

    )
    
} 

export default Account;