$(document).ready(function(){
    $('.announce > ul > li > a').eq(0).click(function(){
        $(".model").attr("id", "active")
        model();
    })

    $('.model > button').click(function(){
        $(".model").attr("id", "hide")
        $("#mask").hide()
    })
})

function model(){
    var width = $(document).width();
    var height = $(document).height();

    $("#mask").css({'width' : width, 'height' : height})
    $('#mask').fadeTo("fast",0.8)
}