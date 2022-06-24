//import connect from react-redux, 
//then the specific thunk action creator and component
//we want the container to use
import React from 'react';
import { connect } from "react-redux";
import SignupForm from './signup_form';
import { createNewUser, clearErrors } from "../../actions/session_actions";
import { closeModal } from '../../actions/modal_actions'; 

//make the signup class now

//now make mapDispatchTToProps (mDTP)

const mSTP = (state, ownProps) => ({
    errors: state.errors.session
})


//returns a POJO
const mDTP = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SignupForm);
//this will make the createNewUser available in the props
//of Signup.jsx
