$(function () {
  $(".burger").on("click", function () {
    $(".burger div:nth-child(1)").toggleClass("on");
    $(".burger div:nth-child(2)").toggleClass("on");
    $(".burger div:nth-child(3)").toggleClass("on");
    $(".drop").toggleClass("on");
  });
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

  //Scroll//

  let baseline = -200;
  let baseline2 = -500;

  let con1 = $(".con1").offset().top + baseline;
  let con2 = $(".con2").offset().top + baseline;
  let con3 = $(".con3").offset().top + baseline;
  let con4 = $(".con4").offset().top + baseline2;
  let con5 = $(".con5").offset().top + baseline2;

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();

    if (scroll > con1) {
      $(".txtbox").addClass("show");
      $(".imgbox").addClass("hide");
    }
    if (scroll > con2) {
      $(".title").addClass("show");

      $("video").addClass("show");
    }
    if (scroll > con3) {
      $(".slide1").addClass("show");

      $(".panel1").addClass("show");
    }
    if (scroll > con4) {
      $(".serviceul").addClass("show");

      $(".service").addClass("show");
    }
    if (scroll > con5) {
      $(".c5-wrap").addClass("show");
    }
  });
});
