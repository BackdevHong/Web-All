$(document).ready(function () {
    $(".menu > ul > li").mouseover(function () {
        $(".submenu > li").stop().slideDown();
        $("#menuwrap").stop().animate({ height: "220px" });
    })
    $(".menu").mouseleave(function () {
        $(".submenu > li").stop().slideUp();
        $("#menuwrap").stop().animate({ height: "100px" });
    })
    $(".announce").mouseover(function(){
        $(".announce div").stop().removeClass("ann")
        $(".announce div").stop().addClass("ann2")
        $(".gal div").stop().removeClass("ann2")
        $(".gal div ").stop().addClass("ann")
    })
    $(".gal").mouseover(function(){
        $(".announce div").stop().removeClass("ann2")
        $(".announce div").stop().addClass("ann")
        $(".gal div").stop().removeClass("ann")
        $(".gal div ").stop().addClass("ann2")
    })
})