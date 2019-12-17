import React from 'react';
import { Link} from 'react-router-dom';
import './index.css';

const NotFoundPage = () => {

    return (
        
        <div className="notFound" >
        <p><Link to="/home">Accueil</Link></p>
        <h1>404 Page Not Found</h1>
        <img src="https://media.giphy.com/media/NnFZysBOEprAA/giphy.gif" alt="gif de projecteur de film tournant"/>
        <p>“Powered by Giphy”</p> 
        </div>
        
    )
    
} 

export default NotFoundPage;