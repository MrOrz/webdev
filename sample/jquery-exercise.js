(function(){
  "use strict";

  var
  $list = $('ul'),

  // make an <li> element with specified text
  makeItem = function(text){
    var $li = $('<li><input type="text"><span></span></li>');
    if(text){
      $li.find('input').val(text);
      $li.find('span').text(text);
    }
    return $li;
  };

  // load data from localStorage
  if(localStorage.list){
    $.each(JSON.parse(localStorage.list), function(){
      makeItem(this).appendTo($list);
    });
  }

  // event handlers
  $('button').click(function(){
    var $li = makeItem().addClass('editing').prependTo($list);
    $li.find('input').focus();
  });

  $list.on('keypress', 'input', function(e){
    var $li, data;

    // when Enter is pressed, e.which === 13
    if(e.which === 13){

      // `this` is the <input>
      $li = $(this).parents('li');
      $li.find('span').text($li.find('input').val());
      $li.removeClass('editing');

      // save into localStorage
      data = [];
      $list.find('li').each(function(){
        data.push( $(this).find('span').text() );
      });
      localStorage.list = JSON.stringify(data);
    }
  });
}(jQuery));
