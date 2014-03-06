側欄
----
想要做的[目標網頁](http://www.csszengarden.com/?cssfile=001/001.css)

![範例](images/css/practice.png)

`.sidebar` 佔據螢幕右邊 33%

---

側欄 - 作法一
--------

![範例](images/css/practice.png)

左欄：`.intro` 與 `.main`；右欄：`.sidebar`

- - -

把 `.intro` 和 `.main` 包起來、然後水平排列左欄和右欄

水平排列 → `float` 或 `display: inline-block`

---

側欄 - 作法二
--------

![範例](images/css/practice.png)

左欄：`.intro` 與 `.main`；右欄：`.sidebar`

- - -

不修改 HTML 的作法

`.intro` 和 `.main` 66%

右欄 `position: absolute` 移到視窗右邊

---

下拉式選單
--------

[範例結果](sample/css/menu.html)（[範例 CSS 檔](sample/css/menu.css)）

<ul>
  <li class="fragment">橫向排列的 `li` 元素<br>
    <ul>
      <li>可以用 `float`</li>
      <li>可以用 `display: inline-block`</li>
    </ul>
  </li>
  <li class="fragment">巢狀 list: `<li>` 裡可以有 `<ul>`</li>
  <li class="fragment">`:hover` magic</li>
</ul>
