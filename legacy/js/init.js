$('script[type="text/x-sample"]').not('.reset').sample();
$('script.reset').sample({
  wrapper: function(data){
    return '<head><link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.4.1/build/cssreset/cssreset-min.css"></head><body>' + data + '</body>'
  }
});
