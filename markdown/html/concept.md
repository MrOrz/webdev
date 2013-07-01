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

有些標籤有特異功能
---------------

```
<img src="http://www.google.com.tw/logos/2012/rossini12-hp.jpg" alt="羅西尼220歲誕辰">

<a href="http://www.google.com" target="_blank">Google 首頁</a>

<input type="checkbox" name="tos" id="chk-tos">
<label for="chk-tos">我已詳閱並同意使用者條款</label>
```

---

Tag, Element, Attribute
-----------------------

標籤、元素、屬性

```
<input type="checkbox" name="tos" id="chk-tos">
<label for="chk-tos">我已詳閱並同意使用者條款</label>
```

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
  <li class="fragment">
    xHTML → `<hr />`
  </li>
</ul>

---

`<br>` 與 `&nbsp;`
-----------------
```html
本板嚴禁一行文<br>
第二行<br>
第三行
和這行是同行的。<br>
<br>
<!-- 自以為是分隔線的註解 -->
系              色望<br>
系 色望
```

用 `<br>` 換行，空白鍵預設會重疊

`&nbsp;` 代表「空白 [character entity](http://www.w3.org/TR/html5/named-character-references.html#named-character-references)」，可疊加

`<!-- -->` 是多行註解
