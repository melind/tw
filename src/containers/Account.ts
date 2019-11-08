import { connect } from 'react-redux';
import Account from '../components/Account';
import { displayAccount, accountUpdate, init, deleteAccount } from '../store/reducer/account-reducer';



const mapStateToProps = 
 
(state) => ({
   pseudo: state.account.pseudo, 
   mail: state.account.mail,
   password: state.account.password,
   date: state.account.date
});

const mapDispatchToProps = (dispatch) => ({
  display : () => {
        dispatch(displayAccount());
    },
  onSubmit: (formState) => {
        dispatch(accountUpdate(formState));// transfer input_name value ?
    },
  init: () => {
      dispatch(init());
  },
  onClick: () => {
      dispatch(deleteAccount());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);