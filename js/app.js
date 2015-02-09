// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).ready( function () {

	$(".nav-item").on("click", function() {
		if($(this).find(".hiddenNav").is(":hidden")) {
		    $(this).find(".hiddenNav").slideDown(500)
		    $(this).css("background-color", "#008CBA").find("a").css("color", "white");
		    delay(500);
		    $(this).find(".hiddenNav").addClass("droppedNav").removeClass("hiddenNav");
		} else {
			$(this).find(".hiddenNav").slideUp(300);
		 	$(this).css("background-color", "white")
			$(this).find("a").removeAttr("style");
		};
		if($(this).find(".droppedNav").is(":hidden")) {
		    $(this).find(".droppedNav").slideDown(500)
		    .addClass("hiddenNav").removeClass("droppedNav");
		 	$(this).css("background-color", "#008CBA").find("a").css("color", "white");
		} else {
			$(this).find(".droppedNav").slideUp(300)
			$(this).find("a").removeAttr("style");
		};
	});

	$(window).scroll(function (event) {

	    var scroll = $(window).scrollTop();

	    if (scroll>10) {
	    	$("#navbar").css("border-bottom", "1px solid #999");
	    } if (scroll>20) {
	    	$(".hiddenNav, .droppedNav").css("border", "1px solid #999")
	    	.css("border-top", "none");
		} else {
    		$("#navbar").css("border-bottom", "1px solid white");
    		$(".hiddenNav, .droppedNav").css("border", "1px solid #008CBA")
	    	.css("border-top", "none");
		};

		if ($(window).width()<481) {
	    	$("#navbar").css("position", "relative")
		};
	});

});