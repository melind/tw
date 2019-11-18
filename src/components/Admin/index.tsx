import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import userAPI from '../../services/userAPI';
import './index.css';

const Admin = () => {

    const [users, setUsers] = useState([]);
    async function usersList() { 
        const list = await userAPI.isAdmin()
        .then(res => {
           
            console.log("data collected :", res.data, res.data.users);
            
            
            return res.data.users;
            
        })
        .catch(err => {

            console.log(err);
        });

        setUsers(list);
    }


    const handleDelete = () => {
    
       // userAPI.deleteOtherUser();
    
}
        useEffect(() => {
            usersList();
            
            }, []); 
     
            console.log("users: ",users);

            
            if(users === undefined) {
                return <Redirect to="/forbidden" />;
            }
 
            
    return (
        <div className="admin">
            <h1>Hello admin !</h1> <br/><br/> <p>Liste des abonnés</p> <ul>{users.map((result) => <Link to="/admin" key={result._id} onClick={handleDelete}  ><li key={result._id}>{result.pseudo} </li></Link>)}</ul>
        </div>
    )
}

export default Admin;