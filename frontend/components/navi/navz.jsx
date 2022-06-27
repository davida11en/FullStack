import React from 'react';
import MainNavContainer from './main_nav_container';
import NaviContainer from './navi_container';

function Navz() {
    return (
        <div className="navz-container">
            <NaviContainer/>
            <MainNavContainer />
        </div>
    )
}

export default Navz;