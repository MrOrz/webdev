var $stack = $('.stack'),
    CLASS_LIST = 'contain-0-items contain-1-items contain-2-items contain-3-items contain-4-items';

var getPlatesFrom = function(stack){
  return $(stack).find('.plate').not('.ui-sortable-helper')
}

var updateClass = function(){
  $stack.removeClass(CLASS_LIST).each(function(){
    var count = getPlatesFrom(this).size();
    $(this).addClass('contain-' + count + '-items');
  });
}

$stack.disableSelection();

$('.plate').mousedown(function(e){
  var $stack = $(this).parent();
  if(! $(this).is($stack.children('.plate:first')) ){
    e.stopPropagation();
  }
})

var isValidSort = false;
$stack.sortable({
  connectWith: '.stack',
  sort: updateClass,
  stop: function(e, ui){
    updateClass();
    if(!isValidSort){
      $(this).sortable('cancel');
      return;
    }
    isValidSort = false;
  },
  receive: function(e, ui){
    ui.item.prependTo($(this));
    isValidSort = true;
    var size = ui.item.data('size'),
        $platesOnNewStack = getPlatesFrom(this);
    if( $platesOnNewStack.size() > 1 &&
        $platesOnNewStack.eq(1).data('size') < size ){
      ui.sender.sortable('cancel');
    }
  },
  placeholder: 'no-space'
});