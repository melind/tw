import {Request, Response} from 'express';

import {User, IUser} from '../models/user';

import bcrypt from 'bcryptjs';

import jsonwebtoken from 'jsonwebtoken';

export default class AccountController {

    static async displayAccount(request: Request, response: Response) {

           
           const token: any = request.cookies.jwt;

           if(token){ 

           const decodedToken: any = jsonwebtoken.verify(token,process.env.JWT_PRIVATE_KEY);
           const pseudo = decodedToken.nickname

           const user: IUser  = await User.findOne({pseudo});
            if (user) {
            response.status(200).json({
                                    user,
                                   });
            }
            }
             if (!token) {
                      response.status(400).json({
                        text: "No user coockie"
                      })
            }
           console.log("Hello from account display");
        
          
    } 



      /*

      updateAccount(request: Request, response: Response) {

           const user: IUser  = await User.findOne({pseudo});

            user.update



      }*/
   


}