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

`margin`、`padding`、<br>`border` 的 shorthand
--------------

[[mrorz-css-margincaveat]]

1：全部；2：上下、左右；3：上側下；4：上右下左。

`border` 與 `outline`
--------------------

[[mrorz-css-marginborderpadding]]

`border` 會佔有空間、推開周圍元素；`outline` 不會。

---

[垂直邊界重疊（Collapsing margin）](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
--------------

垂直邊界有時候會重疊在一起，只表現比較大的那一個。
（`margin-left`、`margin-right` 永遠不會重疊。）

[[mrorz-css-margincaveat2]]

Collapsing margin 出沒之處：
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
