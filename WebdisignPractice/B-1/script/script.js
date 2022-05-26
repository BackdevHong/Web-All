$(document).ready(function () {
	$(".mainMenu > li").mouseenter(function () {
		$(".subMenu").stop().slideDown();
	});
	$(".mainMenu > li").mouseleave(function () {
		$(".subMenu").stop().slideUp();
	});
});
