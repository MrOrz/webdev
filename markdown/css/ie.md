IE 們
-----

* IE6 及以下: 不支援 PNG 透明
* IE7 及以下: 不支援 `inline-block`
* IE8 及以下: 不支援 `:checked` pseudo class.
* ……族繁不及備載。

- - -

[CSS hacks](http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-how-to-target-ie6-ie7-and-ie8-uniquely-with-4-characters/)

```css
body {
 color: red; /* all browsers, of course */
 color : green\9; /* IE8 and below */
 *color : yellow; /* IE7 and below */
 _color : orange; /* IE6 */
}
```

---

條件註解
-------

```html
  <!--[if lt IE 9]>
  According to the conditional comment this is IE lower than 9<br />
  <![endif]-->
```

微軟官方推薦的作法

只有 IE 會理會

---

能不能用？
--------

<div class="row">
  <div class="centered span3">
    ![](images/css/html5please.png)
    [html5please.com](http://html5please.com)
  </div>
</div>
<div class="row">
  <div class="offset1 span2">
    ![](images/css/caniuse.jpg)
    [caniuse.com](http://caniuse.com)
  </div>
  <div class="span2">
    ![](images/css/quirksmode.jpg)
    [quirksmode.org](http://quirksmode.org/compatibility.html)
  </div>
</div>
