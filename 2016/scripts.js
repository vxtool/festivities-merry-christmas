var $Presents = $('#Presents');
var $box = $('.box');
var $PresentB = $('#PresentB');
var $sIcons = $('.sIcon');
var $socialLinkP = $('.socialLinkP');

tlJumpPresent = new TimelineMax({paused: true});

$box.mouseenter(function(){
  var $PresentBox = $(this).find('.PresentBox');
  var $PresentBoxShadow = $(this).find('.PresentBoxShadow');

  tlJumpPresent
  .to($PresentBox, 0.5, {scaleX: 0.8, transformOrigin:"bottom center", y: -20, ease:Power4.easeInOut})
  .to($PresentBox, 0.2, {scaleX: 1, transformOrigin:"bottom center", y: 0, ease:Bounce.easeOut})
  .to($PresentBoxShadow, 0.5, {scaleX: 0.8, transformOrigin:"bottom center", ease:Power4.easeInOut}, "0")
  .to($PresentBoxShadow, 0.2, {scaleX: 1, transformOrigin:"bottom center", ease:Bounce.easeOut}, "0.5");

  tlJumpPresent.play();
});
