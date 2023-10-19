$(function () {
  //Visual//
  let total = $(".slide li").length;

  let i = 1;
  let timer;

  start();
  //slide img
  function start() {
    timer = setInterval(function () {
      if (i == 4) {
        i = 1;
      } else {
        i++;
      }
      $(".slide li").eq(i).fadeIn();
      for (let j = 1; j < 5; j++) {
        if (i != j) {
          setTimeout(function () {
            $(".slide li").eq(j).fadeOut();
          }, 300);
        }
      }
    }, 2500); //초
  }

  //다음
  $(".next").on("click", function () {
    clearInterval(timer);
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    $(".slide li").eq(i).fadeIn();
    for (let j = 1; j < 5; j++) {
      if (i != j) {
        setTimeout(function () {
          $(".slide li").eq(j).fadeOut();
        }, 300);
      }
    }

    start();
  });

  //이전
  $(".prev").on("click", function () {
    clearInterval(timer);
    console.log(i);
    if (i == 0) {
      i = 4;
    } else {
      i--;
    }

    $(".slide li").eq(i).fadeIn();
    for (let j = 1; j < 5; j++) {
      if (i != j) {
        setTimeout(function () {
          $(".slide li").eq(j).fadeOut();
        }, 300);
      }
    }

    start();
  });

  //container 1//
});
