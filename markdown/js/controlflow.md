程式執行
--------

從上往下，一行一行跑

控制只有「部分」會執行：`if` 條件式

控制「某部分重複執行」：`for` 迴圈

---

`if` 條件
--------

`if` - `else if` - `else`

[[mrorz-js-if?javascript,console]]

---

LearnStreet 練習時間
--------

[LearnStreet](http://www.learnstreet.com/student/join/o4laIoVQ) 的「Control Structures」

![Lean street If](images/js/ls-if.png)

約需 16 分鐘。

---

`for` 迴圈
-----------

```
for(;;){
  …重複執行的程式碼…
}
```
------
把下面程式貼進 Javascript 控制台

```
for(;;){
  console.log("一直一直執行呀～");
}
```

---

You need a `break`
-----------

從 0 印到 9 的範例。

[[efoGerO?javascript,console]]

`break` 敘述可以跳出迴圈。

---

範例：手機號碼
-----------

[[mrorz-js-numcheck?javascript,console]]

<p class="fragment">來實作 `numCheck` 吧！</p>

---

逐字檢查 (1)
-------

先檢查「整個字串僅含阿拉伯數字與 "-"」。

[[OROFefe?javascript,console]]

註：Javascript 字串可以用 `<`、`>`，比字典順序。

---

逐字檢查 (2)
------

加入判斷「數字要有 10 個」

[[AJETOfa?javascript,console]]

---

成品
-----

[[iSIHoBa?javascript,console]]


---

`for` 迴圈與 `while` 迴圈
--------------------

<div class="row">
  <div class="span3">
    <pre><code class="javascript">for(;;){
  if(要跳出){break;}

  …重複執行的程式碼…
}</code></pre>

  </div>
  <div class="span3">
    <pre><code class="javascript">while(不要跳出){
  …重複執行的程式碼…
}</code></pre>    

  </div>
</div>

從 0 印到 9 的範例。

[[InoCOmI?javascript,console]]

---

`for` 迴圈細節 (1)
--------------------

<div class="row">
  <div class="span3">
    <pre><code class="javascript">初始化;
for(;;){
  if(要跳出){break;}

  …重複執行的程式碼…
}</code></pre>

  </div>
  <div class="span3">
    <pre><code class="javascript">for(初始化; 繼續條件; 條件改變){
  …重複執行的程式碼…
}</code></pre>    

  </div>
</div>

[[otEceku?javascript,console]]

<p class="fragment">
`for` 迴圈 `( )` 完整描述了迴圈的運作，<br>`{ }` 裡頭只要放真正的執行邏輯。
</p>

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

LearnStreet 練習時間
--------

[LearnStreet](http://www.learnstreet.com/student/join/o4laIoVQ) 的「Loops」

![Lean street If](images/js/ls-if.png)

約需 16 分鐘。

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

多層 `for` 迴圈
----

[[mrorz-js-nestedloop?javascript,console]]

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

---

`switch` - `case`
-----------

記得 `break;`

[[mrorz-js-switch?javascript,console]]
