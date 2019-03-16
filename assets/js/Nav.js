$(document).ready(function() {
    // Add indicator to all nav-links
    $('#side-nav .nav-link').each(function() {
        $(this).append(
            "<span class='nav-hover-indicator'><i class='fas fa-caret-left'></i></span>"
        )
    })

    // Pull out indicator on hover
    $('#side-nav .nav-link').hover(function() {
        $(this).find(".nav-hover-indicator").addClass('active');
    }, function() {
        $(this).find(".nav-hover-indicator").removeClass('active');
    })
});

function toggleNav() {
    let nav = $("#side-nav");
    let navOpenBtn = $('.nav-open-button');
    if (nav.hasClass("active")) {
        nav.removeClass("active");
        navOpenBtn.addClass("active");
    } else {
        nav.addClass("active");
        navOpenBtn.removeClass("active");
    }
}
$(document).ready(function(){
    $(window).bind('scroll', function() {
    var navHeight = $( window ).height() - 70;
          if ($(window).scrollTop() > navHeight) {
              $('nav').addClass('fixed');
          }
          else {
              $('nav').removeClass('fixed');
          }
     });
 });