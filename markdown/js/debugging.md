console.log
-----

大家的好朋友。

[[mrorz-js-debug]]

---

Syntax Error!
------

若 console 裡頭出現

![syntax error](images/js/syntaxerror.png)

- - -

把程式貼到 [JSHint](http://www.jshint.com)

<div class="row">
  <div class="span4 centered">
    
    ![JSHint](images/js/jshint.png)
  </div>
</div>


檢查語法、回報變數使用情形等等

---

中斷點
-----

* 開發人員工具的「Sources」 面板
* 選擇要 debug 的檔案
* 中斷時可用 console
* "Pause on uncaught exception" 按鈕

![pause](images/js/pausebutton.png)


[測試網頁](http://jsbin.com/mrorz-js-console/1)

---

Sources 面板 (1)
-----

先選擇要 debug 的檔案

![pause](images/js/source1.png?borderless)

---

Sources 面板 (2)
-----
![pause](images/js/source2.png?borderless)

---

`debugger` 敘述
--------------

程式執行到的時候會中斷。

[debugger 示例](sample/js-debugger.html) （請開啟 Developer Tool）