import { connect } from 'react-redux';
import Nav from '../components/Nav';
import { logoutSuccess, init } from '../store/reducer/nav-reducer';



const mapStateToProps = 
 
(state) => ({
   loggedout: state.nav.loggedout 
});

const mapDispatchToProps = (dispatch) => ({
   onClick: () => {
        dispatch(logoutSuccess());
    },
   init: () => {
        dispatch(init())
    }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);