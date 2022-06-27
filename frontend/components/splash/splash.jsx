import React from "react";
import { Link } from 'react-router-dom';

function Splash(props) {

    return (
        <div className="home-splash">
            <h1 className="greeting-message">
                Home is where the heart is 🏘️
            </h1>

            <br></br>
            <br></br>

            <p className="greeting-submes">
                Lets take a stroll together 🧑‍🤝‍🧑 {' '}
                <Link to="/createNewUser" 
                    className="greeting-submes-link" 
                    onClick={() => props.openModal('signup')}>
                    
                    join us 
                </Link>
                {" or "}
                <Link to="/login" 
                    className="greeting-submes-link" 
                    onClick={() => props.openModal('login')}>
                    
                    log in
                </Link>
            </p>
        </div>
    )
}
export default Splash;