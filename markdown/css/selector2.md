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

[https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors](可用的運算子列表)

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

老大 `:first-child`, 老么 `:last-child`

老 N `:nth-child()`

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

---

小結
----
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Selectors)

### Basic Selector
`tag`, `#id`, `.class`,
`[attr]`, `*`

### Pseudo-elements & Pseudo-classes
`:before`, `:hover`

### Combinator
`A B`, `A>B`, `A+B`, `A~B`