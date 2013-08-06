Request Headers
---------------

跟著送出去的資料

* `Referer`：從哪個網址點進來的
* `User-Agent`：瀏覽器資訊
* `Cookie`：瀏覽器內的 cookie 資訊
* `If-Modified-Since`：若網頁在此 timestamp 之後都沒更新後，就不用送了

------

[Request header 列表](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Requests)

---

HTTP Verbs
----------

### GET

```
GET /search?q=html+entities HTTP/1.1
Host: www.google.com.tw
```

### POST
```
POST /login HTTP/1.1
Host www.yahoo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 40

login=alice@example.com&password=1235813
```

其他還有 `PUT`、`DELETE` 等動詞。

---

HTTP Response
-------------

```
HTTP/1.1 200 OK
Date: Mon, 23 May 2005 22:38:34 GMT
Content-Type: text/html; charset=UTF-8
Content-Length: 131

<html>
<head>
  <title>An Example Page</title>
</head>
<body>
  Hello World, this is a very simple HTML document.
</body>
</html>
```

分成 status line、headers 與 body。

---

HTTP Status
-----------

伺服器回傳這次溝通的狀態

* `2XX`：成功
  * `200 OK`， response body 應有內容。
* `3XX`：重新導向
  * `301 Moved Permanently`，請瀏覽器記住。<br>例：www.yahoo.com.tw 導向到 tw.yahoo.com。<br>瀏覽器應對新位址重送 GET request。
  * `302 Found（Moved Temporarily）`例：登入（`POST /login`）成功後重新導向到首頁。<br>瀏覽器應對新位址重送 GET request。
  * `304 Not Modified`，回覆 request header 的 `If-Modified-Since`。

---

HTTP Status (2)
----------------

* `4XX`：客戶端錯誤，可能是前端程式寫錯
  * `400 Bad Request`，參數有錯。
  * `401 Unauthorized`，沒有登入。
  * `403 Forbidden`，沒有權限存取。
  * `404 Not Found`，找不到網頁。
* `5XX`：伺服器錯誤，伺服器程式有問題
  * `500 Internal Server Error`

---

Response Headers
----------------

伺服器除了網頁資料之外回傳的東西

* `Location`：重新導向（301、302）時指定新位置
* `Set-Cookie`：請瀏覽器記住 cookie

------

[Response header 列表](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Responses)