  
import axios from 'axios';
import qs from 'qs';
import cookie from 'react-cookie';
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
        axios.defaults.withCredentials = true;
        return axios.post( API_URL + '/login', qs.stringify(formState), {headers: headers})
        },
    
    logOut: () => { 
        axios.defaults.withCredentials = true;
        return axios.get( API_URL + '/logout')
    },

    isAuth: () => {
        if (cookie.load('jwt'))
        return true 
      },
      
    infoUser: () => { 
        axios.defaults.withCredentials = true;
        return axios.get( API_URL + '/account')
    }, 

    updatePseudo: (formState) => { 
        axios.defaults.withCredentials = true;
        return axios.put( API_URL + '/updatePseudo', qs.stringify(formState), {headers: headers})
    }, 

    updateMail: (formState) => { 
        axios.defaults.withCredentials = true;
        return axios.put( API_URL + '/updateMail', qs.stringify(formState), {headers: headers})
    },

    updatePassword: (formState) => { 
        axios.defaults.withCredentials = true;
        return axios.put( API_URL + '/updatePassword', qs.stringify(formState), {headers: headers})
    },

    isAdmin: () => { 
        axios.defaults.withCredentials = true;
        return true
    },

    deleteUser: () => { 
        axios.defaults.withCredentials = true;
        return axios.delete( API_URL + '/deleteAccount', {headers: headers})
    },

    home: () => { 
        axios.defaults.withCredentials = true;
        return axios.get( API_URL + '/home')
    }, 

    index: () => { 
        return axios.get( API_URL + '/')
    },

}