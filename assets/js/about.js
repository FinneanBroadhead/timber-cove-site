var divs,
    i = 0,
		currentSectionObject = "";

$(document).ready(function() {

	// Initially hide first icon
	$('.email-hover-piece .fa-chart-pie');
	$('.email-hover-piece .fa-envelope');

	// Add gradient highlight upon hover
	$('.info-section .info-row p').hover(function() {
		// Add highlight gradient on hover
		$(this).closest(".info-col").find(".column-highlight").addClass("activated");
		// Rotate image
		$(this).closest(".info-row").find(".half-image").addClass("tilted");
	}, function() {
		// Remove highlight gradient off hover
		let parent = $(this).parent(".info-col");
		$(this).closest(".info-col").find(".column-highlight").removeClass("activated");
		// Derotate image
		$(this).closest(".info-row").find(".half-image").removeClass("tilted");
	});

	// Hovering analytics or email
	$('.info-col-email-hover p').hover(function() {
		// Set icon based on type
		switch ($(this).data("emailHoverType")) {
			case "mail":
				$(".email-hover-piece .fa-envelope").removeClass("hidden-piece");
				$(".email-hover-piece .fa-chart-pie").addClass("hidden-piece");
			break;
			case "analytics":
				$(".email-hover-piece .fa-envelope").addClass("hidden-piece");
				$(".email-hover-piece .fa-chart-pie").removeClass("hidden-piece");
			break;
		}
	}, function() {});

	// Rotating social networks text
	divs = $('div[id^="rollingword-"]').hide();
  (function cycle() {

    divs.eq(i).fadeIn(200)
              .delay(1500)
              .fadeOut(200, cycle)

    i = ++i % divs.length;
  })();

	// Hovering social buttons
	$('.socials-holder .social-piece').hover(function() {
		$('.mid-section .section-gradient').css('opacity', '1');
	}, function() {
		$('.mid-section .section-gradient').css('opacity', '0');
	});

	// FAQ
	$(document).ready(function(){
	$(".box").click(function(){
	  $(this).next().slideToggle("fast");
	  $(this).find('i').toggle();
	});

	});


	AOS.init({
		offset: 200,
		easing: 'ease-out-quart'
	});
});
