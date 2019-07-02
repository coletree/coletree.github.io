/* coletree.com homepage setting */
$(document).ready(function(){

	$.stellar({
		  // Set scrolling to be in either one or both directions
		  horizontalScrolling: false,
		  verticalScrolling: true,
	
		  // Set the global alignment offsets
		  horizontalOffset: 0,
		  verticalOffset: 0,
	
		  // Refreshes parallax content on window load and resize
		  responsive: false,
	
		  // Select which property is used to calculate scroll.
		  // Choose 'scroll', 'position', 'margin' or 'transform',
		  // or write your own 'scrollProperty' plugin.
		  scrollProperty: 'scroll',
	
		  // Select which property is used to position elements.
		  // Choose between 'position' or 'transform',
		  // or write your own 'positionProperty' plugin.
		  positionProperty: 'position',
	
		  // Enable or disable the two types of parallax
		  parallaxBackgrounds: true,
		  parallaxElements: true,
	
		  // Hide parallax elements that move outside the viewport
		  hideDistantElements: true,
	
		  // Customise how elements are shown and hidden
		  hideElement: function($elem) { $elem.hide(); },
		  showElement: function($elem) { $elem.show(); }
		});


	    var links = $('.navigation').find('li');
	    slide = $('.slide');
	    button = $('.button');
	    mywindow = $(window);
	    htmlbody = $('html,body');
	
	    slide.waypoint(function (event, direction) {
	        dataslide = $(this).attr('data-slide');
	        if (direction === 'down') {
	            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
	        }
	        else {
	            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
	        }
	    });
	 
	    mywindow.scroll(function () {
	        if (mywindow.scrollTop() == 0) {
	            $('.navigation li[data-slide="1"]').addClass('active');
	            $('.navigation li[data-slide="2"]').removeClass('active');
	        }
	    });
	
	    function goToByScroll(dataslide) {
	        htmlbody.animate({
	            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
	        }, 2000, 'easeInOutQuint');
	    }
	
	    links.click(function (e) {
	        e.preventDefault();
	        dataslide = $(this).attr('data-slide');
	        goToByScroll(dataslide);
	    });
	
	    button.click(function (e) {
	        e.preventDefault();
	        dataslide = $(this).attr('data-slide');
	        goToByScroll(dataslide);
	
	    });

	
	
	//waypoint触发效果
	$('#section1').waypoint(function() {
		$('.navigation').toggleClass('actived');
		},
			{
			 offset: function() {
			 return -$('#section1').height();
			}
	});


	//顶部banner的水平视差效果
	$('#scene1').parallax();
	
	//设置logo动画样式
	setClass();
	
});


//设置banner视差动画样式
$('#sceneMain').parallax({
  calibrateX: false,
  calibrateY: true,
  invertX: false,
  invertY: true,
  limitX: false,
  limitY: true,
  scalarX: 6,
  scalarY: 0,
  frictionX: 0.2,
  frictionY: 0.8
});



//设置logo动画样式
function setClass() {
	$('#siteLogoWrap').addClass('animated bouncein');
}


//设置动画样式
$(window).scroll(function() {
	$('#animatedElement').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
				$(this).addClass("slideUp");
		}
	});
});
	





 /* ==============================================
================== Page Loader ===================
=============================================== */

//<![CDATA[
$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
})
//]]>


/* ==============================================
========== Navigation Scroll Effect =============
=============================================== */


$(document).ready(function () {
	'use strict';

    var menu = $('#navigation');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('.waypoint').offset().top - 200;

        if (y >= z) {
            menu.removeClass('not-visible-nav').addClass('visible-nav');
        }
        else{
            menu.removeClass('visible-nav').addClass('not-visible-nav');
        }
    });

});

/* ==============================================
Active Navigation Calling
=============================================== */

$('body').scrollspy({ 
	target: '.nav-menu',
	offset: 95
})


/* ==============================================
Scroll Navigation
=============================================== */	

$(function() {
		'use strict';

		$('.scroll').bind('click', function(event) {
			var $anchor = $(this);
			var headerH = $('#navigation').outerHeight();
			$('html, body').stop().animate({
				scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1200, 'easeInOutExpo');

			event.preventDefault();
		});
	});



/* ==============================================
Drop Down Menu Fade Effect
=============================================== */	

$('.nav-toggle').hover(function() {
	'use strict';
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(250);
    }, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(250)
 });



/* ==============================================
Mobile Menu Button
=============================================== */	

$('.mini-nav-button').click(function() {
    $(".nav-menu").slideToggle("9000");
 });

$('.nav a').click(function () {
	if ($(window).width() < 970) {
    	$(".nav-menu").slideToggle("2000")}
	
});



/* ==============================================
Wow Animation
=============================================== */

wow = new WOW(
  {
    animateClass: 'animated',
  }
);
wow.init();



/* ==============================================
Counter
=============================================== */

$('.count').each(function() {
    var $this   = $(this);
    $this.data('target', parseInt($this.html()));
    $this.data('counted', false);
    $this.html('0');
});

$(window).bind('scroll', function() {
    var speed   = 3000;
    $('.count').each(function() {
        var $this   = $(this);
        if(!$this.data('counted') && $(window).scrollTop() + $(window).height() >= $this.offset().top) {
            $this.data('counted', true);
            $this.animate({dummy: 1}, {
                duration: speed,
                step:     function(now) {
                    var $this   = $(this);
                    var val     = Math.round($this.data('target') * now);
                    $this.html(val);
                    if(0 < $this.parent('.value').length) {
                        $this.parent('.value').css('width', val + '%');
                    }
                }
            });
        }
    });
}).triggerHandler('scroll');



/* ==============================================
Testimonials
=============================================== */

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

$(window).load(function() {
  $('.flexslider-client').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 5
  });
});



/*----------------------------------------
Required Attribute
----------------------------------------*/
$('input').attr('required', true);




	
	
