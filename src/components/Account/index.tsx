import React, { useState}  from 'react';
import { Redirect, Link  } from 'react-router-dom';
import {Popconfirm} from 'antd';
import './index.css';


const Account = ({display, pseudo, mail, password, date, onClick, init}) => {

display();
const [subscriber, setSubscriber] = useState(true);
console.log({pseudo, mail, password, date});

date = date.slice(0, 10);

console.log(date.slice(0, 10));
const handleDelete = () => {
   // if(window.confirm("Etes-vous sur?")) { 
        onClick();
        setSubscriber(false);
    //} 
}

const handleInit = () => {
    init();
}

if(!subscriber) { return <Redirect to="/" />}


    return (

        <div className="account">
        <div className="info">
             < img src="../../../images/popcorn.svg" alt="un pot de popcorn" />
                <h1>Votre compte</h1>
             < img src="../../../images/popcorn.svg" alt="un pot de popcorn"/>
        </div>
        Pseudo: {pseudo} < br/> 
        adresse mail: {mail} < br/>
        Date d'inscription: {date} < br/>< br/> < br/> 
          
        <Link to="/updatePseudo" onClick={handleInit}>Modifier votre pseudo</Link> < br/>
        <Link to="/updateMail" onClick={handleInit}>Modifier votre adresse mail</Link> < br/>
        <Link to="/updatePassword" onClick={handleInit}>Modifier votre mot de passe</Link>< br/>
        <Link to="/home"> Accueil </Link>< br/>< br/>
       
        <Popconfirm
            title="Voulez vous vraiment nous quitter ?"
            onConfirm={handleDelete}
            okText="Yes"
            cancelText="No"
            className="popconfirm"
        >
            
            <img src="https://media.giphy.com/media/dyJ9XHstowFRC/giphy.gif" alt="gif d'un bonhomme de lumière allant vers la sortie"/>
            Désinscription
         </Popconfirm>
          
        <p>“Powered by Giphy” add and the Giphy logo</p>
       
 
  
        </div>

    )
    
} 

export default Account;