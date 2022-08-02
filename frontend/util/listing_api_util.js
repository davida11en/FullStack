export const getListings = () =>
  $.ajax({
    url: `/api/listings`,
    method: "GET",
  });

export const getListing = (listingId) =>
  $.ajax({
    url: `/api/listings/${listingId}`,
    method: "GET",
  });

export const createListing = (listing) => 
  $.ajax({
    url: `/api/listings/`,
    method: "POST",
    data:{ listing }
    
  })

export const updateListing = (listing) =>
    $.ajax({
      url: `/api/listings/${listing.id}`,
      method: 'PATCH',
      data: { listing }
    });

export const deleteListing = (listingId) =>
  $.ajax({
    url: `/api/listings/${listingId}`,
    method: "DELETE",
  });

export const fetchUserListings = (userId) =>
  $.ajax({
    url: `/api/users/${userId}/listings`,
    method: "GET",
  });