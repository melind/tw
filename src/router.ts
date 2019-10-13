
import express from 'express';
import bodyparser from 'body-parser';
import AuthController from './controllers/authController';
import HomeController from './controllers/homeController';

const router: express.Router = express.Router();

const bodyParser = bodyparser.urlencoded({extended: true});

// on définit des routes
//module.exports = function (app) {
    /*Cet exemple illustre une route et sa fonction de gestionnaire (système de middleware). 
    La fonction gère les demandes GET ic post adressées au chemin /user/:id.*/
//    app.post('/login',account.login); ou router.post
//    app.post('/signup',account.signup);
//}
/* Cet exemple illustre une fonction middleware montée sur le chemin /user/:id. 
La fonction est exécutée pour tout type de demande HTTP sur le chemin/user/:id.*/
// app.use("/user", router); = mount (Chargez le middleware) router à partir de ce chemin === app.use(router) prsent dans server= chargement sur tte l'appli
// require(__dirname + "/controllers/userController")(router);
// http://localhost:8800/user/login et http://localhost:8800/user/signup 


/* !!!!!!!!!!!!!!!!!!!!! posibilité de faire pareil avec router.use et router.get */
//router.get('/home', authMiddleware, HomeController.home);


router.get('/home', HomeController.home);

router.route('/signup')
  .get(AuthController.getLogin)
  .post(bodyParser, AuthController.postSignup);

router.route('/login')
  .get(AuthController.getLogin)
  .post(bodyParser, AuthController.postLogin);

//router.get('/logout', AuthController.logout);




export default router;