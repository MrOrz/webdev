// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,

  // Optional libraries used to extend on reveal.js
  dependencies: [
    { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    // { src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
    { src: 'plugin/search/search.js', async: true, condition: function() { return !!document.body.classList; } }
    // { src: 'plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } }
  ]
});

// Toggle RevealSearch show/hide.
Reveal.addEventListener( 'overviewshown', function( event ) { RevealSearch.open() } );
Reveal.addEventListener( 'overviewhidden', function( event ) { RevealSearch.close() } );
