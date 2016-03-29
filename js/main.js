

$(document).ready(function() {

    $(".rocket img").animate({left: "+=1000"}, 5000, function() {
    // $(".rocket img").animate({left: "-=300"}, 1000, function() {
	    $(".rocket img").css({
	    	 transform: ' rotateZ(-58deg)',
			 MozTransform: ' rotateZ(-58deg)',
			 WebkitTransform: ' rotateZ(-58deg)',
			 msTransform: ' rotateZ(-58deg)'
			});
    });

    
    $(".rocket img").animate({marginTop: "+=450px"}, 5000)
     
});