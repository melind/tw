import {Request, Response} from 'express';

import {User, IUser} from '../models/user';

import * as bcrypt from 'bcryptjs';

import * as jsonwebtoken from 'jsonwebtoken';

export default class AuthController {

  pseudo: string;
  mail: string;
  password: string;
  date: Date;
  admin: boolean;

  /** static permet nom_classs.nom_methode = AuthController.getSignup */
    
    static getSignup(request: Request, response: Response) {
      
        response.status(200).json({
                                    text: "Hi from get signup"
                                   });

           console.log("Hello from get signup");
    }



    static postSignup(request: Request, response: Response) {

        /*-----------------   data of the form   -----------------*/
        console.log("body", request.body);
        let {pseudo, mail, password}  = request.body;

        let date= new Date();
        let admin = false;

        pseudo = pseudo.replace(/ /g,"");
        mail = mail.replace(/ /g,"");
        password = password.replace(/ /g,"");

        
        /* pas besoin de verifier si user existe dans bdd vu que je use unique in bdd
        pas besoin de async await*/
        if (!pseudo || !mail || !password) {
            //Le cas où l'email ou bien le password ne serait pas soumit ou nul
                      response.status(400).json({
                                                 text: "Requête invalide"
                                                 });       
                    
                     
                                               
          } 
          if (password.length <8){
            response.status(400).json({
                                         text: "mot de passe pas assez long"
                                        });
          }

          const regex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
          const regexMail = regex.test(mail);
          console.log("regex: ",regexMail);
           if (!regexMail) {
             response.status(400).json({
                                         text: "Format mail invalide"
                                        });   
            }
         

        /*------------------  Creation of a new user -- -----------*/

                // crypt password  auto gen salt and hash
                
        password = bcrypt.hashSync(password, 10);

                // Creation of a document User
        const newUser: IUser = new User({pseudo, mail, password, date, admin}); 

                // Save in the database
        newUser.save( (error, product) => {
            if (error) {
               
                console.log("saving error: ",error);
                response.status(400).json({
                                           error
                                                 })
            }
  
            else {
                
                response.status(200).json({
                  text: "Succès for post signup",
                  pseudo, mail, password
                       });
                console.log('product = user ', product);
                console.log('user = ', pseudo, mail, password);
            }
        });
    }




   static getLogin(request: Request, response: Response) {
      
        response.status(200).json({
          text: "Hi from get login"
        });

        console.log("Hello from get login");
    }






    static async postLogin(request: Request, response: Response) {

        /*-----------------   data of the form   -----------------*/
        /* when a promise encounters an error it throws 
        an exception that will be catched inside a catch method on the promise */
        try { 
                let {pseudo, password} = request.body;
                 pseudo = pseudo.replace(/ /g,"");
                 password = password.replace(/ /g,"");

                

                if (!pseudo|| !password) {
                  response.status(400).json({
                    text: "Requete invalide"
                  }); 
                   
              } 

        /*----------- Check if the user exist in database ---------*/

                //  verify the pseudo 
      
                const user: IUser  = await User.findOne({pseudo});
                 

                    if (!user) {
                        response.status(400).json({
                          text: "Cet utilisateur n'existe pas"
                        }); 
                         
                    } 

                       // verify the password 
                const goodPassword = await bcrypt.compareSync(password, user.password);     
                    
                    if (!goodPassword) {
                      response.status(401).json({
                        text: "Mauvais mot de passe"
                      });
                     
                 }
                    // create a session for the user
               // request.session.stocké cote server
                    // JSONWEBTOKEN and cookie stocké  cote client qui le renverra
                if (pseudo && password) {
                      
                       
                  
                 
                let csrf = Math.random().toString(36).substr(2, 9);
                request.session.csrf = csrf;
                
                console.log("csrf", csrf);
                    
                const token = jsonwebtoken.sign({
                              nickname: user.pseudo,
                              admin: user.admin,
                              exp: Math.floor(Date.now() / 1000) + (60 * 60),//exp dans 1h
                              
                          },
                          process.env.JWT_PRIVATE_KEY,
                          /*{
                             "algorithm": process.env.ALGORYTHME,
                           } marche pas du coup par défaut HS256*/
                           
                          );  
                 response.cookie('jwt', token, { 
                   //httpOnly: true, //cookie not available through client js code (xss)!!! pas de cookie.load
                   //secure: true // true to force https
                 });  
                 response.status(200).json({
                    text: "Succès for post login",
                    token: token,
                    pseudo, password,csrf
                    });
                    
                 console.log("user :", user, "token is :", token);
                     
        }   
                 } 
        catch (error) { 
           return error
           
        }
      
      
    
        

    }

    static logout(request: Request, response: Response) {
          //destroy token by destroying cookie
        response.clearCookie('jwt');
        
        request.session.destroy( (err) => {
                     if(err) {
                       console.error(err);
                     }
               });
        //response.clearCookie('connect.sid');
        response.status(200).json({
            text: "Succès for logout"
        });

        console.log("hello from get logout!");
        
             
    }
}
