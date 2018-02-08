$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:7
        }
    }
  });
  $('.grid').masonry({
    itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  $('ul.select i.icon').click(function(){
    $(this).closest('ul.select').toggleClass('active');
  });
  $('ul.select li').click(function(){
    $(this).closest('ul.select').removeClass('active');
  });

});
