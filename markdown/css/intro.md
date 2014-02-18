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

把 CSS 加進 HTML
---------------

### `<link>`

```html
<head>
  ...
  <link rel="stylesheet" type="text/css" href="path/to/file.css">
  ...
</head>
```

---

把 CSS 加進 HTML (2)
---------------

### `<style>`

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
    <p>某些外觀屬性（Ex: `color`）會透過 HTML 嵌套，繼承給裡面的元素</p>

    [[mrorz-css-inheritence]]
  </div>
</div>

---

CSS Reset
---------

[[mrorz-css-reset]]

拿掉瀏覽器預設的外觀定義

---

CSS Normalization
-----------------

[[mrorz-css-normalization]]

統一各瀏覽器的外觀定義 <small>[規則說明](https://github.com/necolas/normalize.css/wiki)</small>

---

大綱
----

<!-- CSS 屬性有交互作用，比較沒辦法用「課文」例子來講。 -->

* 常用外觀樣式
* 除錯工具介紹
* 數值 & 字型
* CSS Selectors & Specificity
* Box Model 與 Positioning
* CSS3
* 難懂的屬性：`vertical-align`, `z-index`
* Media Query

