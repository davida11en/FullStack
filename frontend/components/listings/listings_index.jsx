import React from "react";
import ListingIndexItem from './listings_index_item';


class ListingsIndex extends React.Component {
    componentDidMount() {
        this.props.getListings();
      }
 
    render() {
        const { listings, getListing } = this.props;
        // {console.log('lookin for', listings)}
        {console.log('lookin for PROPS', this.props)} 
        return (
            <div>
                <h1> INDEX PAGE </h1>
                <ul>
                {
                    listings.map(listing => (
                      
                        <ListingIndexItem
                            listing={listing}
                            getListing={getListing}
                            key={listing.id}
                        />
                    ))
                }
                </ul>
                
                {/* <AddListing/> */}
            </div>
        )
    }
}


export default ListingsIndex;




/* 
    OLD GRID PATTERN TO RENDER A LOOK ALIKE LISTINGS 
            <div className="row"> 
                <div className="column">
                    <img src="https://media.architecturaldigest.com/photos/5ec692fe0c3e0ef2c4b32d99/master/pass/SeanLitchfield_LexingtonBK_0139_2.jpg" />
                    <img src="https://i.pinimg.com/736x/2c/cb/bf/2ccbbf49eb9ff60c6b86ba50fda842a9--luxury-apartments-interior-design-inspiration.jpg" />                
                    <img src="https://imgs.6sqft.com/wp-content/uploads/2020/07/24093135/Central-Park-Tower-Model-Residence-14.jpg" />
                    <img src="https://prod-aws1-wallpaper-com.s3-eu-west-1.amazonaws.com/main/unknown-3_2_0.jpg" />
                    <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg" />  
                </div>
            </div> 
            
*/