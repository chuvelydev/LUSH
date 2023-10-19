$(function () {
  $(".burger").on("click", function () {
    $(".burger div:nth-child(1)").toggleClass("on");
    $(".burger div:nth-child(2)").toggleClass("on");
    $(".burger div:nth-child(3)").toggleClass("on");
    $(".drop").toggleClass("on");
  });

//container

  let baseline = -500;
  let con1 = $('.best_con1').offset().top + baseline;
  let con2 = $('.best_con2').offset().top + baseline;
  let con3 = $('.best_con3').offset().top + baseline;
  let li1 =$('.li1').offset().top + baseline;
  let li2 =$('.li2').offset().top + baseline;
  let li3 =$('.li3').offset().top + baseline;
  let li4 =$('.li4').offset().top + baseline;
 

  $(window).on('scroll', function(){
    let scroll = $(this).scrollTop();
   if(con1 < scroll && scroll <= con2){
    $('.best_con1 .title img:first-child').addClass('on');
    setTimeout(function(){
      $('.best_con1 .title img:last-child').addClass('on');
    },500)
    setTimeout(function(){
      $('.best_con1>p').addClass('on');
    },800)
    setTimeout(function(){
      $('.illu').addClass('on');
    },1100)
   }
   if(li1 < scroll){
    $('.best_con1_main .first1').addClass('on')
    setTimeout(function(){
      $('.second .textwrap1').addClass('on')
    },500)
   }
   if(li2 < scroll){
    $('.best_con1_main .first2').addClass('on')
    setTimeout(function(){
      $('.second .textwrap2').addClass('on')
    },500)
   }
   if(li3 < scroll){
    $('.best_con1_main .first3').addClass('on')
    setTimeout(function(){
      $('.second .textwrap3').addClass('on')
    },500)
   }
   if(li4 < scroll){
    $('.best_con1_main .first4').addClass('on')
    setTimeout(function(){
      $('.second .textwrap4').addClass('on')
    },500)
   }
   if(con2 < scroll && scroll <= con3){
    $('.best_con2 .txt').addClass('on')
    $('.best_con2 .imgwrap').css({opacity:"1"})
    $('.best_con2 .con2bg').css({opacity:"0.6"})
   }
   if(con3 < scroll){
    $('.best_con3 .title img:first-child').addClass('on');
    setTimeout(function(){
      $('.best_con3 .title img:last-child').addClass('on');
    },500)
    setTimeout(function(){
      $('.best_con3>p').addClass('on');
    },800)
    setTimeout(function(){
      $('.best_con3 ul').stop().animate({opacity:"1"})
    },1000)
    setTimeout(function(){
      $('.con3store').stop().animate({opacity:"1"})
    },1300)
   }
  });


//con2
$('.imgwrap ul li').on('mouseenter', function(){
  $(this).children('div').css({opacity:"1"})
})

$('.imgwrap ul li').on('mouseleave', function(){
  $(this).children('div').css({opacity:"0"})
})





  
})