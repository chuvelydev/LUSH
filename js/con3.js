$(function () {
  let total = $(".panel1 li").length; // li의 개수
  let i = 0; // 시작 번호가 0번
  let timer;

  start();
  function start() {
    timer = setInterval(function () {
      if (i == total - 1) {
        i = 0;
 
          
      } else {
        i++;
       
 
      }
      $(".panel1 li").fadeOut();
      $(".panel1 li").eq(i).fadeIn();
      $(".innertxt1 li").fadeOut();
      $(".innertxt1 li").eq(i).fadeIn();
    }, 4000);
  }

  $(".nextt").on("click", function () {
    clearInterval(timer);
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }

    $(".panel1 li").fadeOut();
    $(".panel1 li").eq(i).fadeIn();
    $(".innertxt1 li").fadeOut();
    $(".innertxt1 li").eq(i).fadeIn();
    start();
  });

  $(".prevv").on("click", function () {
    clearInterval(timer);
    if (i == 0) {
      i = total - 1;
    } else {
      i--;
    }

    $(".panel1 li").fadeOut();
    $(".panel1 li").eq(i).fadeIn();
    $(".innertxt1 li").fadeOut();
    $(".innertxt1 li").eq(i).fadeIn();
    start();
  });

  $(".innertxt1 li").on("click", function () {
    clearInterval(timer);
    i = $(this).index();
    let j = $(this).hasClass("at");
    if (j == ture) {
      $(".panel1 li").eq(i).fadeIn();
      $(".innertxt1 li").fadeOut();
      $(".innertxt1 li").eq(i).fadeIn();
      start();
    } else {
      $(".panel1 li").fadeOut();
      $(".panel1 li").eq(i).fadeIn();
      $(".innertxt1 li").fadeOut();
      $(".innertxt1 li").eq(i).fadeIn();
      start();
    }
  }); 
});
