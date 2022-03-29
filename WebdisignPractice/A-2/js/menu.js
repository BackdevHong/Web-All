$(document).ready(function () {
    $(".menu > ul > li").mouseover(function () {
        $(".submenu > li").stop().slideDown();
        $("#menuwrap").stop().animate({ height: "220px" });
    })
    $(".menu").mouseleave(function () {
        $(".submenu > li").stop().slideUp();
        $("#menuwrap").stop().animate({ height: "100px" });
    })
})