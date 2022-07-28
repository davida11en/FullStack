import React from 'react';
import { Link } from "react-router-dom";

function mainNav(props){
    return(
        <div className='main-nav-container'>
            <div className='main-nav'>
                <div className='main-nav-items'>

                <div className="dropdown">
                        <button className="dropbtn">Rent</button>
                            <div className="dropdown-content">
                                <p>New York City</p>
                                    <Link className="borough" to="/listings/">Manhattan</Link>
                                    <Link className="borough" to="/listings/">Brooklyn</Link>
                                    <Link className="borough" to="/listings/">Queens</Link>
                                    <Link className="borough" to="/listings/">The Bronx</Link>
                                    <Link className="borough" to="/listings/">Staten Island</Link>
                            </div>
                        </div>

                        <div className="dropdown">
                        <button className="dropbtn">Buy</button>
                            <div className="dropdown-content">
                                <p>New York City</p>
                                    <Link className="borough" to="/listings/">Manhattan</Link>
                                    <Link className="borough" to="/listings/">Brooklyn</Link>
                                    <Link className="borough" to="/listings/">Queens</Link>
                                    <Link className="borough" to="/listings/">The Bronx</Link>
                                    <Link className="borough" to="/listings/">Staten Island</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <Link to="/sell-your-home">
                                <button className="dropbtn" to="">Sell</button>
                            </Link>
                        </div>
                        <div className="linkedIn-btn">
                           <a href='https://www.linkedin.com/in/david-allen-asencio-9107b0122/'>LinkedIn</a>
                        </div>
                </div>

                <div className='main-nav-search'>
                    <form>
                        <input className='mnv-search-input'
                            text="text"
                            placeholder='e.g. city, home-type'
                        />
                        <Link className="borough" to="/listings/">
                            <button type="submit">🔍</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default mainNav;