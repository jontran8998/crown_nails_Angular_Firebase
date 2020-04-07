function greenDate (){
  $(document).ready(function() {
    $('.opening-hours li').eq(new Date().getDay()).addClass('today');
    });
}

// $(document).ready(function() {
//   $('.opening-hours li').eq(new Date().getDay()).addClass('today');
//   });
