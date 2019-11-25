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
                     < img src="../../../images/bobine-noir-blanc.png" />
                     <Link to="/signup">SignUp</Link>
                     < img src="../../../images/bobine.png" />
                     <Link to="/login">login</Link>
                     <div><a target="_blank" href="/icons/set/film-reel">Bobine de film icon</a> by <a target="_blank" href="https://icones8.fr">Icons8</a></div>
                    </div>
    )
    
} 

export default H;