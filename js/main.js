window.addEventListener("load", function (){
    setInterval(function() {
    
        const preloader = document.querySelector(".preloader");
       preloader.className += " hidden";
      }, 1500)                  
 });
 

$(window).on('scroll', function(){

    if($(window).scrollTop() > 160){
        $('nav').addClass('black');
    }else{
        $('nav').removeClass('black');
    }

})




$(window).scroll(function(){
    
    var wScroll = $(this).scrollTop();
    
    
    $('h1').css({
        'transform' : 'translate(0px,'+ wScroll /2 +'%)'
    });


    if (wScroll > $('.tanulmanyok').offset().top - ($(window).height() / 1.2)) {
        
        $('.tanulmanyok figure').each(function(i){

            setTimeout(function(){
                $('.tanulmanyok figure').eq(i).addClass('mutat');
            }, 150 * (i+1));
            

        });

    }
    if (wScroll > $('.card').offset().top - $(window).height()) {


        var offset = (Math.min(0, wScroll- $('.card').offset().top + $(window).height() - 350)).toFixed();  // éppen scrollolt magasság - card magassága + képernyő magasság - 350


        $('.card-1').css({
            'transform' : 'translate('+ offset +'px, '+ Math.abs(offset * 0.3) +'px)'
        }); 

        $('.card-3').css({
            'transform' : 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset *0.3) +'px)'
        }); 
    }
    
}); 

