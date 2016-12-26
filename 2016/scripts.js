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

$box.click(function(event){
  event.preventDefault();

  var $thisBox = this;
  var $PresentBoxRibbon = $(this).find('.PresentBoxRibbon');
  var $PresentBoxTop = $(this).find('.boxTop');
  var $PresentBoxTopShadow = $(this).find('.boxTopShadow');
  var $PresentRibbonSide = $(this).find('.ribbonSide');
  var $socialLinkP = $(this).find('.socialLinkP');

  tlOpenPresent = new TimelineMax({paused: true});
  tlOpenPresent
  .to($PresentBoxRibbon, 0.4, {yPercent: 252, ease:Power4.easeInOut})
  .to($PresentBoxTop, 0.4, {yPercent: -80, ease:Power4.easeOut}, "0")
  .to($PresentBoxTopShadow, 0.2, {autoAlpha: 0}, "0")
  .to($PresentRibbonSide, 0.4, {scaleY: 0.3, transformOrigin:"bottom center", onComplete: stopHover, onCompleteParams: [$thisBox]}, "0.2")

  .to($PresentBoxTop, 0.4, {rotation: -90, transformOrigin:"left center", ease:Power4.easeInOut}, "0")
  .to($PresentBoxTop, 0.3, {yPercent: 400, transformOrigin:"left center", ease:Bounce.easeOut}, "0.4")
  .to($PresentBoxTop, 0.4, {rotation: -180, transformOrigin:"left center", ease:Power4.easeIn}, "0.7")
  .to($socialLinkP, 0.6, {scale: 1.4, yPercent: -260, transformOrigin:"top center", ease:Power4.easeInOut}, "-=0.4");

  tlOpenPresent.play();

  function stopHover(element){
    $(element).unbind('mouseenter click');
    $(element).css('cursor: default');
  }
});
