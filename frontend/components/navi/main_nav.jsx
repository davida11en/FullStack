import React from 'react';

function mainNav(props){
    return(
        <div className='main-nav-container'>
            <div className='main-nav'>
                <div className='main-nav-items'>

                <div className="dropdown">
                        <button className="dropbtn">Rent</button>
                            <div className="dropdown-content">
                                <p>New York City</p>
                                    <a href="#">Manhattan</a>
                                    <a href="#">Brooklyn</a>
                                    <a href="#">Queens</a>
                                    <a href="#">The Bronx</a>
                                    <a href="#">Staten Island</a>
                            </div>
                        </div>

                        <div className="dropdown2">
                        <button className="dropbtn2">Buy</button>
                            <div className="dropdown-content2">
                                <p>New York City</p>
                                    <a href="#">Manhattan</a>
                                    <a href="#">Brooklyn</a>
                                    <a href="#">Queens</a>
                                    <a href="#">The Bronx</a>
                                    <a href="#">Staten Island</a>
                            </div>
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
                        <button type="submit">🔍</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default mainNav;