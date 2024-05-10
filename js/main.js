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
  time: 2000,
});


let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
mybutton.addEventListener("click", backToTop);