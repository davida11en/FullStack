import React from 'react';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import ModalContainer from "./modal/modal_container";

import SessionForm from './session/session_form'

const App = (props) => (
    <div>
        <SessionForm props={props}/>

        {/* <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <br></br>
        <Route exact path="/" component={SearchContainer} /> */}
    </div>
)

export default App;