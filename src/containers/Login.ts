import { connect } from 'react-redux';
import Login from '../components/Login';
import { login } from '../store/reducer/login-reducer';

const mapStateToProps = /*(state: {//state detrermine by reducer
    pseudo: string,
    password: string,
    loggedin: boolean,
    subscriber: boolean
 }) => ({ //props compnonent
    pseudo: state.login.pseudo,
    password: state.login.password,
    loggedin: state.login.loggedin,
    subscriber: state.login.subscriber
 });*/
 (state, props) => ({
   pseudo: state.login.pseudo,
    password: state.login.password,
    loggedin: state.login.loggedin,
    subscriber: state.login.subscriber
});

const mapDispatchToProps = (dispatch, props) => ({
   // fetchRoom: () => {
   //     dispatch(fetchRoom(props.match.params.id))
   // }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);