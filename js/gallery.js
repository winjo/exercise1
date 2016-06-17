$(function(){
	setInterval(function(){
		var $ul = $(".col-gal ul");
		$ul.animate({top : "-=130"},"slow",function(){
			$(this).find("li:first").appendTo($ul).parent().css("top","5px");
		})
	},2000);
})