import { connect } from 'react-redux';
import Nav from '../components/Nav';
import { logoutSuccess, init } from '../store/reducer/nav-reducer';

// match props os state to component

const mapStateToProps = 
 
(state, props) => ({
   loggedout: state.nav.loggedout
});

const mapDispatchToProps = (dispatch) => ({
   onClick: () => {
        dispatch(logoutSuccess());// content of onClick Navcomponent
    },
   init: () => {
        dispatch(init())
    }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);