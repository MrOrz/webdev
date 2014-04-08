語意標籤 - 內文系列
----------------

[[mrorz-html-look]]

`<h1>`~`<h6>`：標題。

`<p>`：段落； `<blockquote>`：引文。

`<strong>`：重點；`<em>`：強調。

---

語意標籤 - 列表、定義
------------------

[[mrorz-html-lists]]

`<hr>`：分隔線。

`<ol>`，`<ul>`：有序/無序列表；`<li>`：列表的項目。

`<dl>`：定義列表； `<dt>`：被定義的項目； `<dd>`：定義。

---

表格
----

[[mrorz-html-table]]

`<table>` 表格（table）；`<tr>` 表格列（table row）；

`<td>` 資料格子（table data cell）； `<th>` 表頭格子（table header）。

`<tr>` 裡只能裝 `<td>` 或 `<th>`；`<td>` 裡啥都能裝。

---

有功能的標籤
----------

[[mrorz-html-special]]

`<img>` 圖，`<a>` 超連結，`<iframe>` 嵌入框

```
<img src="網址" alt="圖壞掉時顯示的字" (width="寬" height="高")>
<a href="網址" (target="_blank")>顯示的文字</a>
<iframe src="網址"></iframe>
```

---

表單元素
----

[[mrorz-html-form]]

```
<input type="text|file|submit|..." name="變數名字" value="值">
```

---

表單 - 勾勾和點點
---------------

[[mrorz-html-form2]]

`name` 屬性一樣 → 同一組。

`<label>` 之 `for` 屬性和 `<input>` 之 `id` 屬性配對。

另外也可以用 `<label>` 包住 `<input>` 來配對。

---

HTML5 語意標籤
-------------

`<section>`：章節 / 小節

`<article>`：一篇文章

兩者可以[互包](http://www.w3.org/html/wg/drafts/html/master/sections.html#article-example)。

- - -

`<nav>`：導覽選單

`<header>`、`<footer>`：文章段落或頁面的開頭、結尾


---

網頁排版
--------

<svg width="800px" height="600px" viewBox="0 0 400 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="Artboard-1" sketch:type="MSArtboardGroup">
            <g id="head" sketch:type="MSLayerGroup" transform="translate(15.000000, 0.000000)">
                <circle id="Oval-1" stroke="#979797" fill="#D8D8D8" sketch:type="MSShapeGroup" cx="27.5" cy="27.5" r="27.5"></circle>
                <rect id="Rectangle-1" stroke="#979797" fill="#D8D8D8" sketch:type="MSShapeGroup" x="62" y="18" width="309" height="37"></rect>
                <g id="nav" transform="translate(251.000000, 0.000000)" stroke="#979797" fill="#D8D8D8" sketch:type="MSShapeGroup">
                    <rect id="Rectangle-2" x="95" y="0" width="25" height="13"></rect>
                    <rect id="Rectangle-2" x="64" y="0" width="25" height="13"></rect>
                    <rect id="Rectangle-2" x="32" y="0" width="25" height="13"></rect>
                    <rect id="Rectangle-2" x="0" y="0" width="25" height="13"></rect>
                </g>
                <text id="提問" sketch:type="MSTextLayer" font-family="Heiti TC" font-size="6" font-weight="260" sketch:alignment="middle" fill="#000000">
                    <tspan x="257.5" y="8">提問</tspan>
                </text>
                <text id="助教" sketch:type="MSTextLayer" font-family="Heiti TC" font-size="6" font-weight="260" sketch:alignment="middle" fill="#000000">
                    <tspan x="289.5" y="8">助教</tspan>
                </text>
                <text id="關於" sketch:type="MSTextLayer" font-family="Heiti TC" font-size="6" font-weight="260" sketch:alignment="middle" fill="#000000">
                    <tspan x="321.5" y="8">關於</tspan>
                </text>
                <text id="登入" sketch:type="MSTextLayer" font-family="Heiti TC" font-size="6" font-weight="260" sketch:alignment="middle" fill="#000000">
                    <tspan x="352.5" y="8">登入</tspan>
                </text>
                <text id="LOGO" sketch:type="MSTextLayer" font-family="Helvetica" font-size="13" font-weight="normal" sketch:alignment="middle" fill="#000000">
                    <tspan x="8.5" y="32">LOGO</tspan>
                </text>
                <text id="助教給問嗎" sketch:type="MSTextLayer" font-family="Heiti TC" font-size="16" font-weight="260" fill="#000000">
                    <tspan x="72.5" y="42">助教給問嗎</tspan>
                </text>
            </g>
            <g id="descriptions" sketch:type="MSLayerGroup" transform="translate(13.000000, 62.000000)">
                <rect id="Rectangle-6" stroke="#979797" fill="#D8D8D8" sketch:type="MSShapeGroup" x="0" y="0" width="247" height="88"></rect>
                <text id="Descriptions" sketch:type="MSTextLayer" font-family="Heiti TC" font-size="16" font-weight="260" fill="#000000">
                    <tspan x="8" y="29">Descriptions</tspan>
                </text>
            </g>
            <g id="services" sketch:type="MSLayerGroup" transform="translate(13.000000, 156.000000)">
                <rect id="Rectangle-6" stroke="#979797" fill="#D8D8D8" sketch:type="MSShapeGroup" x="0" y="0" width="247" height="90"></rect>
                <text id="Services" sketch:type="MSTextLayer" font-family="Heiti TC" font-size="16" font-weight="260" fill="#000000">
                    <tspan x="8" y="30">Services</tspan>
                </text>
            </g>
            <g id="links" sketch:type="MSLayerGroup" transform="translate(266.000000, 62.000000)">
                <rect id="Rectangle-8" stroke="#979797" fill="#D8D8D8" sketch:type="MSShapeGroup" x="0" y="0" width="120" height="184"></rect>
                <text id="相關連結" sketch:type="MSTextLayer" font-family="Heiti TC" font-size="16" font-weight="260" fill="#000000">
                    <tspan x="9" y="29">相關連結</tspan>
                </text>
            </g>
            <g id="copyright" sketch:type="MSLayerGroup" transform="translate(13.000000, 254.000000)">
                <rect id="Rectangle-9" stroke="#979797" fill="#D8D8D8" sketch:type="MSShapeGroup" x="0" y="0" width="373" height="46"></rect>
                <text id="Copyright" sketch:type="MSTextLayer" font-family="Heiti TC" font-size="16" font-weight="260" fill="#000000">
                    <tspan x="8" y="25">Copyright</tspan>
                </text>
            </g>
            <g id="head-area" class="fragment" sketch:type="MSLayerGroup" transform="translate(14.000000, 0.000000)">
                <rect id="Rectangle-10" stroke="#F6A623" fill-opacity="0.505600873" fill="#F6A623" sketch:type="MSShapeGroup" x="0" y="0" width="372" height="56"></rect>
                <text id="&lt;header>" fill="#D0011B" sketch:type="MSTextLayer" font-family="Monaco" font-size="16" font-weight="normal" sketch:alignment="middle">
                    <tspan x="148.09375" y="34" fill="#000000">&lt;header&gt;</tspan>
                </text>
            </g>
            <g id="nav-area" class="fragment" sketch:type="MSLayerGroup" transform="translate(266.000000, -5.000000)">
                <rect id="Rectangle-11" stroke="#BD0FE1" fill-opacity="0.517807904" fill="#BD0FE1" sketch:type="MSShapeGroup" x="0" y="5" width="120" height="13"></rect>
                <text id="&lt;nav>" sketch:type="MSTextLayer" font-family="Monaco" font-size="16" font-weight="normal" fill="#303BA3">
                    <tspan x="39" y="16">&lt;nav&gt;</tspan>
                </text>
            </g>
            <g id="section-area" class="fragment" sketch:type="MSLayerGroup" transform="translate(13.000000, 61.000000)">
                <rect id="Rectangle-12" stroke="#7ED321" fill-opacity="0.478486903" fill="#7ED321" sketch:type="MSShapeGroup" x="0" y="0" width="246" height="184"></rect>
                <text id="&lt;section>" sketch:type="MSTextLayer" font-family="Monaco" font-size="16" font-weight="normal" sketch:alignment="middle" fill="#417505">
                    <tspan x="80.2929688" y="97">&lt;section&gt;</tspan>
                </text>
            </g>
            <g id="article-areas" class="fragment" sketch:type="MSLayerGroup" transform="translate(16.000000, 64.000000)">
                <rect id="Rectangle-13" stroke="#3330A6" fill-opacity="0.496668199" fill="#4990E2" sketch:type="MSShapeGroup" x="0" y="0" width="241" height="86"></rect>
                <text id="&lt;article>" sketch:type="MSTextLayer" font-family="Monaco" font-size="16" font-weight="normal" fill="#3330A6">
                    <tspan x="77" y="45">&lt;article&gt;</tspan>
                </text>
                <rect id="Rectangle-13" stroke="#3330A6" fill-opacity="0.496668199" fill="#4990E2" sketch:type="MSShapeGroup" x="0" y="93" width="241" height="86"></rect>
                <text id="&lt;article>" sketch:type="MSTextLayer" font-family="Monaco" font-size="16" font-weight="normal" fill="#3330A6">
                    <tspan x="77" y="142">&lt;article&gt;</tspan>
                </text>
            </g>
            <g id="aside-area" class="fragment" sketch:type="MSLayerGroup" transform="translate(266.000000, 62.000000)">
                <rect id="Rectangle-15" stroke="#7A91C2" fill-opacity="0.501723346" fill="#7A91C2" sketch:type="MSShapeGroup" x="0" y="0" width="120" height="184"></rect>
                <text id="&lt;aside>" sketch:type="MSTextLayer" font-family="Monaco" font-size="16" font-weight="normal" fill="#497EC0">
                    <tspan x="26" y="95">&lt;aside&gt;</tspan>
                </text>
            </g>
            <g id="footer-area" class="fragment" sketch:type="MSLayerGroup" transform="translate(13.000000, 255.000000)">
                <rect id="Rectangle-16" stroke="#FBEC00" fill-opacity="0.515280331" fill="#FBEC00" sketch:type="MSShapeGroup" x="0" y="0" width="373" height="45"></rect>
                <text id="&lt;footer>" sketch:type="MSTextLayer" font-family="Monaco" font-size="16" font-weight="normal" fill="#ED0000">
                    <tspan x="148" y="28">&lt;footer&gt;</tspan>
                </text>
            </g>
        </g>
    </g>
</svg>

---

無語意標籤
-------------

`div` 與 `span`

* 單純將元素群組起來
* CSS 或 Javascript 的操作對象

[[mrorz-html-div]]

---

通用屬性
-------

[[mrorz-html-general?live,html]]

大部分 element 都有下面屬性

<ul>
  <li class="fragment"><code>class</code>, <code>id</code>：替該 element 加上一個 classname / unique ID，使 CSS 的 selector 能選取、Javascript 方便操作。</li>
  <li class="fragment"><code>title</code>：工具提示（tooltip）</li>
  <li class="fragment"><code>style</code>：加上 CSS Declaration。</li>
</ul>

---

參考資料
-------

<a href="https://developer.mozilla.org/en/HTML/Element" target="_blank">MDN HTML Elements</a> 標籤列表、屬性介紹