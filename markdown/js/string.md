`String` 字串
------------

`count = count + 1;` 是給電腦執行的程式碼。

----

給人來讀的「句子」要用引號 `" "` 或 `' '` 括起來，

告訴瀏覽器「這段句子不是程式碼，是給人看的文字」。

```javascript
var count = 3;
console.log("我買" + count + "個橘子去，你就在此處不要走動。");
// 我買3個橘子去，你就在此處不要走動。
```

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

字串 `"3"` 轉成數字 `3`
------

`parseInt(str, base)` 

`parseFloat(str)`

<div class="row">
    <div class="span3 centered">
![parseInt](images/js/parseInt.png)
    </div>
</div>

---

操作字串
------

若有個字串變數名叫 `str`……

* `str[位置]`：取得此位置的字（位置從 0 起算）
* `str.length`：屬性或長度
* `str.indexOf(字)`：字在字串的位置（從左邊數來）
* `str.slice(位置)`：切字串

[[mrorz-js-string?javascript,console]]

[String 所有的屬性與方法](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String#String_instances)

---

JS `String` is Immutable
------

Javascript 字串無法被 `[ ]` 修改（immutable）

[[UWiXUhu?javascript,console]]

但有 `.replace()` 等方法可以用。

-----

[屬性與方法](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String#String_instances)
