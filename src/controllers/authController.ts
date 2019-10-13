import {Request, Response} from 'express';

import {User, IUser} from '../models/user';

import bcrypt from 'bcryptjs';

import jsonwebtoken from 'jsonwebtoken';

export default class AuthController {
    
    static getSignup(request: Request, response: Response) {
      
        response.status(200).json({
                                    text: "alright"
                                   });

           console.log("get sign up");
    }



    static postSignup(request: Request, response: Response) {

        /*-----------------   data of the form   -----------------*/

        let {pseudo, mail, password} = request.body;
          
        pseudo = pseudo.trim();
        mail = mail.trim();
        password = password.trim();
/* pas besoi vu sue je use unique in bdd
soit function async await soit try catch avec await
  //       try {
  //  const findUser = await User.findOne({ 
  //    email
  //  });
  //  if (findUser) {
  //    return res.status(400).json({
  //      text: "L'utilisateur existe déjà"
  //    });
  //  }
  //} catch (error) {
  //  return res.status(500).json({ error });
  //}*/

  

        /*------------------  Creation of a new user -- -----------*/

                // crypt password  
        password = bcrypt.hashSync(password, process.env.BCRYPT_SALT);

                // Creation of a document User
        const newUser: IUser = new User({pseudo, mail, password}); 

                // Save in the database
        newUser.save( (error, product) => {
            if (error) {
                return response.status(500).json({ error });

  //if (!pseudo || !mail || !password) {
    //Le cas où l'email ou bien le password ne serait pas soumit ou nul
             //return res.status(400).json({
            //text: "Requête invalide"
    //});
                console.log(error);
                console.log('product = ', product);
            }
            else {
                response.redirect('/login'); 
                response.status(200).json({
                 text: "Succès"
                //   token: userObject.getToken()
                       });
                console.log('product = ', product);
                console.log('user = ', pseudo, mail, password);
            }
        });
    }




    static getLogin(request: Request, response: Response){
        return response.status(200).json({
                                             text: "OK"
                                         });
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
         try {
        const user: IUser  = await User.findOne({pseudo});

          if (!user) {
              return
              response.status(400).json({
         text: "Cet utilisateur n'existe pas"
        }); 
               response.redirect('/login');
      }
      
                // verify the password 
      const goodPassword = await bcrypt.compareSync(password, user.password);  
       if (!goodPassword) {
           return 
           response.status(401).json({
                                    text: "Mauvais mot de passe"
                                    });
           response.redirect('/login');
       }
          // create a session for the user
     // request.session.pseudo = user.pseudo;cote server
          // JSONWEBTOKEN and cookie  cote client
         
       const token = jsonwebtoken.sign({
           nickname: user.pseudo,
           //admin: user.admin,
           exp: Math.floor(Date.now() / 1000) + (60 * 60),//exp dans 1h
           test: 'coucou'
       },
       process.env.JWT_PRIVATE_KEY,
       {
          "algorithm": process.env.ALGORYTHME,
        }
       );
      console.log("user :", user, "token is :", token);
      response.cookie('jwt', token);
      response.redirect('/home');

         }
         catch (error) {
           return response.status(500).json({
               error
                    });
      }
      
    
        

       

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
