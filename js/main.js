(function ($) {
    "use strict";

/* Preloader */
	var win = $(window);
	win.on('load',function() {
		$('.page-loader').delay(350).fadeOut('slow');
	});

// meanmenu
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "767"
    });


// sticky
/* TOP Menu Stick  */
	win.on('scroll',function() {
	if ($(this).scrollTop() > 1){
		$('#sticky-header').addClass("sticky");
	  }
	  else{
		$('#sticky-header').removeClass("sticky");
	  }
	});

    
    
    // typejs
    $('.slider-area .slider-content h2').typed({
        strings: ["A WEB DESIGNER","UI/UX  DEVELOPER"],
        loop: true,
        startDelay: 1000,
        backDelay: 2000
    });
    
    
    
// init Isotope
var $grid = $('.portfolio-active').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-item',
  }
});



    

// isotop active for menu button

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});



//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


/* slider-active */
$('.slider-active').owlCarousel({
    loop:true,
    nav:false,
	autoplay:true,
    autoplaySpeed: 1000,
    smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        },
        1200:{
            items:1
        }
    }
})
    
    /* testimonial-active */
$('.testimonial-active').owlCarousel({
    loop:true,
    nav:false,
	autoplay:true,
    autoplaySpeed: 1000,
    smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        },
        1200:{
            items:1
        }
    }
});
 
  //Navbar Smooth scroll 

  $("a.smooth-scroll").click(function(event){
      event.preventDefault();

      var section = $(this).attr("href");

      $("html,body").animate({
          scrollTop: $(section).offset().top-60
      }, 1250, "easeInOutExpo");
  });
    


    /* counter */
//$('.counter').counterUp({
//    delay: 10,
//    time: 1000
//});

//scrollup 
 $.scrollUp({
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 600,         // Distance from top/bottom before showing element (px)
        scrollSpeed: 400,            // Speed back to top (ms)
        animation: 'fade',           // Fade, slide, none
        animationSpeed: 200,         // Animation speed (ms)
        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
        scrollText: '<i class="fas fa-chevron-up"></i>', // Text for element, can contain HTML
        scrollTitle: false,          // Set a custom a title if required.
        scrollImg: false,            // Set true to use image
        animationInSpeed: 1000, // Animation in speed (ms)
		animationOutSpeed: 1000, // Animation out speed (ms)
        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


    // WOW active
new WOW().init();
    
    
//google map
    function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.712776, -74.005974), // New York
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
]

        };
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('contact-map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.712776, -74.005974),
            map: map,
            title: 'Cryptox'
        });
    }
    if ($('#contact-map').length != 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
    }
    
    
})(jQuery);