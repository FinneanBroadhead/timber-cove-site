var currentTestimonialIndex = 0;
var allTestimonials = [];

$(document).ready(function() {
    // Add click listeners
    $('.quote-box .next-arrow').click(function() {
        console.log("next clicked");
        nextTestimonial();
    }).hover(function() {
        $('.quote-box').css({
            'border-right-color': 'var(--primary)',
            'border-right-width': '10px',
            'border-left-width': '1px'
        });
    }, function() {
        $('.quote-box').css({
            'border-right-color': 'white',
            'border-right-width': '5px',
            'border-left-width': '5px'
        });
    });
    $('.quote-box .prev-arrow').click(function() {
        console.log("prev clicked");
        previousTestimonial();
    }).hover(function() {
        $('.quote-box').css({
            'border-left-color': 'var(--primary)',
            'border-left-width': '10px',
            'border-right-width': '1px'
        });
    }, function() {
        $('.quote-box').css({
            'border-left-color': 'white',
            'border-left-width': '5px',
            'border-right-width': '5px'
        });
    });

    // Get all testimonials
    $('.quote-box .testimonials .testimonial').each(function(i) {
        allTestimonials.push($(this));
    });

    // Disable previous button
    $('.quote-box .prev-arrow').addClass('disabled');
    // Show first testimonial
    $(allTestimonials[0]).addClass('shown');
});

function nextTestimonial() {
    $('.quote-box .prev-arrow').removeClass('disabled');

    if (currentTestimonialIndex < allTestimonials.length) {
        $(allTestimonials[currentTestimonialIndex]).removeClass('shown');
        currentTestimonialIndex++;
        $(allTestimonials[currentTestimonialIndex]).addClass('shown');
    }

    if (currentTestimonialIndex >= allTestimonials.length - 1) {
        $('.quote-box .next-arrow').addClass('disabled');
        currentTestimonialIndex = allTestimonials.length - 1;
    } else {
        $('.quote-box .next-arrow').removeClass('disabled');
    }
}

function previousTestimonial() {
    $('.quote-box .next-arrow').removeClass('disabled');

    if (currentTestimonialIndex > 0) {
        $(allTestimonials[currentTestimonialIndex]).removeClass('shown');
        currentTestimonialIndex--;
        $(allTestimonials[currentTestimonialIndex]).addClass('shown');
    }

    if (currentTestimonialIndex <= 0) {
        // Disable previous button
        $('.quote-box .prev-arrow').addClass('disabled');
        currentTestimonialIndex = 0;
    } else {
        $('.quote-box .prev-arrow').removeClass('disabled');
    }
}