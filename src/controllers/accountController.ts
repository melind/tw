import {Request, Response} from 'express';

import {User, IUser} from '../models/user';

import bcrypt from 'bcryptjs';

import jsonwebtoken from 'jsonwebtoken';

export default class AccountController {

  pseudo: string;
  mail: string;
  password: string;

    static async displayAccount(request: Request, response: Response) {

           //get info in jwt
           const token: any = request.cookies.jwt;
           if (!token) {
                      response.status(400).json({
                        text: "No user coockie"
                      });
           } 
           if(token){ 

              const decodedToken: any = jsonwebtoken.verify(token,process.env.JWT_PRIVATE_KEY);
              const pseudo = decodedToken.nickname;

              // get user corresponding in data base 
              const user: IUser  = await User.findOne({pseudo});
                 if (user) {
                 response.status(200).json({
                                         user,
                                        });
                 }
            }
            
           console.log("Hello from account display");
        
          
    } 



      

      static async updatePseudo(request: Request, response: Response) {



        console.log("body", request.body, "body",request.body.pseudo.replace(/ /g,""));
        /*-----------------   data of the form   -----------------*/
        /* when a promise encounters an error it throws 
        an exception that will be catched inside a catch method on the promise */
       try{  
                let {pseudo} = request.body;


                 if (!pseudo) {
                  response.status(400).json({
                    text: "Requete invalide"
                  });
                }

                 if (pseudo) { 
                   pseudo = pseudo.replace(/ /g,""); //marche pas
                   console.log(pseudo);
              
                   const token: any = request.cookies.jwt;

                   if (!token) {
                              response.status(400).json({
                                text: "No user coockie"
                              });
                   } 

                   if(token){ 

                       const decodedToken: any = jsonwebtoken.verify(token,process.env.JWT_PRIVATE_KEY);
                       const name = decodedToken.nickname;
                   
               

        /*------------------  Update of a  user -- -----------*/

         
                       const oldUser: IUser  = await User.findOne({"pseudo":name});
                       if (oldUser) {
                           oldUser.update({pseudo},async (error, product) => {
                                  if (error) {
                                  
                                      console.log("update error: ",error);
                                      response.status(400).json({
                                                                 error
                                      });
                            }
                            
                            const user =  await User.findOne({pseudo});
                            console.log("user",user,"oldUser",oldUser);
                            const newToken = jsonwebtoken.sign({
                              nickname: user.pseudo,
                              admin: user.admin,
                              exp: Math.floor(Date.now() / 1000) + (60 * 60),//exp dans 1h
                              
                             },
                             process.env.JWT_PRIVATE_KEY,
                             /*{
                                "algorithm": process.env.ALGORYTHME,
                              } marche pas du coup par défaut HS256*/

                             ); 
                             console.log("n", newToken) ;
                              response.cookie('jwt', newToken, { 
                                 //httpOnly: true, //cookie not available through client js code (xss)!!! pas de cookie.load
                                 //secure: true // true to force https
                               });  
                               response.status(200).json({
                                                       //user,
                                                       text: "Modifications réussies!"
                                                      });
                               });
                        }
                    }
                  }
          }
          catch (err) {
            err
          }

           console.log("Hello from account update Pseudo");
}     




         static async updateMail(request: Request, response: Response) {



        console.log("body", request.body);
        /*-----------------   data of the form   -----------------*/
        /* when a promise encounters an error it throws 
        an exception that will be catched inside a catch method on the promise */
       try{  
                let {mail} = request.body;


                 if (!mail) {
                  response.status(400).json({
                    text: "Requete invalide"
                  });
                }

                 if (mail) { 
                   mail = mail.replace(/ /g,""); //marche pas
                   console.log(mail);

                   const regex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
                   const regexMail = regex.test(mail);

                   console.log("regex: ",regexMail);

                   if (!regexMail) {
                       response.status(400).json({
                                         text: "Format mail invalide"
                        });   
                    }
                    if (regexMail) { 
                      const token: any = request.cookies.jwt;

                      if (!token) {
                                 response.status(400).json({
                                   text: "No user coockie"
                                 });
                      } 

                      if(token){ 
                      
                          const decodedToken: any = jsonwebtoken.verify(token,process.env.JWT_PRIVATE_KEY);
                          const name = decodedToken.nickname;
                   
               

        /*------------------  Update of a  user -- -----------*/

         
                          const oldUser: IUser  = await User.findOne({"pseudo":name});
                          if (oldUser) {
                              oldUser.update({mail},async (error, product) => {
                                     if (error) {
                                     
                                         console.log("update error: ",error);
                                         response.status(400).json({
                                                                    error
                                         });
                               }

                               const user =  await User.findOne({mail});
                               console.log("user",user,"oldUser",oldUser);
                               const newToken = jsonwebtoken.sign({
                                 nickname: user.pseudo,
                                 admin: user.admin,
                                 exp: Math.floor(Date.now() / 1000) + (60 * 60),//exp dans 1h

                                },
                                process.env.JWT_PRIVATE_KEY,
                                /*{
                                   "algorithm": process.env.ALGORYTHME,
                                 } marche pas du coup par défaut HS256*/

                                ); 
                                console.log("n", newToken) ;
                                 response.cookie('jwt', newToken, { 
                                    //httpOnly: true, //cookie not available through client js code (xss)!!! pas de cookie.load
                                    //secure: true // true to force https
                                  });  
                                  response.status(200).json({
                                                          //user,
                                                          text: "Modifications réussies!"
                                                         });
                                  });
                          }
                     } 
                   }
                  }
          
          }
          catch (err) {
            err
          }

           console.log("Hello from account update Mail");
      }    


        static async updatePassword(request: Request, response: Response) {



             console.log("body", request.body);
             /*-----------------   data of the form   -----------------*/
             /* when a promise encounters an error it throws 
             an exception that will be catched inside a catch method on the promise */
         try {  
                let {password} = request.body;


                 if (!password) {
                  response.status(400).json({
                    text: "Requete invalide"
                  });
                }

                 if (password) { 
                   password = password.replace(/ /g,""); //marche pas
                   console.log(password);

                   password = bcrypt.hashSync(password, 10);
              
                   const token: any = request.cookies.jwt;

                   if (!token) {
                              response.status(400).json({
                                text: "No user coockie"
                              });
                   } 

                   if(token){ 

                       const decodedToken: any = jsonwebtoken.verify(token,process.env.JWT_PRIVATE_KEY);
                       const name = decodedToken.nickname;
                   
               

        /*------------------  Update of a  user -- -----------*/

         
                       const oldUser: IUser  = await User.findOne({"pseudo":name});
                       if (oldUser) {
                           oldUser.update({password},async (error, product) => {
                                  if (error) {
                                  
                                      console.log("update error: ",error);
                                      response.status(400).json({
                                                                 error
                                      });
                            }
                            
                            const user =  await User.findOne({password});
                            console.log("user",user,"oldUser",oldUser);
                            const newToken = jsonwebtoken.sign({
                              nickname: user.pseudo,
                              admin: user.admin,
                              exp: Math.floor(Date.now() / 1000) + (60 * 60),//exp dans 1h
                              
                             },
                             process.env.JWT_PRIVATE_KEY,
                             /*{
                                "algorithm": process.env.ALGORYTHME,
                              } marche pas du coup par défaut HS256*/

                             ); 
                             console.log("n", newToken) ;
                              response.cookie('jwt', newToken, { 
                                 //httpOnly: true, //cookie not available through client js code (xss)!!! pas de cookie.load
                                 //secure: true // true to force https
                               });  
                               response.status(200).json({
                                                       //user,
                                                       text: "Modifications réussies!"
                                                      });
                               });
                        }
                    }
                  }
              }
              catch (err) {
                err
              }
        
           console.log("Hello from account update Password");
        }     
       

}
