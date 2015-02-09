// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).ready( function () {

	$(".nav-item").on("click", function() {
		if($(this).find(".hiddenNav, .droppedNav").is(":hidden")) {
		    $(this).find(".hiddenNav, .droppedNav").slideDown(300)
		    .animate({backgroundColor: "#008CBA"}, {duration: 500, queue: false});
		    $(this).animate({backgroundColor: "#008CBA"}, 500).find("a").animate({color: "white"}, {queue: false});
		    delay(500);
		    $(this).find(".hiddenNav, .droppedNav").addClass("droppedNav").removeClass("hiddenNav");
		} else {
			$(this).find(".hiddenNav, .droppedNav").slideUp(300)
		    .animate({backgroundColor: "#white"}, {duration: 500, queue: false});
		 	$(this).animate({backgroundColor: "white"}, {duration: 500, queue: false});
		 	$(this).css("background-color", "white")
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