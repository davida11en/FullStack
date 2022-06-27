import React from 'react';
import { Link } from 'react-router-dom';

function homePage(props) {
    return (
            <div className="home-page">
            <h1 className="home-message">
                Home is where the heart is 🏘️
            </h1>

            <br></br>
            <br></br>

            <p className="home-submes">
                Lets take a stroll together 🧑‍🤝‍🧑 {' '}
                <Link to="/createNewUser" 
                    className="home-submes-link" 
                    onClick={() => props.openModal("signup")}>
                    
                    join us 
                </Link>
                {" or "}
                <Link to="/login" 
                    className="home-submes-link" 
                    onClick={() => props.openModal("login")}>
                    
                    log in
                </Link>
            </p>
        </div>
    )
}

export default homePage;