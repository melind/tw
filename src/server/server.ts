import dotenv from 'dotenv';
dotenv.config();
import express from 'express';


import mongoose from 'mongoose';

const app: express.Express = express();
const PORT  = process.env.PORT || 5050;
const MONGODB_URI : string = process.env.MONGODB_URI || '';
console.log(MONGODB_URI)
//routing
//app.use(router);

async function run () {
  // connexion à la BD
  await mongoose.connect(MONGODB_URI , { useNewUrlParser: true } ,(err: any) => {
    if (err) {
      console.error(err);
      return;
    }
  // lancer l'appli
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });
});
}

run();