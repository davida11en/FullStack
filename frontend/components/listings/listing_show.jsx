import React from 'react';
import { Link } from 'react-router-dom';

class ListingShow extends React.Component {

    componentDidMount() {
      this.props.getListing(this.props.match.params.listingId);
    }

    render() {
        const { listing } = this.props;
    
        return (
            <div className='listing-show'>
                <h1>{listing.name}</h1>
                <br></br>
                <p>{listing.address}</p>
                <br></br>
                <p>{listing.neighborhood}</p>
                <br></br>
                <p>{listing.price}</p>
                <br></br>
                <p>{listing.description}</p>
                <br/>
                <h3>show page</h3>

                <Link to="/listings/">
                    BACK 2 LISTINGS
                </Link>
            </div>
        )
    }
}

export default ListingShow;