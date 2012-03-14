/*global CodeMirror, hljs */
(function($, undefined){
  "use strict";

  // cached DOM elements
  var $sampleContainerSrc = $('<div class="sample-container"></div>'),
      $codeSrc = $('<code contenteditable></code>'),
      $preSrc = $('<pre></pre>'),
      $iframeSrc = $('<div class="iframe"><iframe></iframe></div>'),
      $updateBtnSrc = $('<button>&raquo;</button>');

  // example usage:
  // $('script[type=text/x-sample]').sample();
  //
  // <script> tags within <script type="text/x-sample"> should be written as
  // &lt;script&gt;
  //
  $.fn.sample = function(options){
    // 'this' should be <script> jQuery object
    //

    // method invocation
    if(typeof arguments[0] === 'string'){
      var args = arguments;
      this.each(function(){
        var method = $(this).data('sample')[options];
        method.apply(this, Array.prototype.slice.call(args,1));
      });
      return; // do not execute the init part below
    }

    options = $.extend({
      wrapper: function(lines){ // default wrapper: no-op
        return lines;
      },
      preview: true
    }, options);

    // update Iframe
    var updateIframe = function(iframe, $pre, wrapper, lang){
      if(!options.preview){
        return;
      }
      var doc = iframe.contentDocument, newiframe,
          height = $pre.height() || 200;
      if(!doc){ // if cannot get iframe content, create a new one
        newiframe = $('<iframe></iframe>').insertBefore(iframe).get(0);
        $(iframe).remove();
        iframe = newiframe; doc = iframe.contentDocument;
      }
      doc.open(); doc.writeln( wrapper($pre.text()) ); doc.close();
      $(iframe).height(height);

      // highligt the code
      var $code = $pre.find('code'), ret // get $code to get unhighlighted text
      if(lang){
        ret = hljs.highlight(lang, $code.text());
      }else{
        ret = hljs.highlightAuto($code.text());
      }
      $code.html(ret.value);
      $code.addClass(ret.language)

      return iframe; // return the (possibly new) iframe
    };



    this.each(function(){
      var
      indent = 100, // shortest indent
      lines = $(this).html().split('\n'),// lines of code
      lang = $(this).data('lang');

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
      });

      // remove leading & trailing empty lines
      while(lines[0] === ''){
        lines.shift();
      }
      while(lines[lines.length-1] === ''){
        lines.pop();
      }

      // join lines
      lines = lines.join('\n');

      // substitute escaped <script> and </script> tags
      lines = lines.replace(/&lt;(\/?script.*?)&gt;/g, "<$1>");

      // output stage
      //
      // the container of all the elements, and
      // insert the container below the script tag.
      var $sampleContainer = $sampleContainerSrc.clone()
                                                .addClass(this.className)
                                                .insertAfter(this);

      // append the code and append it to the container.
      var $code = $codeSrc.clone().text(lines),
          $pre = $preSrc.clone().append($code).appendTo($sampleContainer);


      // previewing iframe
      var iframe = $iframeSrc.clone().appendTo($sampleContainer).find('iframe').get(0);
      $(iframe).ready(function(){
        updateIframe(iframe, $pre, options.wrapper, lang);
      });

      // update button
      var $updateBtn = $updateBtnSrc.clone().insertAfter($pre);
      $updateBtn.click(function(){
        // updating iframe and highlight the $pre again
        iframe = updateIframe(iframe, $pre, options.wrapper, lang);
      });


      // intercept scroll within the plugin
      $pre.on('mousewheel DOMMouseScroll', function(e){
        e.stopPropagation();
      });

      // install methods to data('sample')
      $(this).data('sample', {
        update: function(){
          iframe = updateIframe(iframe, $pre, options.wrapper, lang);
        }
      });
    });
  }
}(jQuery));
