`tag`, `.class`, `#id`
-----------------
[Selection and declaration](images/css/selector.gif")
[[mrorz-css-tagclsid]]

---

`tag`, `.class`, `#id`
-----------------
<div class="fragment">
  <h3><code>div.tall</code></h3>
  <p>有 tall class 之 div</p>
  <div class="fragment">
    <h3><code>#target.highlight</code></h3>
    <p>有 lightlight class 且 ID 為 target 之 element</p>
  </div>
  <div class="fragment">
    <h3><code>.box.widget</code></h3>
    <p>同時有 box 和 widget 兩個 class 之 element</p>
  </div>
</div>

---

Descendant & Child Selector
---------------------------

* `.root div`: `.root` 的**子孫**中為 `div` 者。
* `.root>div`: `.root` 的**孩子**裡為 `div` 者。

[[mrorz-css-childselector]]

---

Attribute Selector
------------------

[[mrorz-css-attrselector]]

---

Pseudo-Class
------------

[[mrorz-css-pseudocls2]]

避免定義相互覆蓋的順序：*L*o*V*e *HA*te

---

Pseudo-Class
------------

[[mrorz-css-pseudocls]]

---

Pseudo-Element
------------

[[mrorz-css-pseudoelem]]

* 需有 `content` 屬性。
* `::before` 像是一個 `span` 元素
  加在 start tag 之後、內容之前。
* `::after` 像是一個 `span` 元素
  加在 end tag 之前、內容之後。

---

Sibling Selector
----------------
* `:checked`: 「被勾選」則符合此 pseudo-class。
* `input + label` 選出 `input` 的弟弟。
* `input ~ input[type="submit"]` 選出 `input` 的兄弟姊妹中，是 `submit` 按鈕者。

[[mrorz-css-sibselector]]