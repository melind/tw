import {Request, Response} from 'express';

import {User, IUser} from '../models/user';

import bcrypt from 'bcryptjs';

import jsonwebtoken from 'jsonwebtoken';

export default class AuthController {

  pseudo: string;
  mail: string;
  password: string;
  date: Date;
  admin: boolean;
    
    static getSignup(request: Request, response: Response) {
      
        response.status(200).json({
                                    text: "Hi from get signup"
                                   });

           console.log("Hello from get signup");
    }



    static postSignup(request: Request, response: Response) {

        /*-----------------   data of the form   -----------------*/

        let {pseudo, mail, password}  = request.body;
        //let pseudo: string = request.body;
        //let mail: string = request.body;
        //let password: string = request.body;

        let date= new Date();
        let admin = false;

        pseudo = pseudo.trim();
        mail = mail.trim();
        password = password.trim();
        
/* pas besoin de verifier si user existe dans bdd vu sue je use unique in bdd*/
if (!pseudo || !mail || !password) {
    //Le cas où l'email ou bien le password ne serait pas soumit ou nul
             return response.status(400).json({
            text: "Requête invalide"
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
                return response.status(500).json({ error });
  console.log(error);
            }
  
            else {
                
                response.status(200).json({
                 text: "Succès for post signup"
                
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

        let {pseudo, password} = request.body;
        pseudo = pseudo.trim();
        password = password.trim();

        if (!pseudo || !password) {
    //Le cas où l'email ou bien le password ne serait pas soumit ou nul
        return response.status(400).json({
                                           text: "Requête invalide"
                                        });
  }

        /*----------- Check if the user exist in database ---------*/

                //  verify the pseudo 
       
                  const user: IUser  = await User.findOne({pseudo});
                 

                    if (!user) {
                        return
                        response.status(400).json({
                   text: "Cet utilisateur n'existe pas"
                  }); 
                         
                } 

                       // verify the password 
                 const goodPassword = await bcrypt.compareSync(password, user.password);     
                 if (!goodPassword) {
                     return 
                     response.status(401).json({
                                              text: "Mauvais mot de passe"
                                              });
                     
                 }
                    // create a session for the user
               // request.session.pseudo = user.pseudo;cote server
                    // JSONWEBTOKEN and cookie  cote client

                 
  
                    
                   const token = jsonwebtoken.sign({
                                 nickname: user.pseudo,
                                 admin: user.admin,
                                 exp: Math.floor(Date.now() / 1000) + (60 * 60),//exp dans 1h
                                 test: 'coucou'
                             },
                             process.env.JWT_PRIVATE_KEY,
                             /*{
                                "algorithm": process.env.ALGORYTHME,
                              } marche pas du soup par défaut*/
                             );
                             
                 response.cookie('jwt', token);  
                 response.status(200).json({
                                       text: "Succès for post login",
                                         token: token
                                             });
                    

                            console.log("user :", user, "token is :", token);
                           
       /*         (err) => {
        if (err) {
          return console.trace(err);
        }
      }    */           
                   
         /*catch (error) { 
           return response.status(500).json({
               error
                    });
         }*/
      
      
    
        

       

    /* static logout(request: Request, response: Response) {
     il faut détruire le jeton => on détruit le cookie
    response.clearCookie('jwt');
    
    request.session.destroy( (err) => {
      if(err) {
        console.error(err);
      }
    });
    response.redirect('/');

  }*/
 
  }
}
