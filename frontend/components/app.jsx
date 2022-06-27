import React from 'react';
import NaviContainer from './navi/navi_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomePage from './homepage/homepage';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ModalContainer from "./modal/modal_container";
import MainNavContainer from './navi/main_nav_container';
import LoginForm from './session/login_form'
import Signup from './session/signup_form'
import Navz from './navi/navz';

const App = (props) => (
    <div>
        <ModalContainer />
        <Navz />

        <Route path="/" component={Navz} />
        {/* <MainNavContainer /> */}
        {/* <Route path="/home" component={HomePage} /> */}
    
        {/* <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} /> */}
        
    </div>
)

export default App;