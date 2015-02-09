// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

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