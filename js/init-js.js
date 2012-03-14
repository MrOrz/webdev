(function($){
  "use strict";
  var demoWrapper = function(data){
    return '<body><form id="submitform" action="sample/back.html"><input id="tos" name="tos" type="checkbox">' +
           '<label for="tos">我已詳閱並接受<a href="http://zh.wikipedia.org/zh-tw/%E5%87%BA%E5%B8%AB%E8%A1%A8">前出師表</a>。</label>' +
           '<input type="submit" value="送出">' +
           '</form><script type="text/javascript">' + data + '</script></body>';
  },

  domDemoWrapper = function(data){
    return [
      '<form id="submitform" action="sample/back.html">',
      '<p>推薦其他人給後主： <a href="javascript:;" class="add-referral">增加推薦人</a></p>',
      '<div id="referrals">',
      '</div>',
      '<input id="tos" name="tos" type="checkbox">',
      '<label for="tos">',
        '我已詳閱並接受<a href="http://zh.wikipedia.org/zh-tw/%E5%87%BA%E5%B8%AB%E8%A1%A8">前出師表</a>。',
      '</label>',
      '<input type="submit" value="上書">',
      '</form>',
      data
    ].join('');
  },

  domjQueryWrapper = function(data){
    return domDemoWrapper([
      '<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>',
      '<script type="text/javascript">',
      data,
      '</script>'
    ].join(''));
  },

  domNativeWrapper = function(data){
    return domDemoWrapper('<script type="text/javascript">' + data + '</script>');
  },
  
  jQueryAPIWrapper = function(data){
    return [
      // TODO: determine the DOM
      '<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>',
      '<script ty[e="text/javascript">',
      data,
      '</script>'
    ].join('');
  };

  $('script[type="text/x-sample"]').each(function(){
    var $this = $(this), option = {};
    if($this.hasClass('nopreview')){
      option.preview = false;
    }
    if($this.hasClass('demo')){
      option.wrapper = demoWrapper;
    }else if($this.hasClass('demo-dom-native')){
      option.wrapper = domNativeWrapper;
    }else if($this.hasClass('demo-dom-jquery')){
      option.wrapper = domjQueryWrapper;
    }else if($this.hasClass('jquery')){
      option.wrapper = jQueryAPIWrapper;
    }

    $this.sample(option);
  });

}(jQuery));
