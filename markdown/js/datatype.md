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

特殊值
-----------
`NaN`: Not a number，不是數字。

~~~
document.write(26 + parseInt('二十四個比利', 10) );
~~~

`undefined`: 未定義。變數的預設值、function 預設的回傳值。

~~~
var hey, noop = function(){};
document.write(hey + '<br>');
document.write(noop());
~~~

`null`: 什麼都不是。


---

String 字串
-----------

* 單引號(")、雙引號(')效果相同
* `\'`,  `\"`, `\\`,  `\n`
* `length` 屬性：長度
* 無法修改字串 (immutable)。
* UCS-2 編碼 （UTF-16 的前身）
* [屬性與方法](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String#String_instances)


~~~javascript
var str = "侍中尚書、長史、參軍，此悉貞良死節之臣也";

str[11] = "庛";
document.write( str[11] + '<br>' );
document.write( str.split("、") + '<br>');
document.write( str.slice(11) + '<br>' );
~~~


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

Function 函數
-----------

~~~
  // eachOf：
  // 將 array 裡的每個東西都丟進 func 當引數
  var eachOf = function(array, func){
    for(var i = 0; i < array.length; i+=1){
      func(array[i]);
    }
  }

  eachOf(["棋盤", "稿紙", "綠豆糕"], function(item){
    document.write('啊，好似' + item + '似的！');
  });
~~~

把 function 當成引數傳給另一個 function，<br>在綁定 event handler （或稱 callback function ) 時很常用


---

Object 物件
-----------
`{key: value1, key2: value2, ……}`

* value 可以是函數
* 函數裡 `this` 指自己這個物件
* 可以隨時幫 object 增加成員

~~~javascript
var person = {
  name: "董允",
  comment: "志慮忠純，是以先帝簡拔以遺陛下。",
  reward: function(){
    // this：
    document.write("臣" + this.name + "謝皇上賜賞。")
  }
};

// 增添「職位」
person.position = "侍中";
person.reward("田地"); // 引數長度和定義可以不一樣
console.log('person:', person);
~~~


---

Object 物件
-----------
用 key 存取物件內的 value：`object.key` 或 `object["key"]`

~~~
  var person = {
    name: "董允",
    comment: "志慮忠純，是以先帝簡拔以遺陛下。",
    reward: function(){
      document.write("臣" + this.name + "謝皇上賜賞。")
    }
  };

  document.write(person.name + '<br>');
  document.write(person['name'] + '<br>');
  person['reward']();
~~~

key 為[保留字](#reserved)時請用 `object["key"]`


---

Array 陣列
-----------
`[元素1, ……, 元素N]`

* 元素不一定要都同一種型態
* length 為陣列長度
* 陣列是一種物件（陣列繼承自物件）。


~~~javascript
var arr = [3.14, "任意文字", {text: "物件"}, ["另一個", "陣列"]];
for(var i=0; i<arr.length; i+=1){
  document.write( arr[i] + '<br>');
}
document.write('<hr>');
document.write('陣列長度：' + arr.length + '<br>');
~~~

---

Array method
-----------

* `join(sep)` 把每個元素轉成字串，用分隔字元 `sep` 接起來。
* `push(item...)` 將 `item` 附加到末端，回傳新長度。
* `pop()` 移除並回傳最後一個元素。
* 詳見 [MDN Docs](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array#Array_instances)

~~~javascript
var names = ['郭攸之', '費依'];
names.push('董允');
document.write(names.join('、') + '，此皆良實，志慮忠純。');
~~~


---

Just for reference
-----------

Javascript 物件變數只存 reference（物件的位置）。
於是 `物件 === 物件` 結果很微妙。

~~~javascript
var obj = {key: "value"},
    obj2 = obj;

// obj, obj2 reference 相同
// obj 和新建的物件 reference 不同，即使值都一樣，
// === operator 還是把它認作不同。

document.write([
  'obj === obj2 :',   obj === obj2,           '<br>',
  'obj === {...} :' , obj === {key: "value"}
].join(''));
~~~

Javascript 沒有原生的 Object `equals` 方法。
比較兩個 Javascript Object 是否每個 key、value 相同，[其實很麻煩](http://stackoverflow.com/questions/201183/how-do-you-determine-equality-for-two-javascript-objects)。

[Underscore.js](http://underscorejs.org) : utility function library.


---

Pass-by-reference
-----------

Javascript 物件變數當引數時，為 pass-by-reference。
其他型態，如 Number，則是 pass-by-value。

~~~javascript
var num = 3.14,            // Number
    arr = [ "任意文字" ];   // Array

// 蓋一個 function，把 arr、num 傳進去修改
var alter = function(a, n){
  a[0] = "隨便文字"; n = 1.618;
};

// 呼叫這個 function
alter(arr, num);

// 看 arr, num 有沒有被修改
document.write([
  'arr:', arr, '<br>',
  'num:', num
].join(''));
~~~
