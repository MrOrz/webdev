(function($, undefined){
  "use strict";

  // string manipulations methods
  // <p> --escape--> &lt;p&lgt; --unescape--> <p>

  // use DOM createElement() instead of $('<div/>') to prevent the script
  // within the string from executed.
  // Ref: http://stackoverflow.com/questions/1912501/unescape-html-entities-in-javascript
  var codingDiv = document.createElement('div');
  String.prototype.unescape = function(){
    codingDiv.innerHTML = this;
    return codingDiv.childNodes.length === 0 ? "" :
      codingDiv.childNodes[0].nodeValue;
  }
  String.prototype.escape = function(){
    return $(codingDiv).text(this).html();
  };

  // example usage:
  // $('script[type=text/x-sample]').sample();
  //
  $.fn.sample = function(){
    // 'this' should be <script> jQuery object
    //
    this.each(function(){
      var
      indent = 100, // shortest indent
      lines = $(this).html().split('\n'); // lines of code

      // finding indent
      $.each(lines, function(){
        var space = this.search(/[^ ]/);
        if(space>0){
          indent = Math.min(space, indent);
        }
      });

      // removing indent & empty lines
      lines = $.map(lines, function(l){
        return l.substr(indent);
      }).filter(function(l){
        return l.length > 0;
      });

      // join linesem
      lines = lines.join('\n');

      // output code
      var code = $('<code></code>').append(lines.escape());
      $('<pre></pre>').append(code).insertAfter(this);
    });
  }
}(jQuery));