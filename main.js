function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
  document.getElementById('overflow').scrollLeft += 350;
};
buttonLeft.onclick = function () {
  document.getElementById('overflow').scrollLeft -= 350;
};