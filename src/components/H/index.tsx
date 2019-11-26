import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Greeting from '../Greeting';
import './index.css';

const H = () => {

    const [loading, setLoading] = useState(true);
    
    setTimeout(function () {
     setLoading(false);
   }, 3000);
   if (loading) {
          return <Greeting />
        }

return (
       <div className="H"> 
                      
                     <h1>Bienvenue </h1> 
                     < img src="../../../images/bobine-noir-blanc.png" alt="bobine de film" />
                     <Link to="/signup">SignUp</Link>
                     < img src="../../../images/bobine.png" alt="bobine de film"/>
                     <Link to="/login">login</Link><br/>
                     <div><a target="_blank" href="/icons/set/film-reel" rel="noopener noreferrer">Bobine de film icon</a> by <a target="_blank" href="https://icones8.fr" rel="noopener noreferrer">Icons8</a></div>
                    </div>
    )
    
} 

export default H;