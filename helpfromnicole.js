$(".rocket img").animate({marginTop: "350px"}, 5000, stepOne);

function stepOne() {
	$("#alien4").show('slow', stepTwo);
}

function stepTwo() {
	$("#alien3").show('slow', stepThree);
}

function 

$(".rocket img").animate({marginTop: "350px"}, 5000, function() {
        for (var i = 0; i<4; i++) {
            $(".aliens img").eq(i).delay(5000 * i).show(5000);
        }