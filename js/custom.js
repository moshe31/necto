  $(function() {
      var header = $("header ");
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();

          if (scroll >= 10) {
              header.addClass("stickyheader");
          } else {
              header.removeClass("stickyheader");
          }
      });
  });



$('.banner-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true, autoplay:true,
    autoplayTimeout:5000,
    responsive: {
        0: {
            items: 1
        }
    }
})



$(document).on('click', '.opensidebar-menu', function() {
    
    $("#menu-sidebar").animate({
        right: "0"
    }, {
        duration: 1000
    });


});

$(document).on('click', '.close-sidebar', function() {

    $("#menu-sidebar").animate({
        right: "-1000"
    }, {
        duration: 1000
    });
});


$(document).on('click', 'ul .has-item a', function() {

    if($(this).closest('.has-item').hasClass('openmenu')){
      $(this).closest('.has-item').removeClass('openmenu');
      $(this).closest('.has-item').find('.submenu').slideUp(500);

    }
    else{
      $(this).closest('.has-item').addClass('openmenu');
      $(this).closest('.has-item').find('.submenu').slideDown(500);

      
    }
});




// thumbnail slider


$(document).ready(function(){
$('.owl-carousel').owlCarousel({
   loop: true,
        items: 1,
        slideSpeed: 2000,
        autoplay: true,
        thumbs: true,
        thumbImage: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item'
   });
});