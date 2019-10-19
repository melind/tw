import {Request, Response} from 'express';

export default class DeleteController {

static deleteAccount(request: Request, response: Response) {
      
        response.status(200).json({
                                    text: "Delete account succes"
                                   });

           console.log("Hello from get delete");
    }
    
}