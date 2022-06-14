$(document).ready(function () {
	$(".mainMenu > ul > li").mouseenter(function () {
		$(".subMenu").stop().slideDown();
	});
	$(".mainMenu > ul > li").mouseleave(function () {
		$(".subMenu").stop().slideUp();
	});
});
