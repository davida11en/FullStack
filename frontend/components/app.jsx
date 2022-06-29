import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ModalContainer from "./modal/modal_container";
import Navz from './navi/navz';
import HomePageContainer from './homepage/homepage_container';
import CongratsContainer from './congrats/congrats_container'

const App = (props) => (
    <div>
        <ModalContainer />
        <Route path="/" component={Navz} />
        {/* <Route path="/" component={HomePageContainer} /> */}
        <Route exact path="/explore" component={HomePageContainer} />
        <ProtectedRoute exact path="/explore" component={CongratsContainer} />
    </div>
)

export default App;