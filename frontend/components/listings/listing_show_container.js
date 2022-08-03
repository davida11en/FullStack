import { connect } from 'react-redux';
import { getListing, updateListing, deleteListing} from '../../actions/listings_actions'
import ListingShow from './listing_show';

// const mapSTP = (state, ownProps) => ({
//   listing: state.listings[ownProps.match.params.listingId]
// });

 const mapSTP = (state, ownProps) => {
    console.log('lookin for OWN', ownProps)
    return {
    listing: state.listings[ownProps.match.params.listingId]
    }
};

const mapDTP = dispatch => ({
    getListing: listingId => dispatch(getListing(listingId))
});

const ListingShowContainer = connect(mapSTP, mapDTP)(ListingShow);
export default ListingShowContainer;