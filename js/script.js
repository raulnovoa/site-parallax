
    $(document).ready(function(){		
	
        $('#slide1').parallax("center", -110, 0.1, true);
        $('#slide2').parallax("center", 900, 0.1, true);
        $('#slide3').parallax("center", 2900, 0.1, true);
        $('.slide_inside').parallax("center", 3500, 0.1, true);
		
		/* ################# NiceScroll ######################### */
		$("html").niceScroll({
			background: "#8A837E",
			cursorcolor: "#eb4296",
			cursoropacitymin: "1",
			cursoropacitymax: "1",
			cursorwidth: "7px",
			cursorborder: "0",
			cursorborderradius: "0"
		});
		

/*
		if (jQuery.browser.msie && jQuery.browser.version.substr(0,1) <= 8 ) {   
			 
		} else {
			
		}
		*/
    });