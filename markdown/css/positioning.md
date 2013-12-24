Normal Flow
--------

文字由左邊往右邊，超過邊界就折到下一行

[[mrorz-css-normalflow]]

由上而下、由左而右 → **Normal Flow**

`display: block` 之元素垂直排列，<br>`display: inline / inline-block` 之元素水平排列。

---

float
-----

[[mrorz-css-float]]

原地向左跑到底，被包圍。

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

3 Positioning Schemes
---------------------

### Normal Flow

  `position: static` | `relative;`<br>
  `float: none`;

### Floats

  `float: left` | `right`

### Absolute Positioning

  `position: absolute` | `fixed`

---

力氣排行榜
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

---

<h2 class="trailer">細說 `position`</h2>

### 使元素變成 absolute positioning

* `absolute`: 相對於第一個非 `static` 的祖先 (containing block)
*  `fixed`: 相對於瀏覽器網頁視窗（viewport）

- - -

### 使元素仍在 normal flow

* `relative`: 不安份亂動
* `static`: 預設值

---

`position: absolute`
----------------------

[[mrorz-css-posabs]]

`.child` 的第一個 `position != static` 祖先是 `.world`。

`.child` 的 containing block 是 `.world`。

因此 `.child` 的 `bottom`、`right` 是以 `.world` 為準。

---

細說 `position` (2)
----------------------

`position` 為 `absolute`, `fixed`, `relative` 時，

可用 `left`, `top`, `bottom`, `right` 調位置。

[[mrorz-css-lefttop]]

---

細說 `position` (3)
----------------------

Absolute positioning 的元素不會撐開 parent block。

[[mrorz-css-absnoheight]]

---

`float`：文繞圖
-----

[[ajIKaf]]

---

細說 `float`
----------------------

[[mrorz-css-floatsurround]]

  - Normal flow 中的 box 圍繞 floated elements。
  - 複數個 float 會比鄰而居。
  - 設置 `clear` 屬性可終止圍繞。

---

細說 `float` (2)
----------------------
不會撐開 parent，要 clear <br>或用 `overflow: auto|hidden`。

[[mrorz-css-floatnoheight]]
