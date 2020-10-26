window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navigations");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function togglePopup(){
  document.getElementById("popup").classList.toggle("active");
}

const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
  document.getElementById('overflow').scrollLeft += 350;
};
buttonLeft.onclick = function () {
  document.getElementById('overflow').scrollLeft -= 350;
};

