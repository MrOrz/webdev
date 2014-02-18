HT*ML*
-----

**"Markup Language"**：標記語言

**"Markup"**：標籤

---

替文字標上「語意」
--------------

> 每個人都應該努力培養雅量。

```html
<p>每個人都應該努力培養<strong>雅量</strong>。</p>
```

`<p>` 標出「段落」

`<strong>` 標出「重點」

HTML：勾勒**內容**與**結構**的「Formatting Language」

---

Tag, Element, Attribute
-----------------------

標籤、元素、屬性

```html
  <標籤名 屬性1="值1" 屬性2="值2">內容</標籤名>
```

---

Tag, Element, Attribute
-----------------------
標籤、元素、屬性

[[mrorz-html-tagelem]]

<ul>
  <li class="fragment">
    `<label for="chk-tos">`：<br>
    有著 `for` attribute 的 **Start tag**。
  </li>
  <li class="fragment">
    `</label>`：

    **End tag**
  </li>
  <li class="fragment">
    `<label for="chk-tos">我已……條款</label>`：<br>
    Label **element**。
  </li>
  <li class="fragment">
    有些 element 僅由單一 tag 構成，如 `<input>`、`<hr>`、`<img>` 等。
  </li>
</ul>

---

學 HTML 像學英文
--------------

![課本](images/html/english.jpg)

<!-- 教學用的是看似瑣碎、沒有相關的課文們，但學到的東西會在寫作文時用到 -->

<div class="row">
  <div class="span3">
    <ul>
      <li>一篇課文</li>
      <li>很多生字要背</li>
      <li>記文法、片語</li>
      <li>組裝成英文作文</li>
    </ul>
  </div>
  <div class="span3">
    <ul>
      <li>一個 HTML 範例</li>
      <li>很多標籤要記</li>
      <li>記語法、常用結構片段</li>
      <li>組裝成完整網頁</li>
    </ul>
  </div>
</div>

<small>[圖片來源](http://uxi0909gmailcom.blogspot.tw/2009/06/971_9164.html)</small>

---

第一課：換行與空白
-----------------
[[mrorz-html-space]]

`<br>` ：換行

空白鍵預設會重疊

`&nbsp;` ：可疊加的「空白 [character entity](http://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references)」

`<!-- -->` ：多行註解
