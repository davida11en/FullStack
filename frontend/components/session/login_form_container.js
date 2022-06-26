import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { closeModal } from "../../actions/modal_actions";
import LoginForm from './login_form';
import { clearErrors } from "../../actions/session_actions";

const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
});


 const mDTP = (dispatch) => ({
  loginUser: (user) => dispatch(login(user)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors()),
});


export default connect(mSTP, mDTP)(LoginForm);


