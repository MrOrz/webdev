Concept: Normal Flow
--------

文字由左邊往右邊，超過邊界就折到下一行

[[mrorz-css-normalflow]]

由上而下、由左而右 → **Normal Flow**

`display: block` 之元素垂直排列，<br>`display: inline / inline-block` 之元素水平排列。

---

[Positioning Schemes](https://www.w3.org/TR/css-position-3/#pos-sch)
---------------------

<div class="fragment grow">
<h3>Normal Flow</h3>

`position: static` | `relative`<br>
`float: none`
</div>

- - -

除了 Normal flow 之外，還有：

<br>

<div>
<h3>Absolute Positioning</h3>

`position: absolute` | `fixed`
</div>

### Floats

`float: left` | `right`

---

[`position: static`](https://www.w3.org/TR/css-position-3/#rel-pos)
---

毫無反應，就是個預設值。

---

[`position: relative`](https://www.w3.org/TR/css-position-3/#rel-pos)
----------------------

`left`, `top`, `bottom`, `right`

* 挪動自己 box 的距離。
* `left`、`right` 之中只能設定一個；`top`、`bottom` 之中只能設定一個。無論如何元素寬度與高度都不會被影響。
* 若為百分比，以 containing block 的寬 or 高為 100%。

[[sojeduyohu/1]]

---

[Positioning Schemes](https://www.w3.org/TR/css-position-3/#pos-sch)
---------------------

<div>
<h3>Normal Flow</h3>

`position: static` | `relative`<br>
`float: none`
</div>

- - -

除了 Normal flow 之外，還有：

<br>

<div class="fragment grow">
<h3>Absolute Positioning</h3>

`position: absolute` | `fixed`
</div>

### Floats

`float: left` | `right`

---

Absolute positioning
----------------------

`position: absolute`：脫離 Normal flow

[[mrorz-css-abs]]

---

Absolute positioning (2)
-----------------

`position: fixed`：脫離 Normal flow，黏在 viewport 上

[[mrorz-css-fixed]]

---

containing block
----------------------

Containing block 的定義，會隨著 `position` 不同而變化！

- - -

### `position: static`, `relative`

containing block 為 ancestor 中，最接近的 block-level box（[之前的 slide](#/7/10)）。

### `position: fixed`

containing block 為 viewport。

### `position: absolute`

containing block 為 ancestor 中，[最接近而且 `position` 不是 `static` 的元素的 padding edge]((https://www.w3.org/TR/css-position-3/#def-cb))。

---

`position: absolute` 的寬度
---

`position: absolute` 的元素在寬度上，需要符合這個等式：

`left` + `margin-left` + `border-left-width` + `padding-left` + `width` + `padding-right` + `border-right-width` + `margin-right` + `right` = `width of containing block`

`left`, `right` 可以是 auto。

---

`position: absolute` 與 `left`, `right`
----------------------

`left`, `top`, `bottom`, `right`

* 距離 containing block 的 padding edge 的距離。
* 可以影響元素的寬或高。
* 若為百分比，以 containing block 的寬 or 高為 100%。

[[mrorz-css-posabs]]

`.child` 的第一個 `position != static` 祖先是 `.world`。

`.child` 的 containing block 是 `.world`。

因此 `.child` 的 `bottom`、`right` 是以 `.world` 為準。

---

`position: fixed`
----------------------

`left`, `top`, `bottom`, `right` 同 `position: absolute`

Containing block = 視窗內容（viewport）。

---

`position` 與容器高度
----------------------

`height: auto` 計算高度時，[只會計算 Normal flow 內的元素高度。](https://www.w3.org/TR/CSS22/visudet.html#normal-block)

[[mrorz-css-absnoheight]]
