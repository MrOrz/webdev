雅量部落格
--------

綜合前述，我們可以做出這樣的網頁內容：

[[mrorz-html-content]]

<p class="fragment">但這並不是完整的網頁架構。</p>

---

HTML 文件架構
------------
[[mrorz-html-boilerplate]]

<ul>
  <li class="fragment">
    `<head>` 存放「不是網頁內文」的其他資訊。
    <ul>
      <li class="fragment">`<title>` 瀏覽器分頁標題</li>
      <li class="fragment">`<meta name="..." content="...">` 其他資訊</li>
    </ul>
  </li>
  <li class="fragment">`<body>` 網頁內容</li>
  <li class="fragment">`<html>` 包住 `<head>` 和 `<body>`。</li>
</ul>

---

雅量部落格 (完整版)
-------------

[[mrorz-html-combined]]

`<!DOCTYPE html>` 告訴瀏覽器用 HTML5 解析此網頁

---

HTML 文件架構（複雜版）
-------------------

[HTML5 Boilerplate](http://html5boilerplate.com/)

Boilerplate = 「樣板」

[[mrorz-html-boilerplate2]]

偵測 IE、瀏覽器支援度、標準化 CSS 等常用功能。

---

IE 與 HTML5
----------

在 <code>&lt;head&gt;</code> 與 `<head>` 中間加上

```html
<!--[if lt IE 9]>
  <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

參考資料：[html5shiv](http://code.google.com/p/html5shiv/) 官方說明。