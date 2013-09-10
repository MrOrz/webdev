1. 變數（variable）
==============

<figure>
  <img src="images/programming/drawer.jpg" alt="Drawer" width="200">
  <figcaption>
    [圖片來源](http://www.123rf.com/photo_13322817_an-open-filing-drawer-containing-hanging-files-and-documents-labeled-abuse-reports--portrait-orienta.html)
  </figcaption>
</figure>

變數是一格抽屜，外面寫著這格抽屜的名字。
抽屜裡面的是這個變數的值（value）；我們都用抽屜的名字來操作裡頭的值。

`var` 敘述可以建立一個新的抽屜，如：

```
var count;
```

建立了一個叫做 `count` 的空抽屜；而下面的敘述：

```
var count = 0;
```

除建立名為 count 的空抽屜，還把 0 放了進去。「`=`」 在 javascript 裡面是「指定」的意思，可以把「`=`」右邊的值，放到等號左邊這個抽屜裡。等號的左邊一定要是一個抽屜：

```
count = count + 1;
```

<figure class="right">
  <img src="images/programming/counter.jpg" alt="Counter" width="100">
  <figcaption>
    [圖片來源](http://www.trigonalworld.com/2011_07_01_archive.html)
  </figcaption>
</figure>

上面的敘述把 `count` 的值加一之後，放回 `count`抽屜中。假設遊樂園入口的收票員手裡拿的計數器，是超神奇的智慧型計數器；更神奇的是，它的計數程式是用 Javascript 寫的（真的有這種東西嗎）。計數器中，處理收票員按按鈕的程式裡，一定有著類似上面這樣的敘述。只要收票員沒有按錯，`count` 這個抽屜裡的數字，就是他所統計的入園人數了。

2. 資料型態 (Data Type)
================

<figure>
  <img src="images/programming/drawer-type.jpg" alt="Drawer labels" width="200">
  <figcaption>
    [圖片來源](http://inmyownstyle.com/2013/03/how-to-age-brass-in-less-than-5-minutes.html)
  </figcaption>
</figure>

抽屜裡可以放不同種類的東西，可以放文件，也可以放工具；變數也是如此。變數裡能存放的值（value）有很多種類，這些種類就是所謂的資料型態（Data type）。

上面的 `count` 抽屜裡放的是數字，屬於 `Number` 這個 Javascript 的資料型態。所有常用的形態如下表：

<table border="1">
  <tr>
    <td>`Number`</td>
    <td>數字（小數 / 浮點數）</td>
  </tr>
  <tr>
    <td>`String`</td>
    <td>字串</td>
  </tr>
  <tr>
    <td>`Object`</td>
    <td>物件。Javascript 有一些特殊的物件，如陣列（`Array`）以及日期物件（`Date`）。</td>
  </tr>
</table>

[(MDN) Javascript Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)


2-1. 字串（`String`）型態
---------------------------

寫在 Javascript 檔裡的文字，像是 `count = count + 1` 等等的敘述，都是寫給電腦來執行的程式碼。
程式碼裡頭，給人來讀的「句子」，則要用引號括起來，告訴瀏覽器「這段句子不是程式碼，是給人看的文字」。
這樣給人讀的文字就叫做「字串（`String`）」。

```javascript
var count = 3;
console.log("我買" + count + "個橘子去，你就在此處不要走動。");
// 我買3個橘子去，你就在此處不要走動。
```

Javascript 的字串提供了很多不同的方法（method）讓我們操控字串，也有一些屬性提供關於這個字串的資訊。
若我們有個抽屜（變數）叫做 `apple`，那 `apple.length` 可以拿到這個字串裡有幾個字。除了 `.length` 之外，還有像是 `.slice()` 方法可以切割字串，詳情可見 MDN [字串的屬性與方法](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String#String_instances)。


[[mrorz-js-string?javascript,console]]
  
2-2. 函數（`Function`）型態
---------------------------




2-3. 物件（`Object`）型態
---------------------------

<figure class="right">
  <img src="images/programming/drawer-with-label.jpg" alt="Drawer labels" height="200">
  <figcaption>
    [圖片來源](http://inmyownstyle.com/2013/03/how-to-age-brass-in-less-than-5-minutes.html)
  </figcaption>
</figure>

若物件是一個抽屜，則物件就像是一個多層櫃。
整個櫃子有自己的名字，而櫃子裡的每個抽屜也有自己的名字。
現實生活中，多層櫃裡面常常會放相關的東西，例如說我們會把同一個單位的收支表格都放在一個三層櫃裡，其中一個抽屜放支出表，一個放收入表，另一個放此單位的其他文件。
相較於多個分離的抽屜，多層櫃較能勝任這種「把相關東西分門別類」的工作，因為這樣整理比較整齊有系統。

在 Javascript 裡面，這樣的敘述可以建立一個名為 `mcdonalds` 的多層櫃：

```
var mcdonalds = {};
```

一對大括號 `{ }` 是一種物件實字（object literal）。因為這一對大括號裡沒有任何東西，所以目前 `mcdonalds` 是一個全空的多層櫃。

我們想在這個名為 `mcdonalds` 這個多層櫃中，放進一些關於一家麥當勞分店的資訊。例如說，這間店的本月收入（income）是 350000 元、支出（outcome）為 180000 元，地點（location）則是 ` "科技大樓站旁" ` 。下面的敘述可以做到這件事情：

```
mcdonalds.income = 350000;
mcdonalds.outcome = 180000;
mcdonalds.location = "科技大樓站旁";
```

`.` 是在多層櫃中找抽屜的一個工具。例如說，若我們想要這間分店的淨收入放到 `profit` 這個獨立的抽屜：

```javascript
profit = mcdonalds.income - mcdonalds.outcome;
```

上面的敘述從 `mcdonalds` 的 `income` 和 `outcome` 抽屜拿值出來，放到 profit 這個獨立的抽屜裡。

除了用 “.” 之外，我們也能用中括號 `[抽屜名]` 的方式來拿到多層櫃的抽屜。下面這行 `profit` 的算式和上面那行等價。

```javascript
profit = mcdonalds['income'] - mcdonalds['outcome'];
```

### 物件實字 Object Literal

上面的例子裡，我們用一對空的大括號 `{}` 建立 Javascript 物件 `mcdonalds`：

```
var mcdonalds = {};
mcdonalds.income = 350000;
mcdonalds.outcome = 180000;
mcdonalds.location = "科技大樓站旁";
```


其實我們可以一併把 `mcdonalds` 的那些資訊也寫進大括號裡面，如下面所示：

```
var mcdonalds = { income: 350000, outcome: 180000, location: "科技大樓站旁" };
```

這種 `{key1:value1, ...}` 的表示方式，就稱為物件實字（Object Literal）。逗號和「`{`」後面可以斷行，這樣可以讓程式碼好讀一點：

```
var mcdonalds = {
  income: 350000,
  outcome: 180000,
  location: "科技大樓站旁"
};
```

### Object = Key-value Pair Storage

人們會說，Javascript 的物件儲存的是「鍵值對（key-value pair）」。「鍵（key）」就是抽屜的名字，我們會拿著 key 在多層櫃裡來找想找的抽屜，而抽屜裡放著我們想要存取的值（value）。上述的 `mcdonalds` 物件裡，有三個 key：`income`、`outcome` 與 `location`，分別存著三個不同的值。

另外也有人把從物件導向的名詞套到 Javascript 的物件上，把 key 稱為「屬性（property）」`；如 mcdonalds` 有「`income`」這個屬性，其值為 350000。

### 物件裡的物件

<figure>
  <img src="images/programming/drawer-sorted.jpg" alt="Drawer" width="400">
  <figcaption>
    [圖片來源](http://thehappyhousie.com/?p=573)
  </figcaption>
</figure>

既然我們說，物件就像是一個多層櫃，有著很多抽屜；那麼抽屜裡能擺的東西，自然不只有 `Number` 數字和 `String` 字串兩種形態而已。例如說，我們想記錄 `mcdonalds` 的 `income` 的細節：這間分店的 income，是由賣漢堡賺的 150000 元、賣飲料賺的 170000 元以及賣玩具賺的 30000 元組成，那麼 `mcdonalds` 可以寫成：

```
var mcdonalds = {
  income: {
    fromHamburgers: 150000,
    fromDrinks: 170000,
    fromToys: 30000
  },
  outcome: 180000,
  location: "科技大樓站旁"
};
```

### 物件裡的函式（方法 Methods）

物件裡存著的值，當然也可以是函式 function。我們可以幫 `mcdonalds` 物件加上一個名為 `calculateProfit` 的 function，只要我們呼叫這個 function，他就會把事前設定好的，`mcdonalds` 的收入 `income` 與支出 `outcome` 相減，回傳這間麥當勞分店的淨收入。

```
var mcdonalds = {
  income: 350000,
  outcome: 180000,
  calculateProfit: function(){
    // TODO: 回傳 income - outcome ！
  }
};

console.log( mcdonalds.calculateProfit() );
// TODO: 應該要能印出 170000。
```

`calculateProfit` 被放在 `mcdonalds` 物件中，可以拿到同樣屬於 `mcdonalds` 物件裡的 `income` 與 `outcome`，所以不需要傳入任何的引數。
`this` 這個特殊的關鍵字，就代表物件本身。
在 `calculateProfit` 裡，我們可以用 `this.income` 來拿到麥當勞的收入值。所以 `calculateProfit` 可以這樣寫：

```
var mcdonalds = {
  income: 350000,
  outcome: 180000,
  calculateProfit: function(){
    return this.income - this.outcome;
  }
};

console.log( mcdonalds.calculateProfit() );
// 印出 170000
```


2-4. 陣列（`Array`）：一種特殊的物件
-------------------------------

<figure>
  <img src="images/programming/numbered-drawer.jpg" alt="Drawer" width="400">
  <figcaption>
    [圖片來源](http://www.bigstockphoto.com/zh/image-4195122/stock-photo-antique-wooden-medicine-cabinet-with-numbered-drawers-and-white-knobs)
  </figcaption>
</figure>

生活中充滿了列表（list）－購物前我們會列 shopping list，購物後又會拿到一個發票，裡面把自己買的東西給表列出來。

假設今天你在購物前，心寫來潮地想要用 Javascript 來寫 shopping list（真的會有人這樣做嗎），記錄想買的各項物品。
若把所有的物品通通寫在一個長長的字串裡面，感覺很沒有結構，而且很難一眼就知道我們到底要買多少東西。
Javascript 的 `Object` 是 key-value pair，我們想要做的 shipping list 則感覺像是「一堆有順序的物品」，`Object` 也幫不上忙。

這種時候，就是 `Array` 出場的最佳時機。他就像是一個會自動用數字來編號的多層櫃，我們可以盡情在裡面放想放的東西，每個東西就會有自己的編號。

```
var shoppingList = [];
```

上面這個敘述建立了一個名為 `shoppingList` 的**自動編號多層櫃**。
一對中括號 `[]` 是代表空陣列的陣列實字（Array literal）。
有了陣列之後，我們就可以把要買的東西一項項放進陣列裡頭：

```
shoppingList.push("布料");
shoppingList.push("棋盤");
shoppingList.push("稿紙");
shoppingList.push("綠豆糕");

console.log(shoppingList);
// 印出 ["布料", "棋盤", "稿紙", "綠豆糕"]

console.log(shoppingList.length);
// 印出 4
```

`.push(東西)` 可以把東西放進陣列裡面；`.length` 這個屬性告訴我們這個陣列裡<abbr title="其實是最大的陣列註標 + 1。">有幾個元素</abbr>。
回想之前我們是怎麼把 `income`, `outcome` 放進 `mcdonalds` 物件的：

```
var mcdonalds = {}; // 建立空 Object
mcdonalds.income = 350000;
mcdonalds.outcome = 180000;
```

兩相比較之下，我們會發現把新東西放進陣列時，只要一直呼叫陣列的 `push` 方法就好，不用像物件這樣幫我們要放進去的物件取名字（key）－－因為購物清單是一個「列表」，裡面清一色是「想買的東西」，不像 `mcdonalds` 這個 Object 存放的是關於這間店面的各種不同資訊。

我們可以用中括號 `shoppingList[N]` 來拿到第 `N` 個要買的東西，`N` 從 0 開始算。

```
console.log(shoppingList[0]);
// 印出 "布料"。
```

### 陣列實字（Array Literal）

就像物件 Object 有物件實字 Object Literal 一樣，我們也能用陣列實字來表示陣列。

```
var shoppingList = ["布料", "棋盤", "稿紙", "綠豆糕"];
```

上面的陣列實字，和下面的敘述等價：

```
var shoppingList = [];
shoppingList.push("布料");
shoppingList.push("棋盤");
shoppingList.push("稿紙");
shoppingList.push("綠豆糕");
```


3. 控制流程敘述 (Control Flow)
===========================

一般來說，程式會從第一行執行到最後一行。函式裡面的程式碼，則會在函式被呼叫時執行。

3-1. `if-elseif-else` 條件式
--------------

[[mrorz-js-if?javascript,console]]

3-2. `for` 迴圈
--------------

[[mrorz-js-loopdetail?javascript,console]]
