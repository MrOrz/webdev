(function(){
  "use strict";
  var $ruler = $('<div id="ruler"><span class="text"></span></div>').draggable().resizable().appendTo('body'),
      $text = $ruler.find('.text');
  $ruler.on('resize', function(e, ui){
    $text.css('line-height', $ruler.innerHeight() + 'px');
    $text.text($ruler.outerWidth() + ' x ' + $ruler.outerHeight());
  });
}());