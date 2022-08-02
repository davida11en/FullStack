import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = props => (
  <li className='listing-item' >
    <h3 className='test-class' >indextItem</h3>
    {/* {console.log('lookin for PROPS', props)} */}
    <Link to={`/listings/${props.listing.id}`}>{props.listing.name}</Link>
    <Link to={`/listings/${props.listing.id}/edit`}>Edit</Link>
    <button onClick={() => props.getListing(props.listing.id)}>show page</button>
  </li>
);

export default ListingIndexItem;