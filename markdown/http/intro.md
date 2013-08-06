HyperText Transfer Protocol
-------

### HyperText

超文本

直接連結（Hyperlinked）的文件們

### Protocol

傳輸協定

---

HTTP Request
----

瀏覽器 ---傳輸--> 伺服器

> 「我要連到 google.com 拿 /example.html 資源」

```
GET /example.html HTTP/1.1
Host: www.google.com
```

---

HTTP Response
-------------

瀏覽器 <--傳輸--- 伺服器

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

---

URL
----
指定資訊的位置

Unified Resource Locator

```html
scheme://(username:password@)domain:port/path?query_string#fragment_id
```

```html
http://google.com
```

```html
ftp://asmith:qwertyuiop@ftp.example.org
```

---

Network 面板
------------

Google Chrome 開發者工具的「Network」面板

可以看 HTTP request 與 response。