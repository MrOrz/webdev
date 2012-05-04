(function(){
  var $list = $('ul');

  $('button').click(function(){
    var $li = $('<li><input type="text"><span></span></li>').addClass('editing').prependTo($list);
    $li.find('input').focus();
  });

  $list.on('keypress', 'input', function(e){
    var $li;
    if(e.which === 13){
      $li = $(this).parents('li');
      $li.find('span').text($li.find('input').val());
      $li.removeClass('editing');
    }
  });
}(jQuery));
