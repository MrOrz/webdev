購物清單
-------

<div class="row">
    <div class="span3">
        ![Shopping list](images/js/shopping_list.jpg)
        <small>[圖片來源 - hobvias sudoneighm](http://www.flickr.com/photos/striatic/159109141/)</small>
    </div>
    <div class="span3">
        <h3>「列表」</h3>
        <ul>
            <li>沒有明確的 key</li>
            <li>有順序性</li>
        </ul>
    </div>
</div>

<!-- Platforms 0 to 8 http://scalingmountlu.com/2013/03/ -->

---

用陣列呈現列表
-------------

![多層櫃](images/programming/numbered-drawer.jpg)

[圖片來源](http://www.bigstockphoto.com/zh/image-4195122/stock-photo-antique-wooden-medicine-cabinet-with-numbered-drawers-and-white-knobs)

會自動編號（有順序）的多層櫃

---

建立陣列
----------

[[qihez?js,console]]

用中括號 `shoppingList[N]` 來拿到第 N 個要買的東西，N 從 0 開始算。

[陣列方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)很像字串。

---

陣列實字 Array Literal
-------

```js
var shoppingList = ["布料", "棋盤", "稿紙", "綠豆糕"];
```

以上陣列實字，和下面等價

```js
var shoppingList = [];
shoppingList.push("布料");
shoppingList.push("棋盤");
shoppingList.push("稿紙");
shoppingList.push("綠豆糕");
```


---

LearnStreet 練習時間
--------

[LearnStreet](http://www.learnstreet.com/student/join/o4laIoVQ) 的「Arrays」

![Lean street If](images/js/ls-array.png)

約需 18 分鐘。


---

<div class="row">
  <div class="span3">
    <h4>1. Pushing Arrays</h4>
    <p><small>產生 `[1,2,…,100]`</small></p>
    <h4>2. Every Other One</h4>
    <p><small>把第 0、2、…個元素加總</small></p>
    <h4>3. First and Last</h4>
    <p><small>檢查第一個和最後一個是否相等</small></p>
    <h4>4. Reverse Swapping</h4>
    <p><small>把整個陣列排序反過來</small></p>
    <p><small>勘誤：應為 `reverse([1,2,3,4,5])`</small></p>
  </div>
  <div class="span3">
    <h4>5. Range</h4>
    <p><small>產生 `[0,1,…,n]`</small></p>
    <h4>6. Words</h4>
    <p><small>請跳過此題。</small></p>
    <h4>7. If and Only If</h4>
    <p><small>`arr` 裡有 `6` 時，把 `item` 放到 `arr` 尾端</small></p>
    <h4>8. Delete Free Emails</h4>
    <p><small>將 `eMails` 中字串含有 `"free"` 的字串整個替代為 `"spam"`</small></p>
  </div>
</div>