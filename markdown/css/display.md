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

[[mrorz-css-display/11]]

* `block` 自成一行，寬度佔滿滿。
* `inline` 塞在字裡行間，會被斷行。寬度同內容。
* `inline-block` 塞在字裡行間，自成一格不分離。寬度同內容。

---

觀察：`display` 與 `margin`
--------------------

[[rogewik/2]]

* `block` 上下左右皆退開。*寬度變小了。*
* `inline` 只有左右有影響。
* `inline-block` 上下左右皆退開。

---

觀察：`display` 與 `padding`
--------------------

[[rogewik/4]]

* `block` 上下左右都加上填充、擠開內容。
* `inline` 上下左右都加上填充，但只有左右會擠開旁邊內容。
* `inline-block` 上下左右都加上填充、擠開內容。


---

觀察：`display` 與 `width`、`height`
--------------------

[[rogewik/6]]

* `block` 寬度與高度都有效果、推開旁邊內容。
* `inline` 寬度與高度都*沒*效果。
* `inline-block` 寬度與高度都有效果、推開旁邊內容。

---

實務上最常接觸到的會是 `div`。

其預設為 `display: block`。

以下詳細介紹 `display: block` 的行為。

---

`display: block` 的寬度
---

`display: block` 元素在寬度上，需要符合這個等式：

`margin-left` + `border-left-width` + `padding-left` + `width` + `padding-right` + `border-right-width` + `margin-right` = `width of containing block`

![公式圖](https://docs.google.com/drawings/d/1pb-RbSDRf2pR6Vc2ft0SC8VA9BliRAwduuvUo0t048s/pub?w=949&h=285&borderless)

---

`display: block` 預設值
---

![公式圖](https://docs.google.com/drawings/d/1pb-RbSDRf2pR6Vc2ft0SC8VA9BliRAwduuvUo0t048s/pub?w=949&h=285&borderless)

* `margin`：0
* `border-width`：0
* `padding`: 0
* `width`: `auto`

<br/>


---

特殊值 `auto`
------

「請瀏覽器幫我算」

![Auto 可以下在哪一些上頭](https://docs.google.com/drawings/d/1e5B38xn1h2S-263NcNOqe_cvG8jehNMUbJ2miE2Ry0M/pub?w=601&h=202&borderless)


<div class="row">
  <div class="span3">
    <h4>能設成 `auto` 的</h4>
    <ul>
      <li>[width](https://www.w3.org/TR/CSS22/visudet.html#propdef-width)</li>
      <li>[height](https://www.w3.org/TR/CSS22/visudet.html#propdef-height)</li>
      <li>[margin](https://www.w3.org/TR/CSS22/box.html#value-def-margin-width)</li>
    </ul>
  </div>
  <div class="span3">
    <h4>不能設成 `auto` 的</h4>
    <ul>
      <li>[border-width](https://www.w3.org/TR/CSS22/box.html#propdef-border-width)</li>
      <li>[padding](https://www.w3.org/TR/CSS22/box.html#value-def-padding-width)</li>
    </ul>
  </div>
</div>

---

[計算 `auto` 的實際寬度](https://www.w3.org/TR/CSS22/visudet.html#blockwidth)
---

![公式圖](https://docs.google.com/drawings/d/1pb-RbSDRf2pR6Vc2ft0SC8VA9BliRAwduuvUo0t048s/pub?w=949&h=285&borderless)

1. 若只有一個 `auto` 值，就用等式來解 `auto`。
2. **若 `width: auto`，則其他任何 `auto` 都會被計算為 `0`**，然後用等式來算 `width`
3. 若式子裡沒有任何 `auto` 的值，則忽略 `margin-right` 的設定，改成用等式計算 `margin-right`。（看上去會像是靠左對齊）
4. 若 `margin-left` 與 `margin-right` 同時是 `auto`，那設寬度時會使 `margin-left` = `margin-right`。

---

應用：`display: block` 置中與置右
--------------

[[mrorz-css-margincaveat2]]

`margin-left` 和 `margin-right` 同為 `auto` 時，元素會水平置中。（前提是左右邊界之間的寬度不要寬過 containing block）

---

[計算 `auto` 的實際高度](https://www.w3.org/TR/CSS22/visudet.html#normal-block)
---

* `margin-top`、`margin-bottom` 的 `auto` 等於 `0`。
* 若 `height: auto`，則高度就會被設成「上 content edge」到內容底端的距離。（「內容」僅包含「在 Normal flow 內」的元素）
* 否則，`height` 則為 0。

- - -

綜合以上，形成 block 元素上的 height、垂直 padding 與垂直 margin 「推開」上下元素的效果。

---

`display: block` 百分比高度
---

1. 百分比高度，以 containing block 高度為 100%
2. containing block 高度，預設為 `auto`（看內容文字或子元素高度）

如果設定 `height: 50%`，那元素與其 containing block 的高度會發生什麼事情？

--> 如果 containing block 沒有指定高度，`height` 就會被視為 `auto`（所以會看內容文字或子元素高度）。

[[cawekimepe/1]]

---

`display` 大複習
--------------------

<!--
  Reference: CSS 2.1 SPEC 9.4, 10.3, 10.6
  http://www.w3.org/TR/CSS2/visuren.html#normal-flow
  http://www.w3.org/TR/CSS2/visudet.html#Computing_widths_and_margins
  http://www.w3.org/TR/CSS2/visudet.html#Computing_heights_and_margins
-->

[[mrorz-css-display]]

<table class="trailer">
  <tr>
    <th>值</th>
    <th>`block`</th>
    <th>`inline-block`</th>
    <th>`inline`</th>
  </tr>
  <tr>
    <th><a href="http://www.w3.org/TR/CSS2/visuren.html#normal-flow"><small>排版<br>方向</small></a></th>
    <td>上到下</td>
    <td colspan="2">左到右，隨文字斷行</td>
  </tr>
  <tr>
    <th><a href="http://www.w3.org/TR/CSS2/visudet.html#Computing_widths_and_margins">寬</a></th>
    <td><small>預設以 margin edge 貼齊容器寬</small></td>
    <td><small>預設和內容同寬，margin、padding 會撐開左右鄰居。</small></td>
    <td><small>`width` 無用，必和內容同寬。margin, padding 行為同左。</small></td>
  </tr>
  <tr>
    <th><a href="http://www.w3.org/TR/CSS2/visudet.html#Computing_heights_and_margins">高</a></th>
    <td colspan="2"><small>預設和內容同高，margin、padding 撐開上下鄰居</small></td>
    <td><small>`height` 無用，以 `line-height` 為準。垂直的 padding, margin 不影響行高。<small?</td>
  </tr>
</table>


---

其他 `display` 值
-------------

* `none`: 連 box 都沒有。完全沒有容身之處。
* table 系列：當成 table 來排版，見 [SPEC](http://www.w3.org/TR/CSS2/tables.html#table-display)。

[[mrorz-css-displayothers]]
