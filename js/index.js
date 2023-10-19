$(function () {
  $(".burger").on("click", function () {
    $(".burger div:nth-child(1)").toggleClass("on");
    $(".burger div:nth-child(2)").toggleClass("on");
    $(".burger div:nth-child(3)").toggleClass("on");
    $(".drop").toggleClass("on");
  });

  $(function () {
    //Visual//

    var total = $(".panel_1 img").length;
    var i = 0;
    var wid = 2000;
    start();

    function start() {
      $(".first").text(`0${i + 1}`);
      $(".last").text(`0${total - 1}`);
      $(".panelTitle").eq(i).addClass("on"); //
      timer = setInterval(function () {
        i++;
        if (i == total - 1) {
          $(".panel")
            .stop()
            .animate({ left: "-6000px" }, function () {
              $(".panel").css({ left: "0" });
            });
          i = 0;
        } else {
          $(".panel")
            .stop()
            .animate({ left: -i * wid });
        }
        $(".panelTitle").eq(i).addClass("on");
        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");
      }, 3000);
    }

    $(".next").on("click", function () {
      clearInterval(timer);
      i++;
      if (i == total - 1) {
        $(".panel")
          .stop()
          .animate({ left: "-6000px" }, function () {
            $(".panel").css({ left: "0" });
          });
        i = 0;
      } else {
        $(".panel")
          .stop()
          .animate({ left: -i * wid });
      }
      $(".panelTitle").eq(i).addClass("on");
      $(".navi li").removeClass("on");
      $(".navi li").eq(i).addClass("on");
      start();
    });

    $(".prev").on("click", function () {
      clearInterval(timer);
      i--;
      if (i < 0) {
        $(".panel").css({ left: "-6000px" });
        $(".panel").stop().animate({ left: "-4000px" });
        i = 2;
      } else {
        $(".panel")
          .stop()
          .animate({ left: -i * wid });
      }
      $(".panelTitle").eq(i).addClass("on");
      $(".navi li").removeClass("on");
      $(".navi li").eq(i).addClass("on");
      start();
    });

    $(".navi li").on("click", function () {
      clearInterval(timer);
      i = $(this).index();
      $(".panel")
        .stop()
        .animate({ left: -i * wid });
      $(".panelTitle").addClass("on");
      $(".navi li").removeClass("on");
      $(".navi li").eq(i).addClass("on");
      start();
    });
  });
});

//Scroll//

$(function () {
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
