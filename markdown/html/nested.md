大腸包小腸
---------

* HTML 標籤可以互相嵌套 (nesting)
* 但不能隨便包

- - -

[[mrorz-html-structure]]

---

發生什麼事？檢查元素先。
-------------------
[[mrorz-html-structure]]
請在右邊按 <kbd>右鍵</kbd> → 「檢查元素」

---

Permitted Contents
------------------

每個 element 有自己的 [permitted contents](http://www.w3.org/TR/html-markup/elements.html#elements "W3C Spec")。

* `<p>`、`<h1>`~`<h6>` 裡頭只能包 [phrasing content](http://www.w3.org/TR/html-markup/terminology.html#phrasing-content)。
* `<ul>`、`<ol>` 裡面只能包 `<li>`。
* `<tr>` 裡面只能包 `<td>` 與 `<th>`。


<p class="fragment">不過......</p>

---

瀏覽器是寬大慈悲的
------

* 標籤錯誤的網頁太多了
* 「網頁寫錯」被使用者認為是「瀏覽器壞掉」
* 瀏覽器只好[容忍錯誤](http://taligarsiel.com/Projects/howbrowserswork1.htm#Browsers_error_tolerance)

<div class="fragment">
  <hr>
  <h4>但容忍還是有極限的。</h4>

  [[mrorz-html-div-p]]

</div>