$(function () {
	var $imgRolls = $("#img-roll div span");
	var len = $imgRolls.length;
	var index = len-1;
	var timer = null;
	$imgRolls.mouseover(function(){
		index = $imgRolls.index(this);
		show(index);
	}).eq(len-1).mouseover();

	$("#img-roll").hover(function(){
		if (timer) {
			clearInterval(timer);
		};
	}, function () {
		timer = setInterval(function(){
			show(index);
			index--;
			if (index<0) {
				index = len-1;
			};
		},3000);
	}).trigger("mouseleave");
})

function show (index) {
	var $tri = $("#img-roll div span .tri");
	var  len = $tri.length;
	
	$("#img-wrap").find("img").eq(index)
					.stop(true, true).fadeIn().siblings().fadeOut();
	$("#img-roll").find("div span").removeClass("chos").css("border-left","1px solid #dadada")
					.eq(index).addClass("chos").prev().css("border-left","none");

	if ($tri.length) {		
			$("#img-roll div span").eq(index).append($tri);
	}
	else {
		
		$("#img-roll div span:last").append("<img src='images/tri.png' class='tri' alt='triangle'/>");
	}
}