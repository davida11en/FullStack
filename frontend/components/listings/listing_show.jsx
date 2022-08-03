import React from 'react';
// import { Link } from 'react-router-dom';

class ListingShow extends React.Component {
    componentDidMount() {
      this.props.getListing(this.props.match.params.listingId);
    }

    render() {
        const { listing } = this.props;
        return (
            <div>
                <h1>{listing.name}</h1>
                <p>{listing.address}</p>
                <p>{listing.neighborhood}</p>
                <p>{listing.price}</p>
                <p>{listing.description}</p>
                <br/>
                <h3>show page</h3>
            </div>
        )
    }
}

export default ListingShow;