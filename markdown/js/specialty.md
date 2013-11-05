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

Function 函數
-----------

建一個函數：

#### Function definition

`function 函式名 (引數們) { ... }`

#### Function expression

`var 函數名 = function (引數們) { ... }`

------

呼叫一個函數：
`函數名(要傳的引數)`

<ul class="fragment">
  <li>函數可以像變數一樣被丟來丟去。</li>
  <li>無法像 C 那樣指定引數預設值。</li>
  <li>呼叫時引數的個數，和函數定義的引數個數可以不一樣。</li>
</ul>

<!--

課堂練習：判斷質數的函式
--------------------

請把剛剛「找到 2 ~ N 的所有質數」之中，<br>判斷質數的部分包成 function。

[[mrorz-js-primefunc?javascript,console]]

-->

---

First-class Function
-----------

[[mrorz-js-func?javascript,console]]

把 function 當成引數傳給另一個 function，<br>在綁定 event handler （或稱 callback function ) 時很常用

---

匿名函數
---------

[[OdAHiKI?javascript,console]]

`function` 一蓋好，就傳進 `repeat` 中。

---

Function Scope
------

`function` 裡定義的變數，外面拿不到。

[[iyefUd?javascript,console]]

Scope：變數能被存取的範圍。

在 function 裡定義的變數叫「`區域變數`」

---

Function Scope (II)
------

`function` 可以拿到外面定義的變數。

[[eZUgajU?javascript,console]]

---

Function Scope (III)
------

若 function 內外變數名字相同，

function 內只會看/改到區域變數。

[[etEmOKe?javascript,console]]

Function input 也算是區域變數。

[延伸閱讀](http://blog.taian.su/201210/explaining-javascript-scope-and-closures-by-robert-nyman/)

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

`undefined`: 未定義。

變數的預設值、function 預設的回傳值。

[[mrorz-js-undef?javascript,console]]

---

特殊值：`null`
-----

`null`: 不同於 `undefined` 的「空」值。
