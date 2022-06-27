import React from 'react';

function mainNav(props){
    return(
        <div className='main-nav-container'>
            <div className='main-nav'>
                <div className='main-nav-items'>
                    <ul className='main-nav-list'>
            
                        <li className='mnv-li'>
                            Rent
                        </li>
                        <li className='mnv-li'>
                            Buy
                        </li>
                        <li className='mnv-li'>
                            <a href='https://www.linkedin.com/in/david-allen-asencio-9107b0122/' className='mnv-alink'>
                                LinkedIn
                            </a>
                        </li>
                    </ul>
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