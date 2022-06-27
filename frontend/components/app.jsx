import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ModalContainer from "./modal/modal_container";
import Navz from './navi/navz';
import HomePageContainer from './homepage/homepage_container';

const App = (props) => (
    <div>
        <ModalContainer />
        <Navz />
        <Route path="/" component={HomePageContainer} />
    

    </div>
)

export default App;