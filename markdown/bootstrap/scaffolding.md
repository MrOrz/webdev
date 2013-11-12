12 欄網格設計
--------

![Grid on](images/bootstrap/grid-design.png)

---

12 欄網格設計
--------

![Grid off](images/bootstrap/grid-design2.png)

---

`row` & `col-md-N`
---------------

[[mrorz-bootstrap-zen]]

[CSS - Grid System](http://getbootstrap.com/css/#grid-intro)

---

細查 Bootstrap Grid 紋理
---------------
<div class="row">
  <div class="centered span4">
    ![Inspecting grid](images/bootstrap/span.png)
  </div>
</div>


<ul>
  <li class="fragment">`.col-md-*` 有 `float: left`、 左右 `padding`、百分比寬度。</li>
  <li class="fragment">`.col-md-N` 不同 N 有不同寬度。</li>
  <li class="fragment">`.row` 做 Clear-fix。</li>
</ul>

---

`md`
-----

螢幕寬度不大於 `992px` 時：垂直排列

螢幕寬度大於 `992px` 時：水平排列

另有 `.col-xs-*`、`.col-sm-*`、`.col-lg-*`

[Grid Options](http://getbootstrap.com/css/#grid-options)

---

Container
---------

整個 Layout 固定寬度、水平置中。

[[mrorz-bootstrap-zen-container]]

[Scaffolding - Layouts](http://getbootstrap.com/2.3.2/scaffolding.html#layouts)

---

Container is Responsive
---------

對不同螢幕寬度，設定不同 `.container` 寬。

[[mrorz-bootstrap-zen-container]]

---

Nested Columns
---------------

[[mrorz-bootstrap-nested]]

在 `.row .col-md-*` 裡還可以有 `.row`。

內層的 `.col-md-*` 欄數加起來 `= 12`

---

範例
----

![Phone grid](images/bootstrap/phone-grid.png)

[[mrorz-bs-demo]]