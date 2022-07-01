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