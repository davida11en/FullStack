import React from 'react';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import ModalContainer from "./modal/modal_container";

import LoginForm from './session/login_form'
import Signup from './session/signup_form'

const App = (props) => (
    <div>
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/login" component={LoginFormContainer} />
    </div>
)

export default App;