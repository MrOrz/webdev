重複的程式碼
--------------

回到之前的範例：

[[aHeyUjU?javascript,console]]

---

重複的程式碼
----------

給定年齡（yearsOld）與性別（sex），告訴我要不要當兵。
```javascript
var shouldGo = sex === 'Male' && yearsOld >= 19 && yearsOld <= 36;

console.log("Should go military?", shouldGo);
```

<div class="fragment">
  <hr>
  複製貼上程式碼的問題：
  <ul>
    <li class="fragment">一眼看不出是在檢查兵役</li>
    <li class="fragment">未來兵役規則改變時，全部都要跟著改</li>
  </ul>

</div>


---

規律：輸入與輸出
--------

給定年齡（yearsOld）與性別（sex），告訴我要不要當兵。

```javascript
var shouldGo = sex === 'Male' && yearsOld >= 19 && yearsOld <= 36;

console.log("Should go military?", shouldGo);
```

-----

<svg width="400" height="100" xmlns="http://www.w3.org/2000/svg" class="fragment">
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
   <text fill="#ffffff" stroke="#fcf9f9" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="199.99532" y="48.56282" font-size="18" font-family="Monospace" text-anchor="middle" xml:space="preserve" id="svg_11">檢查</text>
   <text xml:space="preserve" text-anchor="middle" font-family="Monospace" font-size="18" id="svg_2" y="70.5" x="200" stroke-width="0" stroke="#fcf9f9" fill="#ffffff">機制</text>
  </g>
  <g id="input2">
   <line fill="none" stroke="#1c1a1a" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="110.25" y1="51.78125" x2="148.26316" y2="51.78125" marker-end="url(#se_marker_end_svg_6)" id="svg_18"/>
   <text xml:space="preserve" text-anchor="middle" font-family="Monospace" font-size="18" id="svg_1" y="56.5" x="80" stroke-width="0" stroke="#fcf9f9" fill="#0c0c0c">年齡性別</text>
  </g>
  <g id="output2">
   <line fill="none" stroke="#1c1a1a" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="243.24342" y1="51.28125" x2="281.25658" y2="51.28125" marker-end="url(#se_marker_end_svg_7)" id="svg_21"/>
   <text xml:space="preserve" text-anchor="middle" font-family="Monospace" font-size="18" id="svg_25" y="57" x="339" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#fcf9f9" fill="#0c0c0c">顯示訊息</text>
  </g>
 </g>
</svg>

---

Function
--------

[n.] 1. 數學函式 2. 功能

----

把功能包裝成一個 `Function`，以後只要呼叫此 `Function` 就能作一樣的事情。

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
   <text fill="#ffffff" stroke="#fcf9f9" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="199.99532" y="48.56282" font-size="18" font-family="Monospace" text-anchor="middle" xml:space="preserve" id="svg_11">檢查</text>
   <text xml:space="preserve" text-anchor="middle" font-family="Monospace" font-size="18" id="svg_2" y="70.5" x="200" stroke-width="0" stroke="#fcf9f9" fill="#ffffff">函式</text>
  </g>
  <g id="input2">
   <line fill="none" stroke="#1c1a1a" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="110.25" y1="51.78125" x2="148.26316" y2="51.78125" marker-end="url(#se_marker_end_svg_6)" id="svg_18"/>
   <text xml:space="preserve" text-anchor="middle" font-family="Monospace" font-size="18" id="svg_1" y="56.5" x="80" stroke-width="0" stroke="#fcf9f9" fill="#0c0c0c">年齡性別</text>
  </g>
  <g id="output2">
   <line fill="none" stroke="#1c1a1a" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="243.24342" y1="51.28125" x2="281.25658" y2="51.28125" marker-end="url(#se_marker_end_svg_7)" id="svg_21"/>
   <text xml:space="preserve" text-anchor="middle" font-family="Monospace" font-size="18" id="svg_25" y="57" x="339" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#fcf9f9" fill="#0c0c0c">顯示訊息</text>
  </g>
 </g>
</svg>

```
// printMilitaryInfo 是一個變數，存著一個 function
var printMilitaryInfo = function(yearsOld, sex) {
  var shouldGo = sex === 'Male' && yearsOld >= 19 && yearsOld <= 36;

  console.log("Should go military?", shouldGo);
};
```

---

使用包裝好的 Function：
```
函數名(input)
```

-----

設定一個 Function：
```
// 把 input 取名為 yearsOld 和 sex
var 函數名 = function(yearsOld, sex) {
  // 進行判斷
  var shouldGo = sex === 'Male' && yearsOld >= 19 && yearsOld <= 36;
  // 輸出 
  console.log("Should go military?", shouldGo);
};
```

[[ANabeJA?javascript,console]]

---


單一 Output
----------

`return` 敘述：把運算結果傳出去。

[[eJUKod?javascript,console]]

`return` 後面的值，

會變成 `shouldGoMilitary(...)` 的值。

---

運用 Output 
----------

若得知 Bob 是否有當過兵，那 Bob 是否能出國讀書？

[[UyITeXU?javascript,console]]

Function 可以……

* 讓程式很好讀。
* 要修改也很容易。

---

這些也是函式！
---------

瀏覽器的製作者幫我們寫好的 Function。

* `parseInt(文字, 底數)`：input 文字，output 數字
* `console.log(資料)`：input 資料，在終端機把資料印出來。
* `str.indexOf(想找的字串)`：input 想找的東西，output 其在 `str` 的位置

---

LearnStreet 練習時間
--------

[LearnStreet](http://www.learnstreet.com/student/join/o4laIoVQ) 的「Function」

![Lean street If](images/js/ls-function.png)
約需 18 分鐘。

若程式跑不出來，請先把程式貼到 [JSHint](http://www.jshint.com) 檢查語法。