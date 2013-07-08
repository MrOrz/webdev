`if` 條件
--------

`if`-`else if`-`else`-`endif`

~~~
  var year = 2012;
  if(year % 400 === 0){
    document.write('閏年');
  }else if(year % 100 === 0){
    document.write('不是閏年');
  }else if(year % 4 === 0){
    document.write('閏年');
  }else{
    document.write('不是閏年');
  }
~~~

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

~~~
  var name = "董允", comment;
  switch(name){
    case '郭攸之':
    case '費依':
    case '董允':
      comment = '此皆良實，志慮忠純';
      break;
    case '向寵':
      comment = '試用之於昔日，先帝稱之曰「能」';
      break;
    default:
      comment = '親賢臣，遠小人，此先漢所以興隆也';
  }
  document.write(comment);
~~~

---


註解
---

`/* 多行 */` 與 `// 單行`