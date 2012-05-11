(function(){
  "use strict";

  var $list = $('ul'),
  // make an <li> element
  makeItem = function(text){
    var $li = $('<li><input type="text"><span></span></li>');
    if(text){
      $li.find('input').val(text);
      $li.find('span').text(text);
    }
    return $li;
  },
  saveItems = function(){
    var data = [];
    $list.find('li').each(function(){
      data.push( $(this).find('span').text() );
    });
    localStorage.list = JSON.stringify(data);
  };

  // change to sortable in ONE SECOND
  $list.sortable();

  // save item after sort
  $list.on('sortstop', saveItems);

  // initialize dialog
  $('#remove-all-dialog').dialog({
    autoOpen: false,
    resizable: false,
    modal: true,
    buttons: {
      "Yes": function(){
        $list.empty();
        saveItems();
        $(this).dialog('close');
      },
      "Cancel": function(){
        $(this).dialog('close');
      }
    }
  });

  // load from localStorage
  if(localStorage.list){
    $.each(JSON.parse(localStorage.list), function(){
      makeItem(this).appendTo($list);
    });
  }

  // event handlers
  $('.add-item').click(function(){
    var $li = makeItem().addClass('editing').prependTo($list);
    $li.find('input').focus();
  });

  $('.remove-all-items').click(function(){
    $('#remove-all-dialog').dialog('open');
  });

  $list.on('keypress', 'input', function(e){
    var $li;
    if(e.which === 13){
      $li = $(this).parents('li');
      $li.find('span').text($li.find('input').val());
      $li.removeClass('editing');

      // save into localStorage
      saveItems();
    }
  });

}(jQuery));
