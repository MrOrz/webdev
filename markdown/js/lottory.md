我們現在會了
---------

* `var` 定義變數
* 變數：`Boolean`、數字、字串、`function`。
* 一些 function：`parseInt`、`"字串".length`…

<div class="fragment">

<hr>

<h3>還沒正式教，但讀得懂</h3>

「若 A 就 B，不然 C」
<p>
`if( A ){ B }else{ C }` 
</p>
</div>

---

`Math.random()`
-----------

產生 `0` ~ `1` 之間的亂數。

[[mrorz-js-consoleonly?console]]

-----

<p class="fragment">有這個能做什麼？</p>

---

猜數字遊戲！
--------

1. 改 `input` 變數。
2. 按 Run。
3. 在 `console` 看結果。

[[mrorz-js-game]]

---

遊戲？沒感覺
---------

<svg width="400" height="100" xmlns="http://www.w3.org/2000/svg">
 <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
 <defs>
  <marker id="se_marker_end_svg_6" markerUnits="strokeWidth" orient="auto" viewBox="0 0 100 100" markerWidth="5" markerHeight="5" refX="50" refY="50">
   <path id="svg_17" d="m100,50l-100,40l30,-40l-30,-40l100,40z" fill="#1c1a1a" stroke="#1c1a1a" stroke-width="10"/>
  </marker>
  <marker id="se_marker_end_svg_7" markerUnits="strokeWidth" orient="auto" viewBox="0 0 100 100" markerWidth="5" markerHeight="5" refX="50" refY="50">
   <path id="svg_20" d="m100,50l-100,40l30,-40l-30,-40l100,40z" fill="#1c1a1a" stroke="#1c1a1a" stroke-width="10"/>
  </marker>
 </defs>
 <g>
  <title>Layer 1</title>
  <path fill="#000000" stroke="#000000" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m202.37,53.16499l0,-0.81248l0,0c0,-0.03452 0.02803,-0.0625 0.0625,-0.0625l0.75,0c0.03456,0 0.0625,0.02798 0.0625,0.0625c0,0.03452 -0.02794,0.0625 -0.0625,0.0625l-0.0625,0l0,0.81248c0,0.03453 -0.02794,0.0625 -0.06247,0.0625l-0.75003,0l0,0c-0.03447,0 -0.0625,-0.02797 -0.0625,-0.0625c0,-0.0345 0.02803,-0.0625 0.0625,-0.0625l0.0625,0zm0.125,-0.87498l0,0c0.03456,0 0.06253,0.02798 0.06253,0.0625c0,0.03452 -0.02797,0.0625 -0.06253,0.0625c-0.01724,0 -0.03125,-0.01399 -0.03125,-0.03125c0,-0.01726 0.01401,-0.03125 0.03125,-0.03125l0.06253,0m0.62497,0.0625l-0.6875,0m-0.125,0.74998l0,0c0.01727,0 0.03125,0.01401 0.03125,0.03125c0,0.01726 -0.01398,0.03125 -0.03125,0.03125l0.0625,0m-0.0625,0.0625l0,0c0.03456,0 0.0625,-0.02797 0.0625,-0.0625l0,-0.0625" id="svg_9"/>
  <g id="program2">
   <path fill="#000000" stroke="#fcf9f9" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m163.75,79.74998l0,-63.37496l0,0c0,-2.6925 2.63055,-4.87502 5.875,-4.87502l70.5,0c3.24445,0 5.875,2.18251 5.875,4.87502c0,2.69263 -2.63055,4.87502 -5.875,4.87502l-5.87646,0l0,63.37495c0,2.69255 -2.62909,4.87503 -5.87357,4.87503l-70.49998,0l0,0c-3.24443,0 -5.87497,-2.18248 -5.87497,-4.87503c0,-2.69217 2.63054,-4.875 5.87497,-4.875l5.87503,0l-0.00002,0l0,-0.00002l0,0.00001zm11.75,-68.24998l0,0c3.24445,0 5.875,2.18251 5.875,4.87502c0,2.69264 -2.63055,4.87502 -5.875,4.87502c-1.62219,0 -2.9375,-1.09138 -2.9375,-2.43752c0,-1.34628 1.31531,-2.4375 2.9375,-2.4375l5.875,0m58.75,4.87502l-64.625,0m-11.75,58.49995l0,0c1.62225,0 2.93753,1.0914 2.93753,2.43752c0,1.34637 -1.31528,2.43748 -2.93753,2.43748l5.875,0m-5.875,4.87502l0,0c3.24448,0 5.875,-2.18248 5.875,-4.87502l0,-4.875" id="svg_8"/>
   <text fill="#ffffff" stroke="#fcf9f9" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="199.99532" y="48.56282" font-size="18" font-family="Monospace" text-anchor="middle" xml:space="preserve" id="svg_11">判斷</text>
   <text xml:space="preserve" text-anchor="middle" font-family="Monospace" font-size="18" id="svg_2" y="70.5" x="200" stroke-width="0" stroke="#fcf9f9" fill="#ffffff">輸贏</text>
  </g>
  <g id="input2">
   <line fill="none" stroke="#1c1a1a" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="110.25" y1="51.78125" x2="148.26316" y2="51.78125" marker-end="url(#se_marker_end_svg_6)" id="svg_18"/>
   <text xml:space="preserve" text-anchor="middle" font-family="Monospace" font-size="18" id="svg_1" y="56.5" x="80" stroke-width="0" stroke="#fcf9f9" fill="#0c0c0c">猜的數字</text>
  </g>
  <g id="output2">
   <line fill="none" stroke="#1c1a1a" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="243.24342" y1="51.28125" x2="281.25658" y2="51.28125" marker-end="url(#se_marker_end_svg_7)" id="svg_21"/>
   <text xml:space="preserve" text-anchor="middle" font-family="Monospace" font-size="18" id="svg_25" y="57" x="339" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#fcf9f9" fill="#0c0c0c">輸贏訊息</text>
  </g>
 </g>
</svg>

輸入：改變數，然後按「run」。

輸出：看 `console` 裡的結果。

<p class="fragment">
  沒有遊戲對使用者的輸入輸出介面長這樣的啦～
</p>

---

彈出式視窗
----------
`alert`, `confirm`, `prompt`

[[mrorz-js-alert?javascript,live]]

---

快樂<small>(寫)</small>遊戲時間
-------

1. 按 Run
2. 用 `prompt` 讓使用者輸入一個 0 ~ 2 數字
3. 輸出「你猜對了！好厲害！」或「正確答案是 X 喔。」。

[[mrorz-js-game]]

------

[參考答案](http://jsbin.com/ahAkiMO/latest)