長這樣
-----

```css
html, body {
  position: relative;
  padding: 0; margin: 0;
  overflow: hidden;
  font-family: '文泉驛微米黑', 'LiHei Pro', '微軟正黑體', sans-serif;
  font-weight: 200;
  letter-spacing: -0.02em;
  color: #eee; width: 100%; height: 100%;
  min-height: 400px;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

---

CSS Syntax
----------

![CSS syntax](images/css/selector.gif?borderless)

<small>Source: [W3Schools](http://w3schools.com/css/css_syntax.asp)</small>

---

怎麼加進 HTML
-----------

在 `<head>` 中加入

```html
<link rel="stylesheet" type="text/css" href="path/to/file.css">
```

或直接把 CSS 寫在 HTML 檔的 `<style>` 裡；

[[mrorz-css-styletag]]

`<style>` 可放在 `<head>` 或 `<body>` 均可。

---

Cascading Style Sheet
---------------------
<!-- https://developer.mozilla.org/en/CSS/Getting_Started/Cascading_and_inheritance -->

<div class="row">
  <div class="span3">
    <h3>Cascading</h3>

    <p>元素的最後外觀，來自於多個樣式定義</p>

    <ul>
      <li>瀏覽器預設樣式</li>
      <li>瀏覽器使用者樣式</li>
      <li>網頁作者（你）所指定的樣式</li>
    </ul>

    <hr>

    <p>後者蓋過前者。</p>

  </div>
  <div class="span3">
    <h3>Inheritance</h3>

    <p>某些屬性（如 color）預設會繼承自父元素。</p>

    [[mrorz-css-inheritence]]
  </div>
</div>

---

CSS Reset
---------

[[mrorz-css-reset]]

拿掉瀏覽器預設的 style。

---

CSS Normalization
-----------------

[[mrorz-css-normalization]]

統一各瀏覽器的 style。 <small>[規則說明](https://github.com/necolas/normalize.css/wiki)</small>

---

大綱
----

* 常用外觀樣式
* 除錯工具介紹
* CSS Selectors & Specificity
* Box Model 與定位
* CSS3
* 難懂的屬性：`vertical-align`, `z-index`
* Media Query

