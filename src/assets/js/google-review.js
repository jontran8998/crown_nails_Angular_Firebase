jQuery(document).ready(function() {
  $("#google-reviews").googlePlaces({
      placeId: 'ChIJOy6Wkc516lIR8rq01wwdAeA',
      render: ['reviews'],
      min_rating: 5,
      max_rows: 0
  });
});