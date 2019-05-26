$(function(){

 
    $('.back-top-btn').hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  
        $('.back-top-btn').fadeIn();
      } else {
        $('.back-top-btn').fadeOut();
        
        
      }
      if ($(this).scrollTop()) {  
        $('.header-wrap').css('background-color','#FFF');
      } else {
        $('.header-wrap').css('background-color','rgba(255,255,255,.1');
        $('header a').removeClass('nav_active');
     
      }
    });
  
    $('.back-top-btn').click(function(){
        $('html, body').animate({'scrollTop':0},500);
        $('header a').removeClass('nav_active');
    });

    $('header a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        
        $('html,body').animate({ 
          'scrollTop':position-50
        }, 500);

        $('header a').removeClass('nav_active');
        $(this).addClass('nav_active');

        
    });

    $('.sp_menu-label').click(function(){
      $('.scroll').addClass('scroll_active');
    
  });  
    $('.sp_menu-label-bg').click(function(){
      $('.scroll').removeClass('scroll_active');
  });  

    $('.sp_menu-content-nav__item').click(function(){
      $('.scroll').removeClass('scroll_active');
      $('.sp_menu-check').prop('checked',false);
  });  

  });