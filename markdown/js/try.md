怎麼寫
------
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>j</kbd> 打開 Javascript Console。

![Javascript console](images/js/console.png)

輸入一行 Javascript (黑色)，輸出一行回傳值 （藍色）

試試 `3+2`, `Math.sin(Math.PI)`, `0.1 + 0.2`

---

變數與型別
----------
* Javascript 為弱型別（weak typing）語言
* 用 `var` 敘述定義變數
* 變數可以是任何型態的東西<br>`var a = 3`：`a` 的型態會是 `number`
* 大小寫有差

```javascript
var a = "str", A; // a != A
a = 3; // 換型態
```


---

運算子
------

* 負數 : `-` (如 `-35`)
* 算數 : `*` &nbsp; `/` &nbsp; `%` &nbsp; `+` &nbsp; `-`
* 比大小 : `===`  &nbsp; `!==`  &nbsp; `<`  &nbsp; `>`  &nbsp; `<=` &nbsp;  `>=`
* 邏輯運算 : `&&` &nbsp;  `||` &nbsp;  `!`
* 三元運算子 : `? :`
* 指派 : `=` &nbsp; `+=` &nbsp; `-=` &nbsp; `*=` &nbsp; `/=` &nbsp; `%=`



---

文字與數字
------
* 數字 `+` 數字 是加法。
* 任何東西 `+` 字串、字串 `+` 任何東西：字串串接
* 轉字串時會嘗試呼叫其 toString 方法

<div class="row">
    <div class="span3 centered">
        ![字串加數字等於字串](images/js/string-number.png)
    </div>
</div>

---

文字與數字
------

`parseInt(str, base)`, `parseFloat(str, base)` : 文字轉數字

<div class="row">
    <div class="span3 centered">
![parseInt](images/js/parseInt.png)
    </div>
</div>

---

輸出文字
--------
* `console.log(東西)` → <b>寫進 Console。</b><br> 若東西是陣列或物件，可以看到內容。
* `document.write(東西)` → <b>把東西轉成字串，寫進 HTML。</b>

<div class="fragment">
通常<strong>不會</strong>使用 `document.write`。<br> 這個教學網頁用 `document.write` 印出資料當作示例，但開發時一般用更方便的 `console.log`。
</div>


---

JavaSCRIPT
------
寫在一個檔案裡面，才有「腳本」的 FU

<div class="fragment">
  用 <code>&lt;script type="text/javascript"&gt;&lt;/script&gt;</code> 包住，放在 HTML 裡

<pre><code> &lt;script type="text/javascript"&gt;
  document.write("script 標籤裡好溫暖喔 (羞)");
&lt;/script&gt;
</code></pre>


</div>


---

Javascript file
---------------

* 另外寫成一個 *.js 檔
*  <code>&lt;script type="text/javascript" src="路徑與檔名"&gt;&lt;/script&gt;</code>

<pre><code>&lt;script type="text/javascript" src="sample/included.js"&gt;&lt;/script&gt;
<p>我是內文</p>
</code></pre>

<div class="fragment">
`<script>` 寫在 `<head>` 或 `<body>` 裡都可以。<br>瀏覽器一讀到就會立即執行（Load-and-go）。
</div>


---

Javascript file (續)
--------------------
JS 檔和 HTML 檔同目錄
![JS 檔案結構](images/js/js-hierachy.jpg)

執行結果：
![JS 檔案結構](images/js/js-test.jpg)


---

Javascript file (續)
--------------------
JS 檔和 HTML 檔不同目錄
![JS 檔案結構](images/js/js-hierachy2.jpg)