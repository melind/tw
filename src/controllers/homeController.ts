import {Request, Response} from 'express';

export default class HomeController {

    static home(request: Request, response: Response) {
        response.render('/home');
    }
}