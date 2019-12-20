import {Request, Response} from 'express';
import axios from 'axios';
import  htmlspecialchars from 'htmlspecialchars';
export default class SearchController {


     static async searchMedia(request: Request, response: Response) {
         let search = request.body.search;

             search = search.trim();
             search = htmlspecialchars(search);
          
        if(search) { 
        
     
 /*--------------get api key and the url of the  external api -------------------*/
        const API_KEY = process.env.API_KEY
        const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=fr-FR&include_adult=false&query=${search}`
       /* -------------get data of the external api---------*/
        const media = await axios.get(url)
            .then((res) =>{ return res.data})
            .catch(err => { });

        response.status(200).json({
                                    media
                                   });

         
        
          
    } 
     }
}