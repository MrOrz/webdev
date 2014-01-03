
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

---


Input 的數量
-----------

`function` 的 input 可以有很多個。

[[AHICoMe?javascript,console]]

---



課堂練習：無限猜數字
------

* 一樣猜 1 ~ 3 的數字
* 一樣用 `alert` 告知結果
* 告知結果後，再次請使用者猜數字
* 若使用者按取消（`prompt`回傳`null`），跳出迴圈

[[eZiXoCI?javascript,console]]

[參考答案](http://jsbin.com/eSAwEWU/latest/edit)

---

`for` 迴圈細節 (2)
----

從 0 印到 3 的範例。

<div class="row">
  <div class="span3">
<pre><code class="javascript">var i=0;
for(;;){
  if ( i>=4 ) { break; }
  ...
  i += 1;
}
</code></pre>
  </div>
  <div class="span3">
<pre><code class="javascript">for(初始化; 繼續條件; 條件改變){
  ...
}
</code></pre>

<pre><code class="javascript">var i;
for(i=0; i<4; i+=1){ ... }
</code></pre>
  </div>
</div>


[[mrorz-js-loopdetail?javascript,console]]


---

Labeled Break
-------------

迴圈前可以加上 label 如下：

```
  outerLoop: for(;;){
    ……
      if(...){
        break outerLoop;
      }
      if(...){
        continue outerLoop;
      }
    ……
  }
```

