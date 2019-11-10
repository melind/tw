import validate from 'validate.js';

const displayError = (props) => {
    const constraints = {
           mail: {
             presence: true,
             format: {
               pattern: "^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$",//limit 4 marche pas ???
               message: "Format de mail invalide"
             }
           }
       };
       //result = undefined if input is empty so let error for pseudo
       const result = validate(props, constraints);
       if (result)
       console.log("result: ",result);
   
      return [result.mail];
  } 
  
  export default displayError;