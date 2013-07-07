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
    </ul>
  </div>
</div>

---

CSS Box Model
-------------

### `margin`, `border`, `padding`

![Box model from CSS3 spec](images/css/boxdim.png)

<small>圖片來源：[W3C Box Model](http://www.w3.org/TR/CSS21/box.html#box-dimensions)</small>

---

心室肥大
-------

[[mrorz-css-marginborderpadding]]

注意 `.heart` 的寬度與高度。

---

內容區域 != 背景區域
--------------------

<div class="row">
  <div class="span3 centered">
  
![加上寬度的說明圖](images/css/boxmodel-mdn.png?borderless)

  </div>
</div>


背景顏色寬(高)度 = 內容寬(高) + padding 寬(高)

和 Word / PowerPoint 不同。

![Word 快取圖案 padding](images/css/word.png)

---

`display` Property
------------------

<div class="row">
  <div class="span3">
    ![4 displayed boxes](images/css/box-intro.png)
  </div>
  <div class="span3 leader">
    <ul>
      <li>`<p>` 的 box 呈上下排列</li>
      <li>`<em>` 的 box 排在字裡行間</li>
    </ul>
  </div>
</div>

<div class="fragment leader">

<h3>和 `display` 有關</h3>

`<p>`，`<h1>`~`<h6>`，`<div>` 預設 `display: block;`
`<em>`，`<strong>`，`<span>` 預設 `display: inline;`

</div>

---

`display` 的值
--------------------

<!--
  Reference: CSS 2.1 SPEC 9.4, 10.3, 10.6
  http://www.w3.org/TR/CSS2/visuren.html#normal-flow
  http://www.w3.org/TR/CSS2/visudet.html#Computing_widths_and_margins
  http://www.w3.org/TR/CSS2/visudet.html#Computing_heights_and_margins
-->

<table class="trailer">
  <tr>
    <th>值</th>
    <th>`block`</th>
    <th>`inline-block`</th>
    <th>`inline`</th>
  </tr>
  <tr>
    <th><small>排版方向</small></th>
    <td>上到下</td>
    <td colspan="2">左到右</td>
  </tr>
  <tr>
    <th>寬</th>
    <td><small>預設以 margin edge 貼齊容器寬</small></td>
    <td><small>預設和內容同寬，margin、padding 會撐開左右鄰居。</small></td>
    <td><small>`width` 無用，必和內容同寬。margin, padding 行為同左。</small></td>
  </tr>
  <tr>
    <th>高</th>
    <td colspan="2">預設和內容同高</td>
    <td><small>`height` 無用，以 `line-height` 為準。垂直的 padding, margin 不影響行高。<small?</td>
  </tr>
</table>

[[mrorz-css-display]]


---

其他 `display` 值
-------------

* `none`: 連 box 都沒有。完全沒有容身之處。
* table 系列：當成 table 來排版，見 [SPEC](http://www.w3.org/TR/CSS2/tables.html#table-display)。

[[mrorz-css-displayothers]]

---

`margin`、`padding`、<br>`border` 的 shorthand
--------------

[[mrorz-css-margincaveat]]

1：全部；2：上下、左右；3：上側下；4：上右下左。

---

垂直 `margin` 
--------------

[[mrorz-css-margincaveat2]]

<ul>
  <li class="fragment">`margin-left` 和 `margin-right` 同為 `auto` 時，元素會置中。</li>
  <li class="fragment">block 元素的 `margin-top`, `margin-bottom` 密接時，有時只會表現較大的那一個 （*Collapsing margin*）</li>
  <li class="fragment">`margin-top` 可能會超出父元素。</li>
</ul>

---

`border` 與 `outline`
--------------------

[[mrorz-css-marginborderpadding]]

`border` 會佔有空間、推開周圍元素；`outline` 不會。

---

改變 box model 的 `width` 與 `height`
--------------

`box-sizing: border-box` [瀏覽器支援](http://html5please.com/#box-sizing)

width = *border + padding* + content

[[mrorz-css-borderbox]]
