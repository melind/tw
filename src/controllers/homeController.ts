import {Request, Response} from 'express';

export default class HomeController {

    static home(request: Request, response: Response) {
        //response.render('/');
        response.status(200).json({
                                    text: "Hi from home"
                                   });

           console.log("Hello from home");
    }
}