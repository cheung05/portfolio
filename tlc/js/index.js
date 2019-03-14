$(function(){

    resizeKv();
    
    $(window).resize(function(e){
        resizeKv();
    });

    $(".carousel").swiperight(function(e) {
        $(this).carousel('prev');
    });
    $(".carousel").swipeleft(function(e) {
        $(this).carousel('next');
    });

});

function resizeKv(){
    var x=window.innerWidth;
    if(x<768)
    {   
        $('.item_img').each(function(index, el) {
            $(this).find('img').attr('src', $(this).data('mobile'));
        });
    }else{
        $('.item_img').each(function(index, el) {
            $(this).find('img').attr('src', $(this).data('pc'));
        });
    }
}