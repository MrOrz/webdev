[Positioning Schemes](https://www.w3.org/TR/css-position-3/#pos-sch)
---------------------

### Normal Flow

`position: static` | `relative;`<br>
`float: none`;

- - -

除了 Normal flow 之外，還有：

<br>

### Absolute Positioning

`position: absolute` | `fixed`

<div class="fragment grow">
<h3>Floats</h3>

`float: left` | `right`
</div>

---

Floats
------------------

[[mrorz-css-flyingcode]]

使 `.outer` 變為 float 或 absolute positioning，可以脫離 normal flow。

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
