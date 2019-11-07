  
import { connect } from 'react-redux';
import Signup from '../components/Signup';
import { signUp } from '../store/reducer/signup-reducer';

// match props os state to component

const mapStateToProps = /*(state:{ 
   pseudo: string,
   mail: string,
   password: string,
   subscriber: boolean,
   error: boolean},
    
   ({pseudo: state.signup.pseudo, 
   mail: state.signup.mail,
   password: state.signup.password,
   subscriber: state.signup.subscriber,
   error: state.signup.error
   }));*/
 
(state) => ({
   pseudo: state.signup.pseudo, 
   mail: state.signup.mail,
   password: state.signup.password,
   subscriber: state.signup.subscriber,
   error: state.signup.error
});

const mapDispatchToProps = (dispatch) => ({
   onSubmit: (formState) => {
        dispatch(signUp(formState));// transfer input_name value ?
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);