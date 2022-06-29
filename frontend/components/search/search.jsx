import React from 'react';

function Search(props) {
    return (
        <div className='center-search'>
        <form className="center-search">
            <input className="searchbox" type="text" placeholder="Where shall we go?"/>
            <button type="submit">🔍</button>
        </form>
    </div>
    )
}

export default Search;