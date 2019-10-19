  
import axios from 'axios';
import qs from 'qs';
const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
};

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

export default {

    signupUser: (formState) => {
        return axios.post( API_URL + '/signup', qs.stringify(formState), {headers: headers})
        },

    loginUser: (formState) => { 
        return axios.post( API_URL + '/login', qs.stringify(formState), {headers: headers})
        },

    infoUser: (formState) => { 
        return axios.get( API_URL + '/infoUser', formState)
    }, 

    updateUser: (formState) => { 
        return axios.put( API_URL + '/updateUser', formState)
    }, 

    deleteUser: (formState) => { 
        return axios.delete( API_URL + '/deleteAccount', formState)
        }  
}