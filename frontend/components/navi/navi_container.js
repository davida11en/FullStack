import React from 'react';
import { connect } from 'react-redux';
import Navi from './navi';
import { openModal } from '../../actions/modal_actions';

//to create logout button for the user
import { logout } from '../../actions/session_actions';

//pass in the current user to the navi
const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
  //connected to route api util ------------------
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openSignupForm: () => dispatch(openModal('signup')),
  openLoginForm: () => dispatch(openModal('login'))
});


export default connect(mSTP, mDTP)(Navi);