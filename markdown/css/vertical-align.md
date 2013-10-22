
表格裡的 Vertial align
---------------------
[[mrorz-css-tableva]]

---

一般的 vertical align
--------------------

Normal flow 的每一行的上下緣，由行內元素決定。

`vertical-align`：和此行上下緣的對齊方式。

[[mrorz-css-va]]

`vertical-align: top | middle | bottom...`

[其他值與 `vertical-align` 的介紹](http://css-tricks.com/what-is-vertical-align/)


---

一般的 vertical align (2)
------------------------

1. 最高的行內元素決定此行上下緣。
2. 個別元素之 `vertical-align` 定義和此行的對齊。

[[mrorz-css-va2]]

---

教練我想垂直置中
-------------

<div class="row">
  <div class="span2">
    <img class="borderless" src="images/css/vertical-centering.png" alt="垂直置中示意圖">
  </div>
  <div class="span4">
    [[equPoNU]]
  </div>
</div>

<p class="fragment">`<td>` 以外，<br>沒有 CSS property 能讓任意高度元素垂直置中。</p>
<ul class="fragment leader">
  <li>
    <a href="http://css-tricks.com/vertically-center-multi-lined-text/">用 `display: table-cell` 垂直置中</a>
  </li>
  <li>
    <a href="http://css-tricks.com/centering-in-the-unknown/">使用 ghost element 垂直置中</a>
  </li>
  <li>
    <a href="http://blog.yam.com/hanasan/article/35806444">中文總整理</a>
  </li>
</ul>
