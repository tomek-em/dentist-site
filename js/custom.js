(function ($) {

  // preloader
  $(window).on('load', () => {
    $('.preloader').fadeOut(1000);
  });

  // flag for scrolling
  let scrolling = false;


  // Smoothscroll
  $(function() {
    $('.navbar a, #home a').on('click', function(event) {
      scrolling = true;

      setTimeout(() => {
        scrolling = false;
      }, 1000);

      // change active class
      $(".navbar-collapse").collapse('hide');
      $('.navbar li.active').removeClass('active');
      var $currentLi = event.currentTarget.closest('li');
      $($currentLi).addClass('active');

      // smooth scroll animation
      var $anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
          event.preventDefault();
    });
  });

  // footer link
  $('#footerlink_Home').on('click', () => {
    $(".navbar li.active").removeClass('active');
    $('.navbar-nav li' ).first().addClass('active');
  });

  var onScroll = function () {
     var windowTop = $(window).scrollTop();
     $('section[id]').each(function (index, elem) {
         var offsetTop = $(elem).offset().top;
         var outerHeight = $(this).outerHeight(true);

         if( windowTop > (offsetTop - 50) && windowTop < ( offsetTop + outerHeight) && scrolling == false) {
             var elemId = $(elem).attr('id');
             $(".navbar li.active").removeClass('active');
             $(".navbar a[href='#" + elemId + "']").closest('li').addClass('active');
         }

         if( windowTop > 0 && windowTop < 50 && scrolling == false) {
             var elemId = $(elem).attr('id');
             $(".navbar li.active").removeClass('active');
             $('.navbar-nav li' ).first().addClass('active');
         }
     });
   };


     $(function () {
         $(window).on('scroll', function () {
             onScroll();
         });
     });


})(jQuery);
