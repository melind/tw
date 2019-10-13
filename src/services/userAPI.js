  
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
export default {

    signupUser: (name, signup) => {
        return axios.post(API_URL + '/signup', {
            ...signup, [name]: signup[name]})
        },

    loginUser: (pseudo, password) => { 
        return axios.post(API_URL + '/login', {pseudo, password})
        }
}