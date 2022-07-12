$(function(){
    $(window).scroll(function(){
        var fixed = $(this).scrollTop()
        if(fixed > 50){
            $(".sub-navbar").addClass("sticky-menu")
        }
        else{
            $(".sub-navbar").removeClass("sticky-menu")
        }
    })
})