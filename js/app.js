// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).ready( function () {

	$(".nav-item").on("click", function() {
		if($(this).find(".dropNav").is(":hidden")) {
		    $(this).find(".dropNav").slideDown(500);
		} else {
			$(this).find(".dropNav").hide();
		};
	});

	$(window).scroll(function (event) {

	    var scroll = $(window).scrollTop();

	    if (scroll>10) {
	    	$("#navbar").css("border-bottom", "1px solid #999");
	    } if (scroll>20) {
	    	$(".dropNav").css("border", "1px solid #999");
    		$(".dropNav").css("border-top", "none");
		} else {
    		$("#navbar").css("border-bottom", "1px solid white");
	    	$(".dropNav").css("border", "1px solid white");
	    	$(".dropNav").css("border-top", "none");
		};

		if ($(window).width()<481) {
	    	$("#navbar").css("position", "relative")
		};
	});

});