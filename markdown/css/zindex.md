正常狀況
------

![正常情形](images/css/zindex-normal.jpg)

---

怪怪的
------

![不正常情形1](images/css/zindex-abnormal.jpg)

---


還是怪怪的
------

![不正常情形2](images/css/zindex-abnormal2.jpg)

---

Layered Presentation
----------------

![Layers in Microsoft Word](images/css/word-layers.png)

決定誰在「前面」誰在「後面」

[「Stacking Context」](http://www.w3.org/TR/CSS2/visuren.html#layers): 疊東西的地方＝樓層

<p class="fragment">
一開始所有元素都在同一樓層 <br>
（Root stacking context ＝ `<html>`）
</p>

---

萬丈高樓平地起
------------

<div class="row leader">
  <div class="span2">
    ![Elevator](images/css/elevator.jpg)
    <small>
      [圖片來源 - flickr](https://www.flickr.com/photos/ryochan/3708078394/)
    </small>
  </div>
  <div class="span4">
    <p class="leader trailer">`z-index` = 樓層號碼（整數）</p>
    <hr>
    <h4 class="leader">形成 stacking context（新樓層）</h4>
    <ul>
      <li>`position: 非 static`</li>
      <li>`z-index != auto` 或 `opacity < 1`</li>
    </ul>
  </div>
</div>

---

巢狀 Stacking Context
--------

* 樓層內加蓋
* 不同樓層的樓中樓，不會交錯

- - -

[[mrorz-css-zindex]]

---

另一種比喻
--------

[「Stacking Context」](http://www.w3.org/TR/CSS2/visuren.html#layers): 疊東西的地方。

<div class="row">
  <div class="span3">

    <p class="trailer">疊東西的地方。</p>

    ![Lunch](images/css/lunchbox.jpg)

    <a href="http://global.rakuten.com/zh-tw/store/wakei-seijyaku/item/10000780/" class="leader">
      <small>圖片來源：酪梨壽司 - 愛妻便當</small>
    </a>
  </div>
  <div class="span3">

    <p class="trailer">允許樓中樓。</p>

    ![Lunch](images/css/lunch.jpg)

    <a href="http://www.tpe-bendon.com.tw/share_main.asp?sn=2" class="leader">
      <small>圖片來源：樂天拍賣</small>
    </a>

  </div>
</div>

<small>
  特別感謝 Lucien - [淺談 CSS 開發與除錯](http://selfecy.com/css-troubleshooting-slide/#/8/8)
</small>

---

處理 `z-index`
-------------

<div class="row">
  <div class="span2">![正常情形](images/css/zindex-normal.jpg)</div>
  <div class="span2">![不正常情形1](images/css/zindex-abnormal.jpg)</div>
  <div class="span2">![不正常情形2](images/css/zindex-abnormal2.jpg)</div>
</div>

<ul class="fragment">
  <li>替 topbar（含 dropdown menu）建立 stacking context。</li>
  <li>替網頁主體建立 stacking context。</li>
  <li>讓 topbar 的 z-index 高過網頁主體。</li>
</ul>

---

萬丈高樓平地起
------------

<div class="leader row">
  <div class="span4">
    <p>蓋房子順序：</p>
    <p>地基 → 地下室 → 低樓層 → 高樓層</p>
    <ol style="vertical-align: middle;">
      <li>stacking context 之背景與邊界</li>
      <li>負 `z-index` 的 element</li>
      <li>地表：`z-index:0 | auto` 的 element</li>
      <li>正 `z-index` 的 element</li>
    </ol>
  </div>
  <div class="span2">
    <a href="http://www.w3.org/TR/css3-box/#stacking" title="Source: CSS basic box model">
      ![疊疊疊](images/css/stack.png)
    </a>
  </div>
</div>

[[mrorz-css-zindex]]

---

同一層裡面
--------

z-index 相同的元素，用下面規則分高下。

（由低至高）

<div class="row">
  <div class="span4">
    <ol>
      <li>Normal flow 中的 block elements</li>
      <li>float elements</li>
      <li>文字等 inline elements</li>
      <li>`position` != `static` 的 element <em>(Positioned elements)</em></li>
    </ol>
  </div>
  <div class="span2">
    <img src="images/css/ground-stacking.png" alt="疊疊" style="vertical-align: middle;">
  </div>
</div>

- - -

若兩元素同一層，則先寫在 HTML 檔裡的，會被壓在下面。
<!--<p class="leader">
  <a href="http://jsfiddle.net/49aV7/">示例1</a>
  <a href="http://jsfiddle.net/49aV7/2">示例2</a>
</p>-->

---

Stacking Order
--------------
<!-- 一步一步說明：http://www.vanseodesign.com/css/css-stack-z-index/ -->
<!-- https://developer.mozilla.org/en-US/docs/CSS/Understanding_z-index -->

<abbr title="position 不為 static（亦即 relative, absolute 或 fix）的元素">Positioned 元素</abbr> > Inline 元素 > float 元素 > block in Normal Flow </p>

[[mrorz-css-stacking]]

---

Stacking Order
---------------
<!-- 一步一步說明：http://www.vanseodesign.com/css/css-stack-z-index/ -->
<!-- https://developer.mozilla.org/en-US/docs/CSS/Understanding_z-index -->
加上 z-index
[[mrorz-css-stacking2]]

[Z-Index And The CSS Stack: Which Element Displays First?](http://www.vanseodesign.com/css/css-stack-z-index/)