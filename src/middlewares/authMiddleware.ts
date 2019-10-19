import {Request, Response, NextFunction} from 'express';

import jsonwebtoken from 'jsonwebtoken';

export default function (request: Request, response: Response, next: NextFunction) {
  // on veux rediriger les utilisateurs non connectés
  // pour cela, on va vérifier la présence et la validité du JWT dans les cookies

  // on laisse l'accès libre à la page login et signin
  if ( ['/login','/signup'].includes(request.url) ) {
    next();
  } else {
    const token: any = request.cookies.jwt;

    try {
      const decodedToken: any = jsonwebtoken.verify(token,process.env.JWT_PRIVATE_KEY);
      console.log({decodedToken}); 

      if (decodedToken.nickname) {
        response.locals.nickname = decodedToken.nickname;
        // on laisse la requete aller au bout
        next();
      } else {
        // on va renvoyer une 403
        response.status(403).end();
      }
    } catch (error) {
      console.log(error);
      response.status(403).end();
    }

  }
}