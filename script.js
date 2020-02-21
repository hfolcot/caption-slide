$(document).ready(function () {
    $('#carouselExampleCaptions').on('slid.bs.carousel', function () {
       $('.slide-fade-from-left').fadeIn();
       $('.slide-fade-from-left2').fadeIn();
       $('.slide-fade-from-left3').fadeIn();
      })
})