import {Request, Response} from 'express';
import axios from 'axios';

export default class MediaController {


    
              static async mediaDetails(request: Request, response: Response) {
       
               let media = request.params.media; 
               let id = request.params.id;
       /*--------------get api key and the url of the  external api -------------------*/
               const API_KEY = process.env.API_KEY
                 
               const mediaUrl =  `https://api.themoviedb.org/3/${media}/${id}?api_key=${API_KEY}&language=fr-FR`
              /* -------------get data of the external api---------*/
                 
               const mediaDetails = await axios.get(mediaUrl)
               .then((res) =>{ return res.data})
               .catch(err => { });
                 
                 
               response.status(200).json({
                                           mediaDetails
                                          });
                                         
                
           
             
           }
    
     


}