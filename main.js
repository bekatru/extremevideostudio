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

$(document).ready(function(){
  $('.single-item').slick({
    prevArrow:"<img class='a-left control-c prev slick-prev' src='assets/btns/left.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='assets/btns/right.png'>"
  });
});