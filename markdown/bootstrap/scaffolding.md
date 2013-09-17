預設全域外觀
----------

* 需要 `<!DOCTYPE html>`
* CSS Normalize


[Scaffolding - Global Styles](http://getbootstrap.com/2.3.2/scaffolding.html#global)

---

12 欄網格設計
--------

![Grid on](images/bootstrap/grid-design.png)

---

12 欄網格設計
--------

![Grid off](images/bootstrap/grid-design2.png)

---

`row` & `spanN`
---------------

[[mrorz-bootstrap-zen]]

[Scaffolding - Grid System](http://getbootstrap.com/2.3.2/scaffolding.html)

---

細查 Bootstrap Grid 紋理
---------------
<div class="row">
  <div class="centered span4">
    ![Inspecting grid](images/bootstrap/span.png)
  </div>
</div>


<ul>
  <li class="fragment">`.span*` 有 `float: left`、`margin-left`。</li>
  <li class="fragment">`.spanN` 不同 N 有不同寬度。</li>
  <li class="fragment">`.row` 做 Clear-fix。</li>
</ul>


---

Container
---------

固定寬度、垂直置中。

[[mrorz-bootstrap-zen-container]]

[Scaffolding - Layouts](http://getbootstrap.com/2.3.2/scaffolding.html#layouts)

---

bootstrap-responsive.css
---------

對不同螢幕寬度，設定不同 `.span*`, `.container` 寬。

[[mrorz-bootstrap-responsive]]

[Scaffolding - Layouts](http://getbootstrap.com/2.3.2/scaffolding.html#layouts)

---

Nested Columns
---------------

[[mrorz-bootstrap-nested]]

在 `.row .spanN` 裡還可以有 `.row`。

內層的 `.spanM` 欄數加起來 `<= N`


---

`row-fluid` 與 `spanN`
-----------------------

寬度以百分比 `%` 代替 `px`。

[Scaffolding - Fluid Grid System](http://getbootstrap.com/2.3.2/scaffolding.html#fluidGridSystem)

---

Nested Columns in row-fluid
---------------

[[mrorz-bootstrap-nested-fluid]]

在 `.row .spanN` 裡還可以有 `.row-fluid`。

`.row-fluid` 內層的 `.spanM` 欄數加起來 `<= 12`

---

範例
----

![Phone grid](images/bootstrap/phone-grid.png)

[[mrorz-bs-demo]]