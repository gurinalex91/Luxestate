$(document).ready(function() {
  $('.header_burger').click(function(event) {
    $('.header_burger, .header_menu, .header_buttons') .toggleClass('active');
    $('body') .toggleClass('lock');
  });
});
$(window).scroll(counterScroll);
let viewed = false;

function isScrolledIntoView(elem) {
    const docViewTop = $(window).scrollTop();
    const docViewBottom = docViewTop + $(window).height();

    const elemTop = $(elem).offset().top;
    const elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function counterScroll() {
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
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
                dots:true
            },
            576:{
                items:2,
                dots:true
            },
            992:{
                items:3
            }
        }
    })
