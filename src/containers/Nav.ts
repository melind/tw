import { connect } from 'react-redux';
import Nav from '../components/Nav';
import { logoutSuccess } from '../store/reducer/nav-reducer';

// match props os state to component

const mapStateToProps = 
 
(state, props) => ({
   loggedout: state.nav.loggedout
});

const mapDispatchToProps = (dispatch) => ({
   onClick: (payload) => {
        dispatch(logoutSuccess(payload));// content of onClick Navcomponent
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);