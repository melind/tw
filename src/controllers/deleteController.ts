import {Request, Response} from 'express';

import {User, IUser} from '../models/user';


import jsonwebtoken from 'jsonwebtoken';

export default class DeleteController {

 static async deleteAccount(request: Request, response: Response) {

    /* const user: IUser  =  User.findOne({pseudo});
     user.remove*/

           
           const token: any = request.cookies.jwt;
         if (!token) {
                      response.status(400).json({
                        text: "No user coockie"
                      })
            }
           if(token){ 

           const decodedToken: any = jsonwebtoken.verify(token,process.env.JWT_PRIVATE_KEY);
           const pseudo = decodedToken.nickname

           const user: IUser  = await User.findOne({pseudo});
           if(user) { 
           user.remove((error, product) => {
            if (error) {
               
                console.log("delete error: ",error);
                response.status(400).json({
                                           error
                                                 })
            }
            else { 
               response.clearCookie('jwt');
        
        request.session.destroy( (err) => {
                     if(err) {
                       console.error(err);
                     }
               });
            response.status(200).json({
                                    text: "Delete account succes"
                                   });
            }
           });
            }
             
       

           console.log("Hello from delete delete");
    }
 }  
}