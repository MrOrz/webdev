程式執行
--------

從上往下，一行一行跑

控制只有「部分」會執行：`if` 條件式

控制「某部分重複執行」：`for` 迴圈

---

<!-- 不知所云！ 需要圖解 + if 的手把手教你做範例！ -->

`if` 條件
--------

`if` - `else if` - `else`

[[mrorz-js-if?javascript,console]]

---

<!-- 是否拿掉重新進入敘述和初始敘述？因為寫在前面和後面也一樣。 -->
<!-- 然後再說其實這些 code 可以放哪。 -->
---

`for` 迴圈

```
for(;;){
  …重複執行的程式碼…
}
```

```
for(;;){
  console.log("一直一直執行呀～");
}
```

---

You need a `break`
-----------
```
var counter = 0
for(;;){
  counter += 1;
  console.log(counter);
  if(counter >= 10){
    break;
  }
}
```

`break` 敘述可以跳出迴圈。

---

無限猜數字
------

* 一樣猜 1 ~ 3 的數字
* 一樣用 `alert` 告知結果
* 告知結果後，再次請使用者猜數字
* 若使用者輸入空字串，才跳出迴圈

[[mrorz-js-game]]

---

`for` 迴圈詳細
----

```javascript
for(初始敘述; 繼續執行條件; 重新進入敘述){
  ...
}
```

找小於 `LIMIT` 的[最大費波那西數](http://zh.wikipedia.org/zh-tw/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97)

[[mrorz-js-loop?javascript,console]]

---

`for` 迴圈細節
----

```javascript
for(初始敘述; 繼續執行條件; 重新進入敘述){
  ...
}
```

```javascript
var i;
for(i=0; i<4; i+=1){ ... }
```

[[mrorz-js-loopdetail?javascript,console]]

---

<!-- 質數似乎太抽象！要想一個要重複執行才能得到結果的東西，又要在某些情形跳出。ex: 開樂透彩？ -->
課堂練習：判斷質數
----

判斷 `NUM` 是否為[質數](http://zh.wikipedia.org/zh-tw/%E8%B3%AA%E6%95%B8%E5%88%97%E8%A1%A8)

（不被任何小於根號 `NUM`、大於 1 的整數整除）

```
for( i = 2 到 sqrt(NUM) ){
  if( NUM 除以 i 餘 0 ){    
    NUM 不是質數，並跳出迴圈（break）
  }
}
```

[[mrorz-js-prime?javascript,console]]

---

多層 `for` 迴圈
----

[[mrorz-js-nestedloop?javascript,console]]

---

課堂練習：列出質數
----

列出 2 ~ N 的所有質數。

```
for( num = 2 到 N ){
  for( i = 2 到 sqrt(num) ){
    if( num 除以 i 餘 0 ){    
      num 不是質數，並跳出迴圈（break）
    }
  }
  if( num 是質數 ){ 回報說他是質數。 }
}
```

[[mrorz-js-primeall?javascript,console]]

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
