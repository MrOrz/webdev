語意標籤 - 內文系列
----------------

```html
<h1>雅量</h1>

<blockquote>
  「啊，好像棋盤似的。」
</blockquote>
<p>人總會去尋求自己喜歡的事物，每個人的看法或觀點不同，
並沒有什麼關係，重要的是──人與人之間，
應該有<em>彼此容忍</em>和<em>尊重對方</em>的看法與觀點的<strong>雅量</strong>。</p>
```

`<h1>`~`<h6>`：標題。

`<p>`：段落； `<blockquote>`：引文。

`<strong>`：重點；`<code>`：強調。

---

語意標籤 - 列表、定義
------------------

```
<p>你覺得這衣料看起來像？</p>
<ol>
   <li>棋盤</li>
   <li>稿紙</li>
   <li>綠豆糕</li>
</ol>

<hr>

<dl>
   <dt>先帝</dt>
   <dd>指蜀昭烈帝劉備。</dd>
   <dt>崩殂</dt>
   <dd>天子之死曰「崩」；「殂」，也是死的意思。</dd>
</dl>

```

`<hr>`：分隔線。

`<ol>`，`<ul>`：有序/無序列表；`<li>`：列表的項目。

`<dl>`：定義列表； `<dt>`：被定義的項目； `<dd>`：定義。

---

表格
----

```
<table border="1">
  <tr>
    <th rowspan="2" colspan="2">囚犯兩難</th>
    <th colspan="2">B 的選擇</th>
  </tr>
  <tr>
    <th>沉默</th> <th>坦承</th>
  </tr>
  <tr>
    <th rowspan="2">A 的選擇</th>
    <th>沉默</th>
    <td>各坐牢 1 個月</td>
    <td>A 坐牢 1 年<br>B 釋放</td>
  </tr>
  <tr>
    <th>坦承</th>
    <td>A 釋放<br>B 坐牢 1 年</td>
    <td>各坐牢 3 個月</td>
  </tr>
</table>
<!-- 請無視下面 -->
<style> tr:hover {background: pink;} td:hover, th:hover {background: red;} </style>
```

`<table>` 表格（table）；`<tr>` 表格列（table row）；

`<td>` 資料格子（table data cell）； `<th>` 表頭格子（table header）。

`<tr>` 裡只能裝 `<td>` 或 `<th>`；`<td>` 裡啥都能裝。

---

標籤神祕力量
----------

```
<img src="http://www.google.com.tw/logos/2012/rossini12-hp.jpg" alt="羅西尼220歲誕辰">

<a href="http://www.google.com" target="_blank">Google 首頁</a> | <a href="css.html">CSS Tutorial</a>
```

`<img>` 圖，`<a>` 超連結，`<iframe>` 嵌入框

```
<img src="網址" alt="圖壞掉時顯示的字" (width="寬" height="高")>
<a href="網址" (target="_blank")>顯示的文字</a>
<iframe src="網址"></iframe>
```

---

網址
----

http:// 開頭

/ 開頭

相對路徑

---

<!--
表單
----
```
<h1>民意調查</h1>
<form action="http://postecho.heroku.com/" method="post">
  <p>
    <label for="what">你想要努力培養什麼呢？</label>
    <input type="text" name="w" id="what">
  </p>
  <p>你覺得這衣料看起來像？</p>
  <ul>
    <li>
      <input type="checkbox" name="like[]"
       id="board" value="盤">
      <label for="board">棋盤</label>
    </li>
    <li>
      <input type="checkbox" name="like[]"
       id="paper" value="紙">
      <label for="paper">稿紙</label>
    </li>
    <li>
      <input type="checkbox" name="like[]"
       id="cake" value="糕">
      <label for="cake">綠豆糕</label>
    </li>
  </ul>
  <input type="submit" value="送出">
</form>
```
-->
<!--

表單 - 勾勾和點點
---------------

```
<form action="http://postecho.heroku.com/" method="post">

  <input type="checkbox" name="c[]" value="c0">
  <input type="checkbox" name="c[]" value="c1">
  <input type="radio" name="d" value="d0">
  <input type="radio" name="d" value="d1" id="radio-1">
  <label for="radio-1">LABEL</label>
  <br>
</form>
```

`name` 屬性一樣 → 同一組

`<label>` 的 `for` 屬性和 `<input>` 的 `id` 屬性配對
-->

HTML5 語意標籤
-------------

`<section>`：章節 / 小節

`<article>`：一篇文章

`<section>` 可以包在 `<article>`，

`<article>` 可以包在 `<section>`。

- - -

`<nav>`：導覽選單

`<header>`、`<footer>`：文章段落或頁面的開頭、結尾

- - -

[後面的範例](#/layout)會用到。

---

通用屬性
-------

大部分 element 都有下面屬性：

[[mrorz-html-general?live,html]]

<ul>
  <li class="fragment"><code>class</code>, <code>id</code>：替該 element 加上一個 classname / unique ID，使 CSS 的 selector 能選取、Javascript 方便操作。</li>
  <li class="fragment"><code>title</code>：工具提示（tooltip）</li>
  <li class="fragment"><code>style</code>：加上 CSS Declaration。</li>
</ul>
