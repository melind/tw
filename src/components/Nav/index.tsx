import React from 'react';
import './index.css';
import { Redirect } from 'react-router-dom';
import userAPI from '../../services/userAPI';

const Nav = () => {

   const logOut = () => {
    userAPI.logOut(); 
    return <Redirect to="/" />

  } 


    return (

       
        <button onClick={logOut} >deconnectez-vous</button>
       
    )
    
} 

export default Nav;