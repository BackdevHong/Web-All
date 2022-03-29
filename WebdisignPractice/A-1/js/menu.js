$(document).ready(function(){
   	// 메뉴
	$(".nav > ul").mouseover(function(){
	    $(".Submenu").stop().slideDown(); 
	})
	$(".nav > ul").mouseleave(function(){
		$(".Submenu").stop().slideUp(); 
	})
   	// 슬라이드
})