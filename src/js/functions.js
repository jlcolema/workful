
/*-------------------------------------------
	Browser Detection
--------------------------------*/

// For when you get desparate.

// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


/*-------------------------------------------
	General Functions
--------------------------------*/


(function($){


	/* On Page Ready */

	$(document).ready(function (){


		/*--------------------------------------
			Title
		--------------------------------------*/

		// Notes...

		/*--------------------------------------
			Smooth Scroll
		--------------------------------------*/

		// Notes...


		// $('.move a').smoothScroll({

			// offset: -20

		// });

		/*--------------------------------------
			Open External URLs in new window
		--------------------------------------*/

		// Notes...

		// $('a').each(function() {

		// 	var external_url = new RegExp('/' + window.location.host + '/');

		// 	if (!external_url.test(this.href)) {

		// 		$(this).addClass('external');

		// 		$(this).click(function(event) {

		// 			event.preventDefault();
		// 			event.stopPropagation();

		// 			window.open(this.href, '_blank');

		// 		});

		// 	}

		// });

		/*--------------------------------------
			Screen Size
		--------------------------------------*/


		// Add class of "dev" to <body>


		$("body").addClass("dev");


		// Displays screen size on the fly.


		var windowWidth = $(window).width();

		var windowHeight = $(window).height();

		$(".workful-footer").after('<div id="dev"></div>');

		$("#dev").text(windowWidth + ' ' + 'W' + ' ' + '/' + ' ' + windowHeight + ' ' + 'H');


	});


	/* On Page Load */


	$(window).on('load', function() {


		/*--------------------------------------
			Title
		--------------------------------------*/

		// Notes...


		/*--------------------------------------
			Slideshow
		--------------------------------------*/

		// Notes...


		// $(".flexslider").flexslider({

			// animation: "fade",
			// slideshowSpeed: 7000,
			// useCSS: true,
			// controlNav: false,
			// directionNav: true,
			// smoothHeight: true,

			// start: function(slider){

				// $("body").removeClass("loading");

			// }

		// });

	});


	/* On Window Resize */


	$(window).resize(function() {


		/*--------------------------------------
			Screen Size
		--------------------------------------*/


		// Displays screen size on the fly.


		var windowWidth = $(window).width();

		var windowHeight = $(window).height();

		$("#dev").text(windowWidth + ' ' + 'W' + ' ' + '/' + ' ' + windowHeight + ' ' + 'H');


	});


})(window.jQuery);
