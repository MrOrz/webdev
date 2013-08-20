Round-trip Websites
---------

![Round-trip websites](images/http/round-trip.png)

每次都要刷新整個畫面

---

XMLHttpRequest
-------------
* DOM 提供之 API 之一
* 用 javascript 送 HTTP request 到 server
* 用 javascript 處理 server 回傳之資料
* 不用刷新整個頁面

---

AJAX
-------

### Asynchronous JavaScript and XML

<ul>
  <li class="fragment">用 XMLHttpRequest 和 server 溝通</li>
  <li class="fragment">曾使用當時最尖端的 XML 格式交換資料</li>
  <li class="fragment">用 Javascript 操作 DOM，執行動態效果</li>
  <li class="fragment">不等遠端回應，繼續執行（asynchronous）</li>
  <li class="fragment">用 callback 處理遠端回傳的資料</li>
</ul>

---

jQuery Ajax
-------------

jQuery 包裝了 Ajax 相關功能

* `$.get` 送 get request 給 server
* `$.post` 送 post request 給 server
* `$.ajax` 為 `$.get`、`$.post` 等 ajax 相關的核心 function

- - -

[jQuery Ajax 分類](http://api.jquery.com/category/ajax/)

---

`$.get` 範例
-------------

```
$.get(URL, DATA, CALLBACK, TYPE)
```

* `DATA`: 要送到遠端的資料，object 或字串。
* `TYPE`: 如何解讀遠端的回應，可以是 `'json'`, `'text'`, `'html'` 等。

[[mrorz-ajax-demo]]

---

`$.getJSON`
-------------

```
$.getJSON(URL, DATA, CALLBACK)
```

`$.get(URL, DATA, CALLBACK, 'json')` 的簡寫。

[[mrorz-ajax-demo2]]

---

Google Geocoding API
-------------

[[mrorz-js-cors]]

[API 文件](https://developers.google.com/maps/documentation/geocoding/?hl=zh-tw)

---

Youbike 資訊
------------

[從官網偷來的資料](http://www.youbike.com.tw/genxml9.php?lat=25.037525&lng=121.56378199999995&radius=5&mode=0)

[[mrorz-http-youbike]]

<p class="fragment">
（′,_ゝ`) 
</p>


---

CORS
-------------

### Cross-Origin Resource Sharing

```
Origin http://localhost:3000 is not allowed by Access-Control-Allow-Origin.
```

<hr>

<p class="fragment">
瀏覽器不會信任來自別的網域的 ajax response。
</p>

<p class="fragment">
除非 response 裡有 `Access-Control-Allow-Origin` 這個 header。
</p>

<p class="fragment">
javascript 向當前頁面的 domain 送 ajax，則沒有這個問題。
</p>

---

課堂練習
------

顯示來訪者 IP 與國家。

```
http://api.hostip.info/get_json.php
```

[[mrorz-ajax-exercise]]