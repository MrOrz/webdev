`tag`, `.class`, `#id`
-----------------
![Selection and declaration](images/css/selector.gif?borderless)
[[mrorz-css-tagclsid]] 

---

`tag`, `.class`, `#id`
-----------------
<div class="fragment">
  <h3><code>div.tall</code></h3>
  <p>有 `tall` class 之 `div`</p>
  <div class="fragment">
    <h3><code>#target.highlight</code></h3>
    <p>有 `lightlight` class 且 ID 為 `target` 之 element</p>
  </div>
  <div class="fragment">
    <h3><code>.box.widget</code></h3>
    <p>同時有 `box` 和 `widget` 兩個 class 之 element</p>
  </div>
</div>

---

<!-- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference -->
<!-- 介紹 Selector 與 Combinators ! Combinator 不算 specificity.-->

Descendant & Child Selector
---------------------------

* `.root div`: `.root` 的**子孫**中為 `div` 者。
* `.root>div`: `.root` 的**孩子**裡為 `div` 者。

[[mrorz-css-childselector]]

---

Universal Selector
------------------

[[ijIcIGI]]

`*`：任意元素。

`.root *`: `.root` 的**子孫**。

---

Attribute Selector
------------------

[[mrorz-css-attrselector]]

中括號； `[屬性 運算子 值]`

---

Pseudo-Class
------------

[[mrorz-css-pseudocls2]]

依狀態套用的「假的」class

幾乎所有元素都可用 `:hover`

`a` 元素：`:link`, `:visited`, `:active`



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
* `::before` 像是一個 `span` 元素<br>
  加在 start tag 之後、內容之前。
* `::after` 像是一個 `span` 元素<br>
  加在 end tag 之前、內容之後。 
* 亦可只用一個冒號（`:before`, `:after`）

---

Sibling Selector
----------------

* `:checked` : 「被勾選」之 pseudo-class。

[[mrorz-css-sibselector]]

* `input + *` 選出 `input` 的最大的弟弟妹妹。
* `input ~ *` 選出 `input` 的所有弟弟妹妹。