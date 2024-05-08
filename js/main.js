new WOW().init();

$(window).scroll(function () {
  if ($(this).scrollTop() > 30) {
    $(".navbar").addClass("sticky-top shadow-sm");
  } else {
    $(".navbar").removeClass("sticky-top shadow-sm");
  }
});



$('[data-toggle="counter-up"]').counterUp({
  delay: 5,
  time: 1000
});
