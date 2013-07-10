(function(Reveal, document, undefined){
  function embed(link) {
    var iframe = document.createElement('iframe'),
        resize = document.createElement('div');
    iframe.src = link.href;
    iframe._src = link.href; // support for google slide embed
    iframe.className = 'jsbin-embed';
    iframe.style.border = '1px solid #aaa';
    iframe.style.width = '100%';
    iframe.style.minHeight = '300px';
    link.parentNode.replaceChild(iframe, link);

    var onmessage = function (event) {
      event || (event = window.event);
      iframe.style.height = event.data.height + 'px';
    };

    if (window.addEventListener) {
      window.addEventListener('message', onmessage, false);
    } else {
      window.attachEvent('onmessage', onmessage);
    }
  }

  // Hook link-parsing to Reveal slidechanged events.
  Reveal.addEventListener( 'slidechanged', function( event ) {
    var i, links = event.currentSlide.querySelectorAll('a.jsbin-embed');

    for(i=0; i<links.length; ++i){
      embed(links[i]);
    }
  } );
}(Reveal, document));