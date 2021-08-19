window.onscroll = function () {
  // show or hide the back-top-top button
  var backToTo = document.querySelector(".back-to-top");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      backToTo.style.display = "block";
  } else {
    backToTo.style.display = "none";
  }
};








