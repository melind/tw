  
import axios from 'axios';

const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
};

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

export default {

    signupUser: (formState) => {
        return axios.post( API_URL + '/signup', formState, {headers: headers})
        },

    loginUser: (formState) => { 
        return axios.post( API_URL + '/login', formState)
        }
}