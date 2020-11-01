
function togglePopup(){
  document.getElementById("popup").classList.toggle("active");
}

const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
  document.getElementById('overflow').scrollLeft += 876;
};
buttonLeft.onclick = function () {
  document.getElementById('overflow').scrollLeft -= 876;
};

$(".js-modal-btn").modalVideo();

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$( '.navbar-nav a' ).on( 'click', function () {
	$( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});