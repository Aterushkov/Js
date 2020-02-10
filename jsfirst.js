// html button
// <i class="fa fa-angle-double-down white-body p-2 m-2 bg-white border-all col-1 one-down one-down-icon shadow"></i> 

// html point
// <p class="thisOneDown"></p>

// js code

function letsDown() {

$('.one-down').on('click', function() {

  //this scroll withour animations in chrome
  $('.thisOneDown').get(0).scrollIntoView({
	block: "start",
	behavior: "smooth"
  });

});


function scrollToElement(element, parent) {
  $(parent)[0].scrollIntoView(true);
  $(parent).animate({
	scrollTop: $(parent).scrollTop() + $(element).offset().top - $(parent).offset().top
  }, {
	duration: 'slow',
	easing: 'swing'
  });
}

}
setTimeout(letsDown, 1000);