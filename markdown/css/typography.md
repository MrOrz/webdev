Generic Font Family
-------------------

`serif`, `sans-serif`, `cursive`, `fantacy`,  `monospace`

[[mrorz-css-typography]]

瀏覽器對各種 Generic font family 有預設字體

---

襯線、無襯線、等寬
---------------

- - -

<div class="row leader">
  <div class="span2">
    <h3>Serif</h3>
    ![Serif](images/css/serif.png?borderless)
    <p class="leader">有襯線；明體</p>
  </div>
  <div class="span2">
    <h3>Sans Serif</h3>
    ![Sans Serif](images/css/sans-serif.png?borderless)
    <p class="leader">無襯線；黑體</p>
  </div>
  <div class="span2">
    <h3>「襯線」</h3>
    ![紅的明顯](images/css/red-serif.png?borderless)
  </div>
</div>

- - -

`monospace` 字型的每個字元都一樣寬，適合排版程式碼。

---

`font-family`
-------------

```
font-family: '文泉驛微米黑', 'LiHei Pro', '微軟正黑體', sans-serif;
```

<p class="fragment">字體在使用者電腦裡沒有 → 用下一個</p>
<p class="fragment">最後一個通常放 Generic font family。</p>
<p class="fragment"><a href="http://w3schools.com/cssref/css_websafe_fonts.asp" target="_blank">常用之 font-family</a></p>

---

Web Font
--------

[[mrorz-css-webfont]]

<ul>
  <li class="fragment">Server 提供字體給 Browser 來抓</li>
  <li class="fragment">通常抓下來不能直接裝在電腦上，只能顯示</li>
  <li class="fragment"><a href="http://www.google.com/webfonts" target="_blank">Google Web Font</a> 英文的 Webfont</li>
  <li class="fragment"><a href="http://fontsquirrel.com/fontface/generator" target="_blank">@font-face generator</a> 上傳字型檔後，會轉檔為 web font 並提供範例</li>
</ul>

---

大小與行高
--------

`font-size: 12px`

`line-height: 1.4` 

`font-family: Arial, sans-serif`

```CSS
/* All-in-one shorthand */
font: 12px/1.4 Arial, sans-serif;
```

`line-height`：純數字（幾倍於字體大小）或 `數字px`

[了解更多](http://www.maxdesign.com.au/articles/css-line-height/)

---

粗體與斜體
--------

`font-style: normal | italic`

`font-weight: normal | bold | 數字`

[[mrorz-css-weight]]

---

底線、刪除線、大寫小字
------------------

`text-decoration: none` | `underline` | `line-through`

`font-variant: small-caps`

[[mrorz-css-decoration]]