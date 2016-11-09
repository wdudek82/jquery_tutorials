var myClock = setInterval(function() {
	var date = new Date(),
		hour = date.getHours() < 10 ? '0'+date.getHours() : date.getHours(),
		minutes = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes(),
		seconds = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();

	$('#clock').html(hour+':'+minutes+':'+seconds);
}, 1000);

$(document).ready(function() {
    // configuration
    var width = 500;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    // cache DOM
    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');


    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                currentSlide++;
                if (currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }

    function pauseSlider() {
        clearInterval(interval);
    }

    $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

    startSlider();

});

// $(selector).animate(obj, time, callback);