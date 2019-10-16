  
import { connect } from 'react-redux';
import Signup from '../components/Signup';
import { signUp } from '../store/reducer/signup-reducer';

// match props os state to component

const mapStateToProps = /*(state: {//state detrermine by reducer
   pseudo: string,
   mail: string,
   password: string,
   subscriber: boolean
}) => ({ //props compnonent
   pseudo: state.signup.pseudo, 
   mail: state.signup.mail,
   password: state.signup.password,
   subscriber: state.signup.subscriber
});  ou*/
 
(state, props) => ({
   pseudo: state.signup.pseudo, 
   mail: state.signup.mail,
   password: state.signup.password,
   subscriber: state.signup.subscriber,
   loggedin: state.signup.loggedin
});

const mapDispatchToProps = (dispatch) => ({
   onSubmit: (formState) => {
        dispatch(signUp(formState));// transfer input_name value ?
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);