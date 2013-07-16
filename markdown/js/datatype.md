保留字 & `關鍵字`
-----------
不能當作變數名稱、屬性名稱的字。

abstract boolean `break` byte `case` `catch` char class const `continue`
debugger `default` `delete` `do` double `else` enum export extends
`false` final finally float `for` `function`
goto `if` implements import `in` `instanceof` int
interface long native `new` `null` package private protected public `return`
short static super `switch` synchronized
`this` `throw` throws transient `true` `try` `typeof`
`var` volatile `void` `while` `with`


---

String 字串
-----------

* 單引號(")、雙引號(')效果相同
* `\'`,  `\"`, `\\`,  `\n`
* `length` 屬性：長度
* 無法修改字串 (immutable)。
* UCS-2 編碼 （UTF-16 的前身）
* [屬性與方法](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String#String_instances)

[[mrorz-js-string?javascript,console]]

---

Function 函數
-----------

<div class="fragment">

`sin(π/6)` 回傳 `0.5` <br>

`log(e)` 回傳 `1`

</div>

<p class="fragment">
`parseInt("ff", 16)` 回傳 `255`
</p>

<p class="fragment">
`console.log("字串")` 回傳 `undefined` ，但是會印東西
</p>

---

Function 函數
-----------

建一個函數：

`function 函式名 (引數們) { ... }`

`var 函數名 = function (引數們) { ... }`

呼叫一個函數：
`函數名(要傳的引數)`

<ul class="fragment">
  <li>函數可以像變數一樣被丟來丟去。</li>
  <li>無法像 C 那樣指定引數預設值。</li>
  <li>呼叫時引數的個數，和函數定義的引數個數可以不一樣。</li>
</ul>

---

課堂練習：判斷質數的函式
--------------------

請把剛剛「找到 2 ~ N 的所有質數」之中，<br>判斷質數的部分包成 function。

[[mrorz-js-primefunc?javascript,console]]


---


Function 函數
-----------

[[mrorz-js-func?javascript,console]]

把 function 當成引數傳給另一個 function，<br>在綁定 event handler （或稱 callback function ) 時很常用


---

Object 物件
-----------
`{key: value1, key2: value2, ……}`

* value 可以是函數
* 函數裡 `this` 指自己這個物件
* 可以隨時幫 object 增加成員

[[mrorz-js-obj?javascript,console]]

---

Object 物件
-----------
用 key 存取物件內的 value：`object.key` 或 `object["key"]`

[[mrorz-js-obj?javascript,console]]

key 為[保留字](#reserved)時請用 `object["key"]`


---

Array 陣列
-----------
`[元素1, ……, 元素N]`

* 元素不一定要都同一種型態
* length 為陣列長度
* 陣列是一種物件（陣列繼承自物件）。

[[mrorz-js-arr?javascript,console]]

---

Array method
-----------

* `join(sep)` 把每個元素轉成字串，用分隔字元 `sep` 接起來。
* `push(item...)` 將 `item` 附加到末端，回傳新長度。
* `pop()` 移除並回傳最後一個元素。
* `forEach(func)` 一次把一個元素傳進 `func`。
* 詳見 [MDN Docs](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array#Array_instances)

[[mrorz-js-arrmethod?javascript,console]]

---

Just for reference
-----------

Javascript 物件變數只存 reference（物件的位置）。
於是 `物件 === 物件` 結果很微妙。

[[mrorz-js-objreference?javascript,console]]

Javascript 沒有原生的 Object `equals` 方法。
比較兩個 Javascript Object 是否每個 key、value 相同，[其實很麻煩](http://stackoverflow.com/questions/201183/how-do-you-determine-equality-for-two-javascript-objects)。

[Underscore.js](http://underscorejs.org) : utility function library.


---

Pass-by-reference
-----------

Javascript 物件變數當引數時，為 pass-by-reference。
其他型態，如 Number，則是 pass-by-value。

[[mrorz-js-funcreference?console,javascript]]

---

特殊值：`NaN`
-----------
`NaN`: Not a number，不是數字。

[[mrorz-js-nan?javascript,console]]

---

特殊值：`undefined`
-----

`undefined`: 未定義。變數的預設值、function 預設的回傳值。

[[mrorz-js-undef?javascript,console]]

---

特殊值：`null`
-----

`null`: 什麼都不是。
