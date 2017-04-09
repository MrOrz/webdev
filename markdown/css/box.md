Box
----

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

<div class="row">
	<div class="span3 centered">

![Word 快取圖案 padding](images/css/word.jpg)

	</div>
</div>

---

`margin`、`padding` shorthand
--------------

[[mrorz-css-margincaveat]]

1：全部；2：上下、左右；3：上側下；4：上右下左。

---

`border`
--------------

`border` 為下面三個 property 的 shorthand：

* [`border-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style) 樣式（預設： `none`）
* [`border-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width) 粗細（預設： `medium`）
* [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color) 顏色（預設： 與 `color` 相同）

[[viqavehiru/3]]

---

上下左右 `border`
--------

上下左右 border 的寬度、顏色、樣式可以分開設定。

`border-bottom` 是 `border-bottom-style`、`border-bottom-width`、`border-bottom-color` 的 shorthand。

[[kiconifupa/1]]

（以此類推 `border-top`、`border-left`、`border-right`）

---

上下左右 `border` shorthand
--------

`border-style`、`border-width`、`border-color` 都可以設定 1~4 個值。

規則同 `margin`。

[[quponateso/2]]

---

`border` 與 `outline`
--------------------

[[mrorz-css-marginborderpadding]]

`border` 會佔有空間、推開周圍元素；`outline` 不會。

---

[邊界重疊 Margin Collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
--------------

垂直邊界有時候會重疊在一起，只表現比較大的那一個。
（`margin-left`、`margin-right` 永遠不會重疊。）

[[mrorz-css-margincaveat2]]

Margin collapsing 出沒之處：
<ol>
  <li class="fragment">相鄰元素彼此之間</li>
  <li class="fragment">沒有 border 與 padding 的 parent 元素與其 child 元素之間（margin 會出現在 parent 之外）</li>
  <li class="fragment">空元素自己的上下邊界</li>
</ol>

---

改變 box model 的 `width` 與 `height`
--------------

`box-sizing: border-box` [瀏覽器支援](http://html5please.com/#box-sizing)

width = *border + padding* + content

[[mrorz-css-borderbox]]

---

Percentage values
------

以下屬性都可以設定百分比。

* `width` & `height`
* `margin`
* `padding`

那 100% 是以什麼為準？

---

[Containing block](https://www.w3.org/TR/css3-box/#block-level0)
---------

Box A 的 Containing block ＝ 包含 A 且與 A 最近的 Block-level box（`display` 為 `block` 之類的 box，詳見[Spec](https://www.w3.org/TR/css3-box/#block-level)）。

[[rotaxigotu/1]]

<!--
原文： The containing block of a box is a rectangle that is associated with the box and that is used in various definitions in this specification. Apart from a size and a position, the rectangle also has ‘direction’ and ‘block-progression’ properties. The containing block of a box is defined as follows:

The containing block of the root element's top-level boxes is a rectangle with the dimensions of the viewport, anchored at the canvas's origin for continuous media and the page area for paged media. (See [MEDIAQ] and [CSS3PAGE] for definitions of continuous and paged media.) This containing block is called the initial containing block. The ‘direction’ and ‘block-progression’ of the initial containing block are the same as those of the root element.
The containing block of other boxes is the rectangle formed by the content edge of their nearest ancestor box that is block-level. This may be an anonymous box. The ‘direction’ and ‘block-progression’ of the containing block are those of the box whose content edge it is.

Note that the above is modified by the Absolute Positioning module [CSS3POS]: in particular, if a box's ‘position’ property is neither ‘static’ nor ‘relative’, its containing block is established differently.

Containing block 的概念，會用在下面這些東西的計算：

* 用百分比做單位的 `width`、`height`、`margin`，會以 containing block 的寬 / 高為準。
* `width` 或 `height` 為 `auto`（預設值）時到底會有多寬或多高
* `margin: auto` 時到底要留多少空白
-->

<!-- TODO: 表格 width / height, margin, padding v.s. percentage value 100%。注意 vertical padding。 -->

---

[Initial containing block](https://www.w3.org/TR/CSS22/visudet.html#containing-block-details)
--------

網頁呈現在螢幕時，就是視窗螢幕（viewport）

[[hufemohici/3]]

---

Percentage margin / padding on heights
------

垂直的 `margin` 與 `padding` 若為 percentage value，

100% = containing block 的**寬度**。

[[wikuvofupe/1]]