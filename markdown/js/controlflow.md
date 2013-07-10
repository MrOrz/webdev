`if` 條件
--------

`if`-`else if`-`else`-`endif`

[[mrorz-js-if?javascript,console]]

---

迴圈
----
`for`, `while`, `break`, `continue`

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