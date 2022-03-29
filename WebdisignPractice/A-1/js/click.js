$(document).ready(function(){
    $(".not_gal > h3").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(this).next("ul").addClass("on");
    })
    $(".not_gal > ul.notice.on > li").eq(0).click(function(){
        $(".model").addClass("on").removeClass("off");
    })
    $(".close").click(function(){
        $(".model").addClass("off").removeClass("on");
    })
})