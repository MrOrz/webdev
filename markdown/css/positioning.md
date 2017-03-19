Normal Flow
--------

文字由左邊往右邊，超過邊界就折到下一行

[[mrorz-css-normalflow]]

由上而下、由左而右 → **Normal Flow**

`display: block` 之元素垂直排列，<br>`display: inline / inline-block` 之元素水平排列。

---

`position: absolute`
----------------------

[[mrorz-css-abs]]

被無視。

---

`position: fixed`
-----------------

[[mrorz-css-fixed]]

<p>不但被無視，還陰魂不散。</p>

---

從 normal flow 起飛
------------------

[[mrorz-css-flyingcode]]

使 `.outer` 變為 float 或 absolute positioning，可以脫離 normal flow。

---

3 [Positioning Schemes](https://www.w3.org/TR/css-position-3/#pos-sch)
---------------------

### Normal Flow

  `position: static` | `relative;`<br>
  `float: none`;

### Floats

  `float: left` | `right`

### Absolute Positioning

  `position: absolute` | `fixed`

---

<h2 class="trailer">`position: absolute`</h2>

* `position: absolute`: 相對於 [containing block](https://www.w3.org/TR/css-position-3/#def-cb)
* `position: fixed`: 相對於瀏覽器網頁視窗（viewport）

<aside>
position: absolute 的 containing block
</aside>

- - -

### 套用 Normal flow

* `position: relative`: 不安份亂動
* `position: static`: 預設值


---

<h2 class="trailer">`position: fixed`</h2>


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

[`position: relative`](https://www.w3.org/TR/css-position-3/#rel-pos)
----------------------

`left`, `top`, `bottom`, `right`

* 挪動自己 box 的距離。
* `left`、`right` 之中只能設定一個；`top`、`bottom` 之中只能設定一個。無論如何元素寬度與高度都不會被影響。
* 若為百分比，以 containing block 的寬 or 高為 100%。

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

---

`float`：文繞圖
-----

[[ajIKaf]]

---

細說 `float`
----------------------

[[mrorz-css-floatsurround]]

- 文字圍繞 floated elements。
- 複數個 float 會比鄰而居。
- 設置 `clear` 屬性可終止圍繞。

---

細說 `float` (2)
----------------------
不會撐開 parent，要 clear <br>或用 `overflow: auto|hidden`。

[[mrorz-css-floatnoheight]]

---

`position`, `display` & `float` [力氣排行榜](https://www.w3.org/TR/css-position-3/#dis-pos-flo)
--------

[[mrorz-css-strength]]

<p>上面的屬性會蓋過下面的。</p>
<small>
<dl class="row">
  <dt class="span3" style="text-align: right;"><code>display: none</code></dt>
  <dd class="span3" style="text-align: left;">元素整個藏起來，連 box 都沒有。</dd>
  <dt class="span3" style="text-align: right;"><code>position: absolute | fixed</code></dt>
  <dd class="span3" style="text-align: left;">元素可指定寬高，離開 normal flow。</dd>
  <dt class="span3" style="text-align: right;"><code>float: left | right</code></dt>
  <dd class="span3" style="text-align: left;">元素可指定寬高，離開 normal flow，文繞圖。</dd>
  <dt class="span6"><code>display: block | inline | inline-block | ...</code></dt>
</dl>
</small>
