

$(document).ready(function() {

    $(".rocket img").animate({left: "+=1000"}, 5000, function() {
    
	    $(".rocket img").css({
	    	 transform: ' rotateZ(-58deg)',
			 MozTransform: ' rotateZ(-58deg)',
			 WebkitTransform: ' rotateZ(-58deg)',
			 msTransform: ' rotateZ(-58deg)',
			 transition:'transform 1s'
			});
    });

    
    $(".rocket img").animate({marginTop: "350px"}, 5000, function() {
    //     for (var i = 0; i<4; i++) {
    //         $(".aliens img").eq(i).delay(5000 * i).show(5000);
    //     }

    	$("#alien4").show('slow', function() {
    		$("#alien3").show('slow', function() {
    			$("#alien2").show('slow', function() {
    				$("#alien1").show('slow', function() {
                        $('aliens').css('text-align', 'left');

                        
    					$('.aliens').animate({right: "1050px"}, 5000, function() {
    						$('#alien4').fadeOut('fast', function() {
    							 $('#alien3').fadeOut('fast', function() {
                                    $('#alien2').fadeOut('fast', function() {
                                        $('#alien1').fadeOut('fast', function() {
                                            $('#alien1').delay(5000).fadeIn().animate({left: "1050px"}, 5000, function() {
                                                $('#alien2').fadeIn().animate({left: "1050px"}, 5000, function() {
                                                    $('#alien3').fadeIn().animate({left: "1050px"}, 5000, function() {
                                                        $('#alien4').fadeIn().animate({left: "1050px"}, 5000, function() {

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
    });

   


        
});