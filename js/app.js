// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).ready( function () {

	$(".nav-item").on("click", function() {
		if($(this).find(".dropNav").css("display")=="none") {
		    $(this).find(".dropNav").css("display", "inline-block");
		} else {
			$(this).find(".dropNav").css("display", "none");
		};
	});

	$(window).scroll(function (event) {

	    var scroll = $(window).scrollTop();

	    if (scroll>10) {
	    	$("#navbar").css("border-bottom", "1px solid #999")
		} else {
	    		$("#navbar").css("border-bottom", "0px")
		};

		if ($(window).width()<481) {
	    	$("#navbar").css("position", "relative")
		};
	});

});