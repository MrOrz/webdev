時間到
------
`setTimeout(callback, t)` 會在 `t` ms 後執行 `callback`。<br>回傳一個 handle。
`clearTimeout(handle)` 取消此倒數。

~~~javascript
document.write('多想兩分鐘');
setTimeout(
  function(){
    document.write(
      '你可以不用浪費兩分鐘。'
    );
  },
  60*2*1000
);
~~~

---

網址相關
--------
`location.href`, `location.hash`

~~~javascript
document.write([
  'href: ', location.href, '<br>',
  'hash: ', location.hash
].join(''));
~~~

傳值進去會重新整理瀏覽器頁面。

---

彈出式視窗
----------
`alert`, `confirm`, `prompt`

~~~javascript
var answer;
// answer = confirm('綠豆糕像不像稿紙？');
if(answer){
  // alert('很像。');
}else{
  // alert('不像。');
}
~~~

---

資料儲存
----------
`localStorage`, `sessionStorage`

* 用法像 javascript object
* `localStorage.KEY = VALUE`，`VALUE` 只能是字串
* `localStorage` 會一直存在，`sessionStorage` 僅存在瀏覽器分頁中

~~~javascript
if(!localStorage.created){
  localStorage.created = Date();
}
~~~

![Resources tab](images/js/localStorage.png)


---

用字串表示物件
----------
`localStorage` 的值只能存字串，無法儲存 javascript 物件

<p class="fragment">
  把物件用一個字串來表示。
</p>

<div class="fragment">

  <h3>JSON</h3>

  `Javascript String Object Notation`

  <p>
  `物件 = JSON.parse(字串)`、<br>`字串 = JSON.stringify(物件)`
  </p>

  <ul>
    <li>類似 javascript 物件的初始化方法（object literal）</li>
    <li>不會把 function (method) 變成字串</li>
  </ul>

<pre><code>var man = {like: ['紅茶', '總匯三明治'], mood: '淡定',
           say: function(){return '不要哭了'}},
    manstr = JSON.stringify(man);
document.write(manstr + '<hr>' + JSON.parse(manstr));
//sessionStorage.man = manstr;
</code></pre>

</div>

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