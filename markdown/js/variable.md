變數（Variable）
-------------

<div class="row">
  <div class="span1">
    <figure>
      <img src="images/programming/drawer.jpg" alt="Drawer">
      <figcaption>
        <small>
        [圖片來源](http://www.123rf.com/photo_13322817_an-open-filing-drawer-containing-hanging-files-and-documents-labeled-abuse-reports--portrait-orienta.html)
        </small>
      </figcaption>
    </figure>    
  </div>
  <div class="span5">
    <ul>
      <li>一格抽屜</li>

      <li>外面寫著名字</li>

      <li>裡面放資料／<em>值（value）</em></li>
    </ul>
    
    <hr>

    <p class="fragment">
      用抽屜的名字來操作裡頭的值。
    </p>
  </div>
</div>

---

`var` 敘述
---------

### 建立新的抽屜

----
<div class="row">
<div class="span3">
  <pre><code>
  var count;
  </code></pre>

  <p>建立名為 `count` 的空抽屜</p>
</div>
<div class="span3">
  <pre><code>
  var count = 0;
  </code></pre>

  <p>建立 `count` 並把 0 放進去</p>
</div>
</div>

----

`=` ：設定（Assign）。（不是「等於」喔！）

把「`=`」右邊的值（資料），放進等號左邊的變數（抽屜）。

<p class="fragment">等號的左邊一定要是一個變數。</p>

---

`=`： Assignment Operator
------------------------

<div class="row">
  <div class="span5">
    <pre><code>
    count = count + 1;
    </code></pre>

    遞增 `count` 值，放回 `count`抽屜中。
  </div>
  <div class="span1">
    <figure>
      <img src="images/programming/counter.jpg" alt="Counter" width="100">
      <figcaption>
        <small>
        [圖片來源](http://www.trigonalworld.com/2011_07_01_archive.html)
        </small>
      </figcaption>
    </figure>
  </div>
</div>

---

其他運算子
------

* 負數 : `-` (如 `-35`)<br><small>執行結果：新數字</small>
* 算數 : `*` &nbsp; `/` &nbsp; `%` &nbsp; `+` &nbsp; `-`<br><small>執行結果：數字運算結果</small>
* 比大小 : `===`  &nbsp; `!==`  &nbsp; `<`  &nbsp; `>`  &nbsp; `<=` &nbsp;  `>=`<br><small>執行結果：`true` 或 `false`</small>

[[mrorz-js-operator?javascript,console]]

---

其他運算子
-------
* 邏輯運算 : `&&` &nbsp;  `||` &nbsp;  `!`<br><small>執行結果：`true` 或 `false`</small>
* 三元運算子 : `A ? B : C`<br><small>B、C 的執行結果擇一</small>
* 設定 : `=` &nbsp; `+=` &nbsp; `-=` &nbsp; `*=` &nbsp; `/=` &nbsp; `%=`<br><small>執行結果：等號左邊的變數值改變</small>

[[mrorz-js-operator2?javascript,console]]

---

資料型態 (Data Type)
------------------

<div class="row">
  <div class="span1">
    <figure>
      <img src="images/programming/drawer-type.jpg" alt="Drawer labels" width="200">
      <figcaption><small>
        [圖片來源](http://inmyownstyle.com/2013/03/how-to-age-brass-in-less-than-5-minutes.html)
      </small></figcaption>
    </figure>
    
  </div>
  <div class="span5">
    <p>抽屜裡可以放不同種類的東西。</p>

    <p>變數值（value）有數種<em>資料型態（Data type）</em>。</p>
  </div>
</div>

------

```
var count = 0;
```

`count` 抽屜裡放數字；

`count` 屬於 `Number` 這個 Javascript 資料型態。

---

常見資料型態
----------

<div class="row">
  <div class="span4 centered">
    <table border="1">
      <tr>
        <td>`Boolean`</td>
        <td>真假值（`true` 或 `false`）</td>
      </tr>
      <tr>
        <td>`Number`</td>
        <td>數字（小數 / 浮點數）</td>
      </tr>
      <tr>
        <td>`String`</td>
        <td>字串</td>
      </tr>
      <tr>
        <td>`Object`</td>
        <td>物件。Javascript 有一些特殊的物件，如陣列（`Array`）以及日期物件（`Date`）。</td>
      </tr>
    </table>
  </div>
</div>

[(MDN) Javascript Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

---

複習 & 小細節
----------

* `var` ：「我有一個變數叫......」
* 變數名稱大小寫有差
* 設定運算子 `=`、四則運算、比大小運算子

[[mrorz-js-var?javascript,console]]

* 變數可以是任何型態的東西<br>`var a = 3` 裡頭， `a` 的型態會是 `number`
* Javascript 為動態型別（dynamically typed）語言

---

練習：運算子
----------

請將 `console.log()` 裡的逗號改成 `>`、`<`、`>=`、`<=`、`===` 的其中一種，
讓按 run 時可以輸出四個 `true`。

[[uJagICe?javascript,console]]


[參考解答](http://jsbin.com/oSObIVo/latest/edit?javascript,console)

---

練習：二代健保計算機
----------

[[italiwu?javascript,console]]

<table>
  <tr>
    <th>範例輸入 (salary)</th>
    <th>按 Run 會印出</th>
  </tr>
  <tr>
    <td>
      <small>22000</small>
    </td>
    <td>
      <small>"雇主負擔金額" 440</small>
    </td>
  </tr>
  <tr>
    <td><small>10000</small></td>
    <td><small>"雇主負擔金額" 200</small></td>
  </tr>
  <tr>
    <td><small>31245</small></td>
    <td><small>"雇主負擔金額" 624.9</small></td>
  </tr>
</table>

----

[參考解答](http://jsbin.com/eRUWIJeQ/latest/edit?javascript,console)

---

練習：檢查帳號密碼長度
----------

[[ALayifE?javascript,console]]

<table>
  <tr>
    <th>範例輸入</th>
    <th>按 Run 會印出</th>
  </tr>
  <tr>
    <td><code>var name = "alice", pw = "1235813";</code></td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>var name = "bob", pw = "asdfg";</code></td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>var name = "carol", pw = "abc";</code></td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>var name = "ed", pw = "admin";</code></td>
    <td><code>false</code></td>
  </tr>
</table>

------

[參考解答](http://jsbin.com/uJEHUB/latest/edit?javascript,console)
