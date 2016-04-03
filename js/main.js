

$(document).ready(function() {
    // rocket moves right
    $(".rocket img").animate({left: "+=1050px"}, 5000, function() {
        // rocket rotates
	    $(".rocket img").css({
	    	 transform: ' rotateZ(-58deg)',
			 MozTransform: ' rotateZ(-58deg)',
			 WebkitTransform: ' rotateZ(-58deg)',
			 msTransform: ' rotateZ(-58deg)',
			 transition:'transform 1s'
			});
    });

    // Rocket lands
    $(".rocket img").animate({marginTop: "+=350px"}, 5000, function() {
    //     for (var i = 0; i<4; i++) {
    //         $(".aliens img").eq(i).delay(5000 * i).show(5000);
    //     }
    // Aliens show() one by one
    	$("#alien4").show('slow', function() {
    		$("#alien3").show('slow', function() {
    			$("#alien2").show('slow', function() {
    				$("#alien1").show('slow', function() {
                        $('aliens').css('text-align', 'left');

                        // Alien div moves left and each alien fadeOut() out one by one
    					$('.aliens').animate({right: "1050px"}, 5000, function() {
    						$('#alien4').fadeOut('fast', function() {
    							 $('#alien3').fadeOut('fast', function() {
                                    $('#alien2').fadeOut('fast', function() {
                                        $('#alien1').fadeOut('fast', function() {
                                            // Aliens fadeIn() and move right one by one
                                            $('#alien1').delay(2000).fadeIn().animate({left: "1150px"}, 5000, function() {
                                                $('#alien2').fadeIn().animate({left: "1150px"}, 5000, function() {
                                                    $('#alien3').fadeIn().animate({left: "850px"}, 5000, function() {
                                                        $('#alien4').fadeIn().animate({left: "850px"}, 5000, tank);

                                                    
                                                    });
                                                });
                                            });
                                        });
                                    });
                                 });
    						});
    					});
    				});
    			});
    		});
    	}); 
    });

    // css #tank display:none, .show() jquery
    function tank() {
        $('#tank').show('slow', goTank)
    };

    // animate() #tank width, height and right
    function goTank() {
        $("#tank").animate({width: "+=242px", height: "+=70px"}, 'fast');
        $('#tank').animate({left: '600px'}, 6000, alienDisappear);  
    };

    // animate.css addClass() aliens fade
    function alienDisappear() {
        $('.aliens').addClass('animated fadeOutUp'); 
        $('.aliens').delay(1000).hide('fast', takeOff);  
    };

    // rocketship moves up
    function takeOff() {
        $(".rocket img").animate({marginTop: "-=242px"}, 1000, zoomOut);
    }; 

    // animate.css addClass() rocket ship zooms into space
    function zoomOut() {
         $(".rocket img").addClass('animated zoomOutUp');
    };

});