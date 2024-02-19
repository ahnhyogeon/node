$('.tabcontent').eq(0).show();
$(function(){
    $('.tablinks').click(function(e){
        e.preventDefault(); //기능을 정지합니다.
        $('.tabcontent').hide();
        $('.tablinks').removeClass('active');
        $(this).addClass('active');
        const cityName = $(this).attr("href");
        $(cityName).show();

    })
});

$(function(){
    $('.menu').hover(function(){
        $(this).find('.sub-nav').stop().slideToggle();
    });
});