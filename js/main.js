// smooth scrolling to anchors
$(document).on('click', 'a.menuItem', function(event) {
    event.preventDefault();
    $('html, body').animate({
       scrollTop: $( $.attr(this, 'href') ).offset().top-100
    }, 500);
});

// slide-toggling menu in mobile version
$('#menuIcon').on('click', () => {
	  $("#menu").slideToggle();
});

// ensuring menu is always shown and hidden properly
$(window).resize(function() {
	if ($(window).width() > 768){
		$("#menu").css("display","inline-block");
  } else {
    $("#menu").css("display","none");
	}
});