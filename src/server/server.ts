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
console.log(MONGODB_URI);


// middleware cookie-parser pour stocker info
app.use(cookieparser());

app.use(cors());
/*app.use(function(req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
 // res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});  

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); */
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