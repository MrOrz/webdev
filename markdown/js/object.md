物件就是多層櫃
-----------

<div class="row">
    <div class="span2">
        ![多層櫃](images/programming/drawer-with-label.jpg)
    </div>
    <div class="span4">
        <p><b>變數</b> -- 抽屜 + 名字</p>
        <p><b>物件</b> -- 多層櫃 + 各自有名字</p>

        <hr>

        <pre><code>
// 建立空的多層櫃
var mcdonalds = {};

// 建立 income, outcome, location 三個抽屜
mcdonalds.income = 350000;
mcdonalds.outcome = 180000;
mcdonalds.location = "科技大樓站旁";
        </code></pre>

    </div>
</div>

---

存取多層櫃的抽屜
--------

`多層櫃.抽屜名` 或 `多層櫃['抽屜名']`

[[sejor?js,console]]


---

物件實字 Object Literal
---------------------

`{抽屜名:值, ...}`

[[daqoh?js,console]]

---

鍵值對 Key-Value Pair
----------------

```js
var mcdonalds = {
  income: 350000,
  outcome: 180000,
  location: "科技大樓站旁"
};
```

抽屜名 `income` 是「鍵」（key）；

抽屜裡的 `350000` 是此 key 對應到的「值」（value）。


---

物件裡可以放物件
----------

[[fuy?js,console]]

---

方法 Method
----------

物件裡的 function 叫做方法（Method）

method 裡的 `this` 代表物件自己

[[luduc?js,console]]
