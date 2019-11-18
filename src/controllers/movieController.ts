import {Request, Response} from 'express';
import axios from 'axios';

export default class MovieController {



    static async nowPlaying(request: Request, response: Response) {
        
         /*--------------get api key and the url of the  external api -------------------*/
        const API_KEY = process.env.API_KEY
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=fr-FR&region=FR`
       /* -------------get data of the external api---------*/
         const moviePlaying = await axios.get(url)
            .then((res) =>{/*console.log("res", res.data);*/return res.data})
            .catch(err => {console.log(err); });
            //console.log("moviePlaying: ", moviePlaying);
        response.status(200).json({
                                    moviePlaying
                                   });

           console.log("Hello from movie now playing");
        
          
    }
   
}