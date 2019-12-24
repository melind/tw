import * as dotenv from 'dotenv';
dotenv.config();

import * as express from 'express';

import * as mongoose from 'mongoose';

import * as cookieparser from 'cookie-parser';

import * as expressSession from 'express-session';

import * as cors from 'cors';

import router from '../router';

const app: express.Express = express();
const SERVER_PORT  = process.env.SERVER_PORT || 5050;
const MONGODB_URI : string = process.env.MONGODB_URI || '';
const URL_CORS = process.env.URL_CORS;
const URL_CORS_TWO = process.env.URL_CORS_TWO;
console.log(MONGODB_URI);


// middleware cookie-parser pour stocker info
app.use(cookieparser());
app.use(expressSession({
  resave: true,
  saveUninitialized: false,
  secret: 'melimelo'
}));
app.use(cors({
  "origin": [URL_CORS, URL_CORS_TWO],
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "allowedHeaders":["Origin"," X-Requested-With", "Content-Type", "Accept"],
  "credentials": true,
  "maxAge": 3600 //cache this information for 3600 seconds ,  need to make a new OPTIONS request every single time.
}));
//routing
app.use(router);


async function run () {
  // connexion à la BD
  await mongoose.connect(MONGODB_URI , { useNewUrlParser: true } ,(err: any) => {
    if (err) {
      
      return;
    }
  // lancer l'appli
  app.listen(SERVER_PORT, () => {
   
  });
});
}

run();