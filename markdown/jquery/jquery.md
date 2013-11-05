開始用 jQuery
--------

神秘咒語

<pre><code>&lt;script type="text/javascript"
 src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"&gt;
&lt;/script&gt;
</code></pre>

然後施魔法

[[mrorz-js-jquery]]

---

全能 DOM 改造王
--------
物件 5927：不方便的 API

[[mrorz-js-jquery-form]]

DOM 這個 API 很長，相當困擾。

---

DOM 改造專家: jQuery
--------

### 需求

* 表單送出時，檢查是否接受出師表
* 按「增加推薦人」時，蓋一個下面的東西：
  ```
    <p>
      <input type="text" name="referral">
      <a class="del">刪除</a>
    </p>
  ```
* 按裡頭的「刪除」時，把整個 `<p>` 移除。

------

### 希望
  寫少一點，作到的事情更多。


---

BEFORE
--------

[[mrorz-js-jquery-form?javascript]]


---

AFTER
--------

なんということでしょう!

[[mrorz-js-jquery-form2?javascript]]

附加功能：支援 IE6~8。