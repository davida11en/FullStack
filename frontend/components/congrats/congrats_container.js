
import React from 'react';
import { connect } from 'react-redux';
import Congrats from './congrats';
import { clearErrors } from '../../actions/session_actions'


// const mapStateToProps = state => ({
//   currentUser: state.entities.users[state.session.id]
// });

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id,
  // errors: state.errors.post
})


const mapDispatchToProps = (dispatch,ownProps) => ({
    
});


const CongratsContainer = connect(mapStateToProps, mapDispatchToProps)(Congrats);

export default CongratsContainer;