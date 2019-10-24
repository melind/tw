import React from 'react';
import './index.css';
import userAPI from '../../services/userAPI';
import Nav from '../Nav';

const Home = () => {

   

    userAPI.home(); 
    return (
        
        <Nav />
        
        

    )
    
} 

export default Home;