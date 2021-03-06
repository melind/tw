
import * as express from 'express';
import * as bodyparser from 'body-parser';


import HomeController from './controllers/homeController';
import AuthController from './controllers/authController';
import AccountController from './controllers/accountController';
import DeleteController from './controllers/deleteController';
import MovieController from './controllers/movieController';
import SearchController from './controllers/searchController';
import GenreController from './controllers/genreController';
import MediaController from './controllers/mediaController';
import AdminController from './controllers/adminController';

import authMiddleware from './middlewares/authMiddleware';
import adminMiddleware from './middlewares/adminMiddleware';

const bodyParser = bodyparser.urlencoded({extended: true});

const router: express.Router = express.Router();



router.get('/', HomeController.index);

router.get('/home', authMiddleware, HomeController.home);

router.route('/signup')
  .get(AuthController.getSignup)
  .post(bodyParser, AuthController.postSignup);

router.route('/login')
  .get(AuthController.getLogin)
  .post(bodyParser, AuthController.postLogin);

router.get('/logout', authMiddleware, AuthController.logout);

router.get('/account',authMiddleware, AccountController.displayAccount);

router.put('/updatePseudo', bodyParser,authMiddleware, AccountController.updatePseudo);

router.put('/updateMail', bodyParser,authMiddleware, AccountController.updateMail);

router.put('/updatePassword', bodyParser,authMiddleware, AccountController.updatePassword);

router.delete('/deleteAccount', authMiddleware, DeleteController.deleteAccount);

router.get('/nowplaying', authMiddleware, MovieController.nowPlaying);

router.post('/home', bodyParser,authMiddleware, SearchController.searchMedia);

router.get('/genresMovieList', authMiddleware, GenreController.genresMovieList);

router.get('/moviesByGenres/:id/:number', authMiddleware, GenreController.moviesByGenre);

router.get('/genresTvShowList', authMiddleware, GenreController.genresListTvShow);

router.get('/tvShowsByGenres/:id/:number', authMiddleware, GenreController.tvShowByGenre);

router.get('/media/:media/:id', authMiddleware, MediaController.mediaDetails);

router.get('/admin',  adminMiddleware, AdminController.usersList);

export default router;