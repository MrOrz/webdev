`if` 條件
--------

`if`-`else if`-`else`-`endif`

[[mrorz-js-if?javascript,console]]

---

`for` 迴圈
----

```javascript
for(初始敘述; 繼續執行條件; 重新進入敘述){
  ...
}
```

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

課堂練習：判斷質數
----

判斷 `NUM` 是否為質數
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

{:[data-lang=javascript]}
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

---


註解
---

`/* 多行 */` 與 `// 單行`