怎麼寫
------
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>j</kbd> 打開 Javascript Console。

![Javascript console](images/js/console.png)

輸入一行 Javascript (黑色)，輸出一行回傳值 （藍色）

試試 `3+2`, `Math.sin(Math.PI)`, `0.1 + 0.2`

---

敘述
--------

Javascript 程式由一系列的敘述（statement）組成。

原則上先寫的先執行。

`console.log(東西)` → <b>在 Console 印出東西的敘述。</b>

[[mrorz-js-console?javascript,console]]

---

變數與型別
----------

* 「變數」（Variable）是保存「值」（Value）的容器。
* 用 `var` 敘述宣告變數：「我有一個變數叫......」。
* 變數名稱大小寫有差

[[mrorz-js-var?javascript,console]]

* 變數可以是任何型態的東西<br>`var a = 3` 裡頭， `a` 的型態會是 `number`
* Javascript 為動態型別（dynamically typed）語言

---

運算子
------

對變數做運算。

* 負數 : `-` (如 `-35`)
* 算數 : `*` &nbsp; `/` &nbsp; `%` &nbsp; `+` &nbsp; `-`
* 比大小 : `===`  &nbsp; `!==`  &nbsp; `<`  &nbsp; `>`  &nbsp; `<=` &nbsp;  `>=`
* 邏輯運算 : `&&` &nbsp;  `||` &nbsp;  `!`
* 三元運算子 : `? :`
* 指派 : `=` &nbsp; `+=` &nbsp; `-=` &nbsp; `*=` &nbsp; `/=` &nbsp; `%=`

[[mrorz-js-operator?javascript,console]]

---

註解
---

`/* 多行 */` 與 `// 單行`

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

文字轉數字
------

`parseInt(str, base)`

`parseFloat(str)`

<div class="row">
    <div class="span3 centered">
![parseInt](images/js/parseInt.png)
    </div>
</div>

---

JavaSCRIPT
------
寫在一個檔案裡面，才有「腳本」的 FU

<div class="fragment">
  用 <code>&lt;script type="text/javascript"&gt;&lt;/script&gt;</code> 包住，放在 HTML 裡

[[mrorz-js-scripttag?html,console]]

</div>


---

Javascript file
---------------

* 另外寫成一個 *.js 檔
*  <code>&lt;script type="text/javascript" src="路徑與檔名"&gt;&lt;/script&gt;</code>

[[mrorz-js-include]]


<div class="fragment">
`<script>` 寫在 `<head>` 或 `<body>` 裡都可以。<br>瀏覽器一讀到就會立即執行（Load-and-go）。
</div>

<div class="fragment">建議寫在 `</body>` 之前。</div>

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