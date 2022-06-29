
import React from 'react';
import { connect } from 'react-redux';
import Congrats from './congrats';



const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    
});


const CongratsContainer = connect(mapStateToProps, mapDispatchToProps)(Congrats);

export default CongratsContainer;