import React from 'react';
import MainNavContainer from './main_nav_container';
import NaviContainer from './navi_container';
import HomeSplashContainer from '../splash/homesplash_container';

function Navz() {
    return (
        <div className="navz-container">
            <NaviContainer/>
            <MainNavContainer />
            <HomeSplashContainer />
        </div>
    )
}

export default Navz;