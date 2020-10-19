$(document).ready(function() {
  $('.header_burger').click(function(event) {
    $('.header_burger, .header_menu') .toggleClass('active');
    $('body') .toggleClass('lock');
  });
});
$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($(".counter")) && !viewed) {
      viewed = true;
      $('.cntr').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
}
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
                dots:true
            },
            768:{
                items:2,
                dots:true
            },
            1024:{
                items:3
            }
        }
    })
