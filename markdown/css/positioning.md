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

<h2 class="trailer">`position: absolute`</h2>

* `position: absolute`: 相對於 [containing block](https://www.w3.org/TR/css-position-3/#def-cb)
* `position: fixed`: 相對於瀏覽器網頁視窗（viewport）

<aside>
position: absolute 的 containing block
</aside>

- - -

### Normal flow

* `position: relative`: 不安份亂動
* `position: static`: 預設值


---

`position` 與位置們
----------------------

`position` 為 `absolute`, `fixed`, `relative` 時，

可用 `left`, `top`, `bottom`, `right` 調整元素與其 containing block 的相對位置。

⋯⋯但 `position: fixed` 與 `position: absolute` 元素的 [containing block 定義不同](https://www.w3.org/TR/css-position-3/#def-cb)！

[[mrorz-css-lefttop]]

<aside>
  absolute, fixed 為 absolute positioning
  relative 為 normal flow

  兩種 positioning scheme 底下

</aside>

---

`position: absolute`
----------------------

`left`, `top`, `bottom`, `right`

* 距離 containing block 的 padding edge 的距離。
* 可以影響元素的寬或高。
* 若為百分比，以 containing block 的寬 or 高為 100%。

Containing block = 包含此元素的最接近的、`position` 不為 `static` 的 box。

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

 `position: absolute || relative` 的元素不會撐開 parent block。

（[計算 parent 高度](https://www.w3.org/TR/CSS22/visudet.html#normal-block)時不計入 `position: absolute` 與 `position: relative` 的子元素」）

[[mrorz-css-absnoheight]]
