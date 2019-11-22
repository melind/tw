import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const H = () => {

 

return (
       <div className="App"> 
                     <header className="App-header"> 
                     <h1>Accueil des non connectés </h1> 
                     <Link to="/signup">SignUp</Link>
                     <Link to="/login">login</Link>
                     </header>
                    </div>
    )
    
} 

export default H;