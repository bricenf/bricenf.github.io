var touch = Modernizr.touch;
$('.img-holder').imageScroll({
  imageAttribute: (touch === true) ? 'image-mobile' : 'image',
  touch: touch
});
