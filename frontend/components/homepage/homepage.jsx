import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search/search';

function homePage(props) {
    return (
            <div className="home-page">
            <h1 className="home-message">
                Home is where the heart is 🏘️
            </h1>
            {/* <div className='center-search'>
                <form className="center-search">
                    <input className="searchbox" type="text" placeholder="Where shall we go?"/>
                    <button type="submit">🔍</button>
                </form>
            </div> */}
            < Search />
            <br></br>

            <p className="home-submes">
                Lets take a stroll together 🧑‍🤝‍🧑 {' '}
                <Link to={{}} 
                    className="home-submes-link" 
                    onClick={() => props.openModal("signup")}>
                    
                    join us 
                </Link>
                {" or "}
                <Link to={{}} 
                    className="home-submes-link" 
                    onClick={() => props.openModal("login")}>
                    
                    log in
                </Link>
            </p>
        </div>
    )
}

export default homePage;