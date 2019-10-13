import {Request, Response} from 'express';

import {User, IUser} from '../models/user';

import bcrypt from 'bcryptjs';

import jsonwebtoken from 'jsonwebtoken';

export default class ProfileController {

/* 

pour pemettre accès cette page => qques seconde pour pouvoir y accéder (chrger la pagecar token peut etre facilement recuperer

 const token = jsonwebtoken.sign({
           nickname: user.pseudo,
           admin: user.admin,
           exp: Math.floor(Date.now() / 1000) + (60 * 60),//exp dans 1h <> CHANGER A 30 SEC
           test: 'coucou'
       },
       process.env.JWT_PRIVATE_KEY,
       {
          "algorithm": process.env.ALGORYTHME,
        }
       );
      console.log("user :", user, "token is :", token);

      */
}