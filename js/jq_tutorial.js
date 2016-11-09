// short
// $(function() {
// 
// });

// var on1 = 1,
// 	on2 = 1,
// 	on3 = 1,
// 	time_up = 300,
// 	time_down = 500;

// $(document).ready(function() {
// 	$('#btn1').on('mouseover', function() {
// 		var toggleTag = on1 === 0 ? 'ON' : 'OFF';

// 		$('#btn1').html('#btn1 <strong>' + toggleTag + '</strong>');
// 		$('#panel1').toggle(500);
// 		on1 = (on1 === 1) ? 0 : 1;
// 	});

// 	$('#btn2').on('mouseover', function() {
// 		$('#panel2').slideToggle(500);
// 	});

// 	$('#btn3').on('mouseover', function() {
// 		// $('#panel3').fadeToggle(500);
// 		$('#panel3').fadeIn(500);

// 	});
// 	$('#btn3').on('mouseleave', function() {
// 		$('#panel3').fadeOut(500);
// 	});


// 	$('#btn4').click(function() {
// 		$('#panel4').css({
// 			opacity: '0.5',
// 			color:'red',
// 			fontWeight: 'bold'
// 		});
// 	});

// });

// $(document).ready(function() {
// 	$('#btn5').on('click', function() {
// 		$('#panel5 .panel-body').html('my new content');
// 	});
// });

$(document).ready(function() {
	var content = 'My new awesome content';

	$('.panel-button').on('click', function() {
		var panelId = '#' + $(this).attr('data-panelid');
		console.log(panelId);
		$(panelId).toggle();
		$(panelId + ' .panel-body').html(content);
	});
});

$(document).ready(function() {
	$('li').on('click', function() {
		$(this).addClass('special');
		$(this).siblings().removeClass('special');
	});
});

/**
 * fadeIn(time);
 * fadeOut(time);
 * fadeToggle();
 *
 * slideDown();
 * slideUp();
 * slideToggle();
 *
 * show();
 * hide();
 * toggle();
 * 
 * .css();
 * .html();
 *
 * .addClass();
 * .removeClass();
 *
 * .closest([selector]);
 *
 * .find([selector]);
 * .filter();
 * .is([selector]);
 */