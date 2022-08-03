import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ModalContainer from "./modal/modal_container";
import Navz from './navi/navz';
import HomePageContainer from './homepage/homepage_container';
import ListingsIndexContainer from './listings/listings_index_container';
import SellSplashContainer from './sales/sellsplashcontainer';
import ListingShowContainer from './listings/listing_show_container';



const App = (props) => (
    <div>
        <ModalContainer /> 
        <Navz />
        {/* <Route path="/" component={HomePageContainer} /> */}
        <Route exact path="/" component={HomePageContainer} />
        <Route path="/sell-your-home" component={SellSplashContainer} />
        <Route path="/listings" component={ListingsIndexContainer} />
        <Route path="/listings/:listingId" component={ListingShowContainer} />
    </div>
)

export default App;