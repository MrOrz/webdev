Media Query
------------

給不同 device 不同的 CSS

[[mrorz-css-mediaquery-print]]

實例：[履歷](http://mrorz.github.io/)、[Web Designer Wall 精選](http://webdesignerwall.com/tutorials/css3-media-queries)

---

螢幕寬度
------

[[mrorz-css-mediaquery-width]]

---

手機上
-----

若網頁寬度 > 螢幕寬度

手機瀏覽器會自動縮小網頁

<div class="fragment">

  關閉自動縮放（from [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/master/index.html)）

  <pre><code><meta name="viewport" content="width=device-width, initial-scale=1"></code></pre>

</div>

<div class="fragment row">
  <div class="span2">
    <img src="images/css/mediaquery-width.png">
    <small>http://jsbin.com/mrorz-css-mediaquery-width/latest</small>
  </div>
  <div class="span2 offset2">
    <img src="images/css/mediaquery-width-fixed.png">
    <small>http://jsbin.com/mrorz-css-mediaquery-width-fixed/latest</small>
  </div>
</div>


<!--max-width: xxx == width < xxx
min-width: xxx == width > xxx-->