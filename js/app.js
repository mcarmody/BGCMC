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
		$("nav-item").not(this).find(".hiddenNav, .droppedNav").slideUp(300);
	});

	// a popup widget for registration

	$(function() {
	    $( "#register" ).dialog({
	      autoOpen: false,
	      show: {
	        effect: "blind",
	        duration: 1000
	      },
	      hide: {
	        effect: "explode",
	        duration: 1000
	      }
	    });
	 
	    $( "#signup-button" ).click(function() {
	      $( "#register" ).dialog( "open" );
	    });
	  });

	$(window).scroll(function (event) {

	    var scroll = $(window).scrollTop();

	    if (scroll>10) {
	    	$("#navbar").css("border-bottom", "1px solid #999");
	    	$(".nav-item").animate({
	    		borderTopLeftRadius: 0,
	    		borderTopRightRadius: 0,
	    		borderBottomLeftRadius: 0,
	   			borderBottomRightRadius: 0,}, 100);
	    }  else {
    		$("#navbar").css("border-bottom", "1px solid white");
    		$(".hiddenNav, .droppedNav").css("border", "1px solid #008CBA")
	    	.css("border-top", "none");
	    	$(".nav-item").animate({
	    		borderTopLeftRadius: 0,
	    		borderTopRightRadius: 0,
	    		borderBottomLeftRadius: 10,
	   			borderBottomRightRadius: 10,}, {duration: 100, queue: false});
		};
		if (scroll>20) {
	    	$(".hiddenNav, .droppedNav").css("border", "1px solid #999")
	    	.css("border-top", "none");
		}

		if ($(window).width()<481) {
	    	$("#navbar").css("position", "relative");
		};
	});

});