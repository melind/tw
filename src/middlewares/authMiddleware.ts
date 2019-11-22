import {Request, Response, NextFunction} from 'express';

import * as jsonwebtoken from 'jsonwebtoken';
export default function (request: Request, response: Response, next: NextFunction) {
  // check cookie presence and good jwt

  // no need to check for this pages so we get their url (http://....)
  if ( ['/','/login','/signup'].includes(request.url) ) {
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
        
        if (decodedToken && csrf) {
        
        console.log("csrf ",csrf,"token pseudo",decodedToken.nickname)
        
        
        next();
      } else {
        response.status(401).end();
      }
    } catch (error) {
      console.log("auht error",error, error.message);
      response.clearCookie('jwt');
      response.status(401).end();
    }
    
  }
}