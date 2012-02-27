/*global CodeMirror, hljs */
(function($, undefined){
  "use strict";

  // cached DOM elements
  var $sampleContainerSrc = $('<div class="sample-container"></div>'),
      $codeSrc = $('<code contenteditable></code>'),
      $preSrc = $('<pre></pre>'),
      $iframeSrc = $('<div class="iframe"><iframe height="100%"></iframe></div>');

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

      // join lines
      lines = lines.join('\n');


      // output stage
      //
      // the container of all the elements
      var $sampleContainer = $sampleContainerSrc.clone();

      // append the code and append it to the container.
      var code = $codeSrc.clone().text(lines);
      $preSrc.clone().append(code).appendTo($sampleContainer);

      // highligt the code
      hljs.highlightBlock(code.get(0));

      var iframe = $iframeSrc.clone().appendTo($sampleContainer).find('iframe').get(0);
      $(iframe).ready(function(){
        var doc = iframe.contentDocument;
        doc.open(); doc.writeln(lines); doc.close();
      });

      // finally, insert the container below the script tag.
      $sampleContainer.insertAfter(this);
    });
  }
}(jQuery));