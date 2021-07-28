$(window).scroll(function() {
  // Get scroll position
  var s = $(window).scrollTop(),
  // scroll value and opacity
  opacityVal = (s / 150.0);
  // opacity value 0% to 100%
  $('.blurred-img').css('opacity', opacityVal);
});

/* -------------------------------- Parallax -------------------------------- */

function parallax() {
  window.onscroll = function() {
    var speed = 5.0;
    document.body.style.backgroundPosition = (-window.pageXOffset/speed)+"px "+(-window.pageYOffset/speed)+"px";
  }
}

parallax();