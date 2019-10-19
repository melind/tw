import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import mongoose from 'mongoose';

import cookieparser from 'cookie-parser';

import cors from 'cors';

import router from '../router';

const app: express.Express = express();
const SERVER_PORT  = process.env.SERVER_PORT || 5050;
const MONGODB_URI : string = process.env.MONGODB_URI || '';
const URL_CORS = process.env.URL_CORS;
console.log(MONGODB_URI);


// middleware cookie-parser pour stocker info
app.use(cookieparser());
app.use(cors({
  "origin": "http://localhost:3030",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "allowedHeaders":["Origin"," X-Requested-With", "Content-Type", "Accept"],
  "credentials": true,
}));
//routing
app.use(router);


async function run () {
  // connexion à la BD
  await mongoose.connect(MONGODB_URI , { useNewUrlParser: true } ,(err: any) => {
    if (err) {
      console.error(err);
      return;
    }
  // lancer l'appli
  app.listen(SERVER_PORT, () => {
    console.log(`App running on port ${SERVER_PORT}`);
  });
});
}

run();