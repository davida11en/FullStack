import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { closeModal } from "../../actions/modal_actions";
import SessionForm from './session_form';

const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Login'
});


const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  closeModal: () => dispatch(closeModal()),
  login: (user) => dispatch(login(user)),
});


export default connect(mSTP, mDTP)(SessionForm);


