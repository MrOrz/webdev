神奇的 `$`
------

```
  $(SELECTOR) or $("HTML放字串裡")
```

* `$` 是一個 function。
* 傳入 [css selector](http://api.jquery.com/category/selectors/) → 回傳找到的 element
* 傳入 HTML tag 字串 → 回傳新蓋的 element

------

element 被包在 jQuery obejct 裡頭。


---

jQuery Object
------


* 看起來像陣列
* 有 length 屬性
* 有[很多 method](http://api.jquery.com) 可以用

---

`$()`
------

從「拿到 jQuery Object」開始

```
  $(SELECTOR) or $(HTML)
```

其方法通常會回傳 jQuery Object 本身，故支持 chaining。

[[mrorz-js-jquery-dollar]]