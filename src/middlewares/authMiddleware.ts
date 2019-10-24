import {Request, Response, NextFunction} from 'express';

import jsonwebtoken from 'jsonwebtoken';
export default function (request: Request, response: Response, next: NextFunction) {
  // on veux rediriger les utilisateurs non connectés
  // pour cela, on va vérifier la présence et la validité du JWT dans les cookies

  // on laisse l'accès libre à la page login et signin
  if ( ['/login','/signup'].includes(request.url) ) {
    next();
  } else {
    
    console.log("cookies", JSON.stringify(request.cookies));
    console.log("session", JSON.stringify(request.session));
    const token: any = request.cookies.jwt;
    const csrf: any = request.session.csrf;
    console.log("middleware csrf", csrf);
    
    try {
      const decodedToken: any = jsonwebtoken.verify(token,process.env.JWT_PRIVATE_KEY);
      console.log({decodedToken}); 
        
        if (decodedToken.nickname && csrf) {
        response.locals.nickname = decodedToken.nickname;
        console.log("csrf ",csrf,"token pseudo",decodedToken.nickname)
        
        
        next();
      } else {
        
        response.status(403).end();
      }
    } catch (error) {
      console.log(error);
      response.status(403).end();
    }
    
  }
}