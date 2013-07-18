console.log
-----

大家的好朋友。

~~~
  var arr = ['棋盤', '稿紙', '綠豆糕'];
  console.log('arr: ', arr);
  arr.shift(); // 移除第 0 個
  console.log('shift 之後：arr: ', arr);
~~~

---

中斷點
-----

* 開發人員工具的「Scripts」 面板
* 選擇要 debug 的檔案
* 中斷時可用 console
* "Pause on uncaught exception" 按鈕

![pause](images/js/pausebutton.png)

---

`debugger` 敘述
--------------

程式執行到的時候會中斷。

[debugger 示例](sample/js-debugger.html) （請開啟 Developer Tool）