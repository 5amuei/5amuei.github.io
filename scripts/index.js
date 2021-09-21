// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
    slideshows.forEach(initSlideShow);
    
function initSlideShow(slideshow) {    
  var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);
  var index = 0, time = 5000;
  slides[index].classList.add('active');
  setInterval( () => {
    slides[index].classList.remove('active');
    index++;
    if (index === slides.length) index = 0;
      slides[index].classList.add('active');
  }, time);
}