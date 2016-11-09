$(document).ready(function() {
	$('.tab-panels .tabs li').on('click', function() {
		var $panel = $(this).closest('.tab-panels');

		$panel.find('.tabs li.active').removeClass('active');
		$(this).addClass('active');
		
		var $panelToShow = $(this).attr('rel');
	
		$panel.find('.panel.active').slideUp(300, showNextPanel);

		function showNextPanel() {
			$(this).removeClass('active');

			$('#'+$panelToShow).slideDown(300, function() {
				$(this).addClass('active');
			});
		}
	});
});
