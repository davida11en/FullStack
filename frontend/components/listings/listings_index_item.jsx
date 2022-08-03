import React from 'react';
import { Link } from 'react-router-dom';
// import ListingShowContainer from './listings/listing_show_container';


const ListingIndexItem = props => (
  <li className='listing-item' >
    <h3 className='test-class' >LISTING!</h3>

    <h4>{props.listing.name}</h4>
    <br></br>
    <Link to={`/listings/${props.listing.id}/edit`}>Edit</Link>
    <br></br>
    {console.log('checkin ids', props.listing.id)}
    <Link to={`/listings/${props.listing.id}`}>
      <button>LIS-TING</button>
    </Link>
  </li>
);

export default ListingIndexItem;