Box 與 `display` 屬性
--------------------

<div class="row">
  <div class="span3">
    ![4 displayed boxes](images/css/box-intro.png)
  </div>
  <div class="span3 leader">
    <ul>
      <li>排文字與元素時</li>
      <li>蓋成長方形 box</li>
      <li>box 有兩種</li>
      <li>`display` 屬性</li>
    </ul>
  </div>
</div>

- - -

<div class="row">
  <div class="span3">
    <h3>Block-level boxes</h3>
    <p><small>`display: block` | `list-item` | `table` | `table-*`</small></p>
  </div>
  <div class="span3">
    <h3>Inline-level Boxes</h3>
    <p><small>`display: inline` | `inline-block`</small></p>
  </div>
</div>

---

細說 `display`
-------------

* `none`: 連 box 都沒有。
* `inline`: 一秒變 inline element。
* `block`: 一秒變 block element。
* `inline-block`: 當成 inline element 來排版（左到右）
  但又能設 `width`, `height` 等 inline element 沒有的屬性
* table 系列：當成 table 來排版，見 [SPEC](http://www.w3.org/TR/CSS2/tables.html#table-display)。

---

`margin`, `border`, `padding`
-----------------------------

![Box model from CSS3 spec](images/css/boxdim.png)

---

心室肥大
-------

[[mrorz-css-marginborderpadding]]

注意 `.heart` 的寬度與高度。

---

`margin` 二三事
--------------

[[mrorz-css-margincaveat]]

<ul>
  <li class="fragment">從 `border` 向外算，和其他元件的距離</li>
  <li class="fragment">inline 元素的 `margin-top`、`margin-bottom` 會被忽略</li>
  <li class="fragment">`margin-left` 和 `margin-right` 同為 `auto` 時，元素會置中。 </li>
</ul>

---

`margin` 二三事 2
--------------

[[mrorz-css-margincaveat2]]

<ul>
  <li class="fragment">block 元素的 `margin-top`, `margin-bottom` 密接時，有時只會表現較大的那一個 （*Collapsing margin*）</li>
  <li class="fragment">`margin-top` 可能會超出父元素。</li>
</ul>

---

`border` 與 `padding`
--------------------

[[mrorz-css-marginborderpadding]]

<ul>
  <li class="fragment">`border` 會佔有空間、推開周圍元素；`outline` 不會</li>
  <li class="fragment">`padding` 是 `border` 與內文的間隙。</li>
  <li class="fragment">元素的背景顏色會填滿 `border` 內的空間</li>
  <li class="fragment">背景顏色的寬 = 元素 `width` + 左右之 `padding`；高也是</li>
</ul>

---

切換 box model
--------------

`box-sizing: border-box` [瀏覽器支援](http://html5please.com/#box-sizing)

width = *border + padding* + content

[[mrorz-css-borderbox]]
