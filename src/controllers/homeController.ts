import {Request, Response} from 'express';

export default class HomeController {

    static index(request: Request, response: Response) {
        
        response.status(200).json({
                                    text: "Hi from non subscriber home"
                                   });

           console.log("Hello from non subscriber home");
    }
    
    static home(request: Request, response: Response) {

        response.status(200).json({
                                    text: "Hi from home"
                                   });

           console.log("Hello from home");
    }
}