
$(window).scroll(function () {
  if ($(this).scrollTop() > 30) {
    $(".navbar").addClass("sticky-top shadow-sm");
  } else {
    $(".navbar").removeClass("sticky-top shadow-sm");
  }
});
