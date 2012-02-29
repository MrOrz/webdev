/*global Reveal, hljs */
/* handles URL query, initialize Reveal and $.sample */
(function($, undefined){
  "use strict";

  // Find slide id
  var slideId = location.search.replace('?',''),
      $targetSlide,
      $targetSlideParent;

  if(slideId && $('section#'+slideId)){
    $targetSlide = $('section#'+slideId);
    $targetSlideParent = $targetSlide.parent();
    slideId = $.inArray($targetSlide.get(0), $targetSlideParent.children());

    // vertical slide
    if($targetSlideParent.is('section')){
      location.hash = '#/' + $.inArray($targetSlideParent.get(0),
                                       $targetSlideParent.parent().children()) + '/' + slideId;
    }else{ // normal horizontal slide
      location.hash = '#/' + slideId;
    }

    location.search = ''; // clear search
  }


  // initialize Reveal
  Reveal.initialize({
    // Display controls in the bottom right corner
    controls: true,

    // Display a presentation progress bar
    progress: true,

    // If true; each slide will be pushed to the browser history
    history: true,

    // Flags if mouse wheel navigation should be enabled
    mouseWheel: true,

    // Apply a 3D roll to links on hover
    rollingLinks: true,

    // UI style
    theme: 'default', // default/neon

    // Transition style
    transition: 'default', // default/cube/page/concave/linear(2d)

    update: function(indexh, indexv){
      // update sample code so that 'height' of iframe is correct
      $('section.present').not('.stack').find('script[type="text/x-sample"]').sample('update');
    }
  });

}(jQuery));