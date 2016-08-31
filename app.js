var main = function() {
	$('.navButton').click(function() {
		$('.navButton').removeClass('active-navButton');
		$(this).addClass('active-navButton');
		var showBlock = '.' + $(this).text().toLowerCase() + 'Block';
		$('.block').children().removeClass('activeBlock');
		$(showBlock).addClass('activeBlock');
	});
}

$(document).ready(main);