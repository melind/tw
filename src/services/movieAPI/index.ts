import axios from 'axios';
import qs from 'qs';
const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
};

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

export default {

    nowPlaying: () => {
        axios.defaults.withCredentials = true;
        return axios.get( API_URL + '/nowplaying')
        },

    genres: () => {
        axios.defaults.withCredentials = true;
        return axios.get( API_URL + '/genresMovieList')
        },    

    moviesByGenres: (id) => {
       axios.defaults.withCredentials = true;
       return axios.get( API_URL + `/moviesByGenres/${id}`)
       },  

    genresTv: () => {
       axios.defaults.withCredentials = true;
       return axios.get( API_URL + '/genresTvShowList')
       }, 

    tvShowsByGenres: (id) => {
       axios.defaults.withCredentials = true;
       return axios.get( API_URL + `/tvShowsByGenres/${id}`)
       }, 

    media: (media, id) => {
       axios.defaults.withCredentials = true;
       return axios.get( API_URL + `/media/${media}/${id}`)
       }, 

    search: (search) => {
     axios.defaults.withCredentials = true;
     return axios.post( API_URL + '/home', qs.stringify(search),{headers: headers})
     //,qs(search)qs.stringify(search),{headers: headers}
     }, 
}