import { connect } from 'react-redux';
import { getListing, updateListing, deleteListing} from '../../actions/listings_actions'
import ListingShow from './listing_show';

// const mapSTP = (state, ownProps) => ({
//   listing: state.listings[ownProps.match.params.listingId]
// });

const mapSTP = (state, ownProps) => {
    console.log('lookin for state', state)
    console.log('lookin for OWN', ownProps)
    // console.log('lookin for listing', listing)
    return {
        currentUser: state.entities.users[state.session.id],
        listing: state.entities.listings[ownProps.match.params.listingId]
    }
};

const mapDTP = dispatch => ({
    getListing: listingId => dispatch(getListing(listingId))
});

const ListingShowContainer = connect(mapSTP, mapDTP)(ListingShow);
export default ListingShowContainer;