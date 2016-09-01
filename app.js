var main = function() {
	$('.navButton').click(function() {
		$('.navButton').removeClass('active-navButton');
		$(this).addClass('active-navButton');
		var showBlock = '.' + $(this).text().toLowerCase() + 'Block';
		$('.block').children().removeClass('activeBlock');
		$(showBlock).addClass('activeBlock');
		$('.title').text($(this).text());
	});
	$('.days.dayNums').click(function() {
		$('.dayNums').removeClass('selected');
		$(this).addClass('selected');
		var day = $(this).text();
		$('.event').removeClass('activeEvent');
		if ($('.eventsList').children().hasClass(day)) {
			$('.' + day).addClass('activeEvent');
		}
	});
	$('.prev').click(function() {
		if ($('.calendarMonth.active').text() == "January") {
			prevMonth = $('.calendarMonth.December');
			$('.calendarYear').text(parseInt($('.calendarYear').text()-1));
		}
		else {
			prevMonth = $('.calendarMonth.active').prev();
		}
		$('.calendarMonth').removeClass('active');
		$(prevMonth).addClass('active');
		setCalendar(getMonthNum($(prevMonth).text()),parseInt($('.calendarYear').text()));
	});
	$('.next').click(function() {
		if ($('.calendarMonth.active').text() == "December") {
			nextMonth = $('.calendarMonth.January');
			$('.calendarYear').text(parseInt($('.calendarYear').text() -(-1)));
		}
		else {
			nextMonth = $('.calendarMonth.active').next();
		}
		$('.calendarMonth').removeClass('active');
		$(nextMonth).addClass('active');
		setCalendar(getMonthNum($(nextMonth).text()),parseInt($('.calendarYear').text()));
	});
}


var getWeekday = function(monthNum, yearNum) {
	var d = new Date();
	d.setDate(1);
	d.setMonth(monthNum);
	d.setFullYear(yearNum);
	return d.getDay();
}

var setCalendar = function(monthInt, year) {
	$('.days').empty();
	switch (monthInt) {
		case 0:
			month = "January";
			break;
		case 1:
			month = "February";
			break;
		case 2:
			month = "March";
			break;
		case 3:
			month = "April";
			break;
		case 4:
			month = "May";
			break;
		case 5:
			month = "June";
			break;
		case 6:
			month = "July";
			break;
		case 7:
			month = "August";
			break;
		case 8:
			month = "September";
			break;
		case 9:
			month = "October";
			break;
		case 10:
			month = "November";
			break;
		case 11:
			month = "December";
	}

	$('.calendarMonth.' + month).addClass('active');
	$('.calendarYear').text(year);

	var daysInMonth = new Date(year, (monthInt+1), 0).getDate();
	switch(getWeekday(monthInt,year)) {
		case 1:
			$('.days').append('<li><span class="dayNums"></span></li>');
			break;
		case 2:
			for(i=0;i<2;i++) {
				$('.days').append('<li><span class="dayNums"></span></li>');
			};
			break;
		case 3:
			for(i=0;i<3;i++) {
				$('.days').append('<li><span class="dayNums"></span></li>');
			}
			break;
		case 4:
			for(i=0;i<4;i++) {
				$('.days').append('<li><span class="dayNums"></span></li>');
			}
			break;
		case 5:
			for(i=0;i<5;i++) {
				$('.days').append('<li><span class="dayNums"></span></li>');
			}
			break;
		case 6:
			for(i=0;i<6;i++) {
				$('.days').append('<li><span class="dayNums"></span></li>');
			}
			break;
	}
	for (i=1;i<daysInMonth+1;i++) {
		$('.days').append('<li><span class="dayNums">' + i + '</span></li>');
	}
}

var getMonthNum = function(month) {
	switch(month) {
		case "January":
			return 0;
		case "February":
			return 1;
		case "March":
			return 2;
		case "April":
			return 3;
		case "May":
			return 4;
		case "June":
			return 5;
		case "July":
			return 6;
		case "August":
			return 7;
		case "September":
			return 8;
		case "October":
			return 9;
		case "November":
			return 10;
		case "December":
			return 11;
	}
}

$(document).ready(main);