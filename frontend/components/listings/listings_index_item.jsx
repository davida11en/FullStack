import React from 'react';
import { Link } from 'react-router-dom';
// import ListingShowContainer from './listings/listing_show_container';


const ListingIndexItem = props => (
  <li className='listing-item' >
    <h3 className='test-class' >LISTING!</h3>

    <Link to={`/listings/${props.listing.id}`}>{props.listing.name}</Link>
    <br></br>
    <Link to={`/listings/${props.listing.id}/edit`}>Edit</Link>
    <br></br>
    <button onClick={() => props.getListing(props.listing.id)}>show page</button>
  </li>
);

export default ListingIndexItem;