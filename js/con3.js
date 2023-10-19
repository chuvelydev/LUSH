$(function () {
  let total = $(".panel1 li").length; // li의 개수
  let o = 0; // 시작 번호가 0번
  let timer;

  start();
  function start() {
    timer = setInterval(function () {
      if (o == total - 1) {
        o = 0;
      } else {
        o++;
      }
      $(".panel1 li").fadeOut();
      $(".panel1 li").eq(o).fadeIn();
      $(".innertxt1 li").fadeOut();
      $(".innertxt1 li").eq(o).fadeIn();
    }, 4000);
  }

  $(".nextt").on("click", function () {
    clearInterval(timer);
    if (o == total - 1) {
      o = 0;
    } else {
      o++;
    }

    $(".panel1 li").fadeOut();
    $(".panel1 li").eq(o).fadeIn();
    $(".innertxt1 li").fadeOut();
    $(".innertxt1 li").eq(o).fadeIn();
    start();
  });

  $(".prevv").on("click", function () {
    clearInterval(timer);
    if (o == 0) {
      o = total - 1;
    } else {
      o--;
    }

    $(".panel1 li").fadeOut();
    $(".panel1 li").eq(o).fadeIn();
    $(".innertxt1 li").fadeOut();
    $(".innertxt1 li").eq(o).fadeIn();
    start();
  });

  $(".innertxt1 li").on("click", function () {
    clearInterval(timer);
    o = $(this).index();
    let j = $(this).hasClass("at");
    if (j == ture) {
      $(".panel1 li").eq(o).fadeIn();
      $(".innertxt1 li").fadeOut();
      $(".innertxt1 li").eq(o).fadeIn();
      start();
    } else {
      $(".panel1 li").fadeOut();
      $(".panel1 li").eq(o).fadeIn();
      $(".innertxt1 li").fadeOut();
      $(".innertxt1 li").eq(o).fadeIn();
      start();
    }
  });
});
