import {Request, Response} from 'express';

export default class DeleteController {

 static deleteAccount(request: Request, response: Response) {

    /* const user: IUser  =  User.findOne({pseudo});
     user.remove*/
      
        response.status(200).json({
                                    text: "Delete account succes"
                                   });

           console.log("Hello from get delete");
    }
    
}