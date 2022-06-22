import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Sign Up'
})

const mDTP = dispatch => ({
    processForm: formUser => dispatch(signup(formUser)),

    login: (demoUser) => dispatch(login(demoUser))
})

export default connect(mSTP, mDTP)(SessionForm)