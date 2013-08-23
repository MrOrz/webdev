`background`
------------

[[mrorz-css-background]]

[MDN Reference : background](https://developer.mozilla.org/en/CSS/background)

`url()` 填相對路徑時，是相對於此份 CSS 的網址而言。<br>和引入此 CSS 的網頁網址無關。

<small class="fragment">例： 某 HTML 頁 `/page/info.html`，引入了 `/static/css/style.css`，<br>
裡頭有 `url(../images/icon.png)`，則瀏覽器會去抓 `/static/images/icon.png`。</small>

---

`font`
------

[[mrorz-css-font]]

[MDN Reference : font](https://developer.mozilla.org/en/CSS/font)

---

CSS Shorthand Properties
------------------------

```
background: #000 url(images/bg.gif) no-repeat top right;
```

```
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: top right;
```

- - -

```
font: italic bold .8em/1.2 Arial, sans-serif;
```

```  
font-style: italic;
font-weight: bold;
font-size: .8em;
line-height: 1.2;
font-family: Arial, sans-serif;
```

<small>[MDN 相關文件](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)</small>

---

Shorthand Property 預設值陷阱
---------------------------


[[mrorz-css-background2]]

`background` 中沒有定義顏色 → `transparent`。<br>

```CSS
background-color: red;

/* background 會展開為下列三條規則 */
background-color: transparent;
background-image: url(http://mrorz.github.io/webdev/images/css/selector.gif);
background-position: left center;

```


