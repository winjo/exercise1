$(function(){	
	$(".dynamic").find("a").hover(function(){
		var lWidth = $(this).parents("li").width();
		var sWidth = $(this).find("span").width();
		var dist = lWidth-sWidth;
		if (dist > 0) { dist = 0;};
		var time = -30*dist;

		$("span", this).animate({left : dist+""}, time);
	}, function(){
		$("span", this).stop().css("left", 0);
	})
})