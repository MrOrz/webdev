時間到
------
`setTimeout(callback, t)` 會在 `t` ms 後執行 `callback`。<br>回傳一個 handle。
`clearTimeout(handle)` 取消此倒數。

[[mrorz-js-timeout?javascript,console]]

---

網址相關
--------
`location.href`, `location.hash`

複製以下兩行進 javascript console。

~~~javascript
console.log('href', location.href);
console.log('hash', location.hash);
~~~

傳值進去會重新整理瀏覽器頁面。



---

資料儲存
----------
`localStorage`, `sessionStorage`

* 用法像 javascript object
* `localStorage.KEY = VALUE`，`VALUE` 只能是字串
* `localStorage` 會一直存在，`sessionStorage` 僅存在瀏覽器分頁中

<div class="row">
  <div class="span3">
    [[mrorz-js-localstorage?javascript]]
  </div>
  <div class="span3">
    ![Resources tab](images/js/localStorage.png)
  </div>
</div>



---

用字串表示物件
----------
`localStorage` 的值只能存字串，不能存物件

<p class="fragment">
  把物件用一個字串來表示。
</p>

---

JSON
----

`Javascript String Object Notation`

<p>
`物件 = JSON.parse(字串)`、<br>`字串 = JSON.stringify(物件)`
</p>

<ul>
  <li>類似 javascript 物件的初始化方法（object literal）</li>
  <li>不會把 function (method) 變成字串</li>
</ul>

[[mrorz-js-json?javascript,console]]



<!---

`document.cookie`
----------
* 另一種資料存儲
* 同樣是 key-value pair, value 限字串
* 用分號作分隔，以字串儲存
* 4kB 大小限制（`localStorage` 有 5MB）
* server 可以設定給 browser 存什麼 cookie
* browser 和 server 要檔案時，會附上 cookie

-----

[MDN Doc](https://developer.mozilla.org/en-US/docs/DOM/document.cookie)
-->