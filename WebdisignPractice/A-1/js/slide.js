$(document).ready(function(){
    var i = 0;
    $(".slide > div a").eq(i).addClass('active')
    
    setInterval(function(){
        if ( i < 2 ){
            i += 1
        } else {
            i = 0;
        }
        $(".slide > div a").removeClass('active')
        $(".slide > div a").eq(i).addClass('active')
    }, 3000)

})