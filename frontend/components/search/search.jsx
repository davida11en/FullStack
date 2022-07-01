import React from 'react';
import {Link} from 'react-router-dom';

function Search(props) {
    return (
        <div className='center-search'>
        <form className="center-search">
            <input className="searchbox" type="text" placeholder="Where shall we go?"/>
            <Link className="borough" to="/listings/">
                <button type="submit">🔍</button>
            </Link>
        </form>
    </div>
    )
}

export default Search;