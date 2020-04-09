// $(document).ready(function(){
//   $(".eagr-reviews-skeleton-container.jsx-1473416917 a").last().hide();
//   console.log('the code is running');
// });

const removeAdd = function(){
  $(document).ready(function(){
    $(".eagr-reviews-skeleton-container.jsx-1473416917 a").last().hide();
    localStorage.clear();
    console.log('the code is running');
  });
}

setTimeout(removeAdd(), 5000);
$( window ).on( "load", function() {
  console.log( "window loaded" );
});

