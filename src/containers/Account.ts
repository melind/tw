import { connect } from 'react-redux';
import Account from '../components/Account';
import { DisplayAccount, AccountUpdate } from '../store/reducer/account-reducer';

// match props os state to component

const mapStateToProps = 
 
(state) => ({
   pseudo: state.Account.pseudo, 
   mail: state.Account.mail,
   password: state.Account.password,
   date: state.Account.date
});

const mapDispatchToProps = (dispatch) => ({
  o : () => {
        dispatch(DisplayAccount());
    },
    onSubmit: (formState) => {
        dispatch(AccountUpdate(formState));// transfer input_name value ?
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(Account);