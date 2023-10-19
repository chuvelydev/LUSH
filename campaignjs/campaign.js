$(function () {
  $(".burger").on("click", function () {
    $(".burger div:nth-child(1)").toggleClass("on");
    $(".burger div:nth-child(2)").toggleClass("on");
    $(".burger div:nth-child(3)").toggleClass("on");
    $(".drop").toggleClass("on");
  });
  // con1
  // con1
  // con1
  $(".cardbox1 .turn").on("click", function () {
    $(".cardbox1").addClass("on");
  });
  $(".cardbox1 .turn1").on("click", function () {
    $(".cardbox1").removeClass("on");
  });

  $(".cardbox2 .turn").on("click", function () {
    $(".cardbox2").addClass("on");
  });
  $(".cardbox2 .turn1").on("click", function () {
    $(".cardbox2").removeClass("on");
  });

  $(".cardbox3 .turn").on("click", function () {
    $(".cardbox3").addClass("on");
  });
  $(".cardbox3 .turn1").on("click", function () {
    $(".cardbox3").removeClass("on");
  });

  // con2
  // con2
  // con2
  let span1 = document.querySelector(".span1"),
    span2 = document.querySelector(".span2"),
    span3 = document.querySelector(".span3");
  i1 = 0;
  i2 = 0;
  i3 = 0;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 1680) {
      console.log(window.scrollY);
      setInterval(function () {
        if (i1 <= 48) {
          span1.innerText = i1;
          i1++;
        }
        if (i2 <= 630) {
          span2.innerText = i2;
          i2 = i2 + 15;
        }
        if (i3 <= 275) {
          span3.innerText = i3;
          i3 = i3 + 5;
        }
      }, 500);
    }
  });

  // con3
  // con3
  // con3

  // con4
  // con4
  // con4

  let i = 0;
  let total = $(".slide li").length;
  //console.log(total)

  //자동넘김
  let timer = setInterval(start, 3000);

  // 앞으로 슬라이드 함수
  $(".navi div").eq(0).addClass("on");
  function start() {
    i++;
    $(".navi div").removeClass("on");
    if (i == total - 1) {
      $(".slide")
        .stop()
        .animate({ marginLeft: "-600%" }, function () {
          $(".slide").css({ marginLeft: "0" });
        });
      i = 0;
      $(".navi div").eq(i).addClass("on");
    } else {
      $(".slide")
        .stop()
        .animate({ marginLeft: `${-i * 100}%` });
      $(".navi div").eq(i).addClass("on");
    }
  }

  // 네비버튼 클릭시 이벤트
  $(".navi div ").click(function () {
    clearInterval(timer);
    i = $(this).index();
    //console.log(i);
    $(".navi div").removeClass("on");
    $(this).addClass("on");

    $(".slide")
      .stop()
      .animate({ marginLeft: `${-i * 100}%` });
    timer = setInterval(start, 3000);
  });
});

let base = -450;
$(window).on("scroll", function () {
  // let visual = $("#visual").offset().top;
  let con1 = $(".con1").offset().top + base;
  let con2 = $(".con2").offset().top + base;
  let con3 = $(".con3").offset().top + base;
  let con4 = $(".con4").offset().top + base;
  let scroll = $(this).scrollTop();
  console.log(scroll);

  // con1
  // con1
  // con1

  if (scroll >= con1 && scroll < con2) {
    $(".con1 ul").addClass("on");
    $(".con1 .text").addClass("on");
  }

  // con2
  // con2
  // con2

  if (scroll >= con2 && scroll < con3) {
    $(".con2 ul").addClass("on");
    $(".con2 .text1").addClass("on");
  }

  // con3
  // con3
  // con3

  if (scroll >= con3 && scroll < con4) {
    $(".con3 ul").addClass("on");
    $(".con3 .text1").addClass("on");
  }
  // con4
  // con4
  // con4

  if (scroll >= con4) {
    $(".con4 .section").addClass("on");
    $(".con4 .box").addClass("on");
    $(".con4 .text1").addClass("on");
  }
});
