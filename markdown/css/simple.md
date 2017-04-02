可以上在 div 上的
-------

`width`, `min-width`, `max-width`

`height`, `min-height`, `max-height`

`background`, `border-radius`


[[qenazeyeri/1?html,css,output]]

---

`background`
------------

[[mrorz-css-background]]

[MDN Reference : background](https://developer.mozilla.org/en/CSS/background)

`url()` 可以填絕對路徑（`http` 開頭、`/` 開頭）、相對路徑。

相對路徑以 CSS 檔的位置起算；`../` 是「上一層資料夾」。

<!--
<small class="fragment">例： 某 HTML 頁 `/page/info.html`，引入了 `/static/css/style.css`，<br>
裡頭有 `url(../images/icon.png)`，則瀏覽器會去抓 `/static/images/icon.png`。</small>
-->

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

