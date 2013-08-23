兩個定義打架
----------

Value 不同的兩個定義，被套用在同一個元素上時……

[[mrorz-css-fight]]

---

CSS Specificity
---------------

Specificity：Selector 精準與否

![Specificity](images/css/specificity-calculationbase.png)

Source: [CSS Tricks](http://css-tricks.com/specifics-on-css-specificity/)

用字典順序比較 Specificity。

Specificity 相同的話，後定義者蓋過之前定義者。

---

打架調解委員會
--------
[[mrorz-css-fight]]

<div class="row">

  <div class="span3">
    <small>
      <ul>
        <li class="fragment">此 <code>div</code> 會被 selector <code>.loud</code> 和 <code>div</code> 選中</li>
        <li class="fragment">兩 CSS 定義內均設有 <code>color</code></li>
        <li class="fragment">Specificity of <code>.loud</code> : 0,0,1,0</li>
        <li class="fragment">Specificity of <code>div</code> : 0,0,0,1</li>
        <li class="fragment"><em>0,0,1,0 > 0,0,0,1</em><br>故套用 <code>.loud</code> 對 <code>color</code> 的定義</li>
      </ul>
    </small>
  </div>

  <div class="span3 fragment">![](images/css/override.png)</div>

</div>

---

練習
----

![](images/css/cssspecificity-calc-1.png)

---

練習
----
![](images/css/cssspecificity-calc-4.png)

---

Takeaway
--------

Specificty 越小越好

* 盡量用可重複使用的 class
```CSS
  .btn, .panel, .media-box
```
* ID 用於分開不重複區塊
```CSS
  #header .title
```
* Decendent / Child selector 別太深
```CSS
  #header .banner nav ul li .title /* Avoid! */
```
