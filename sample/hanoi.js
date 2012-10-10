var $stack = $('.stack'),
    CLASS_LIST = 'contain-0-items contain-1-items contain-2-items contain-3-items contain-4-items';

var getPlatesFrom = function(stack){
  return $(stack).find('.plate').not('.ui-sortable-helper')
}

var update = function(){
  $stack.removeClass(CLASS_LIST).each(function(){
    var count = getPlatesFrom(this).size();
    $(this).addClass('contain-' + count + '-items');
  });
}

$('.plate').mousedown(function(e){
  var $stack = $(this).parent();
  if(! $(this).is($stack.children('.plate:first')) ){
    e.stopImmediatePropagation();
  }
})

$stack.sortable({
  connectWith: '.stack',
  sort: update,
  stop: update,
  receive: function(e, ui){
    ui.item.prependTo($(this));

    var size = ui.item.data('size'),
        $platesOnNewStack = getPlatesFrom(this);
    if( $platesOnNewStack.size() > 1 &&
        $platesOnNewStack.eq(1).data('size') < size ){
      $(ui.sender).sortable('cancel');
    }
    update();
  },
  placeholder: 'no-space'
});

$stack.disableSelection();