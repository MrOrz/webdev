Events
------
互動的主要要素。

`$物件.on('事件', handler)`
`$物件.on('事件', selector, handler)`

------

[Events - jQuery API](http://api.jquery.com/category/events/)、
[`.on()`](http://api.jquery.com/on/) 、
[`.off()`](http://api.jquery.com/off/)


---

Event handler 
------
事件被觸發時，會被執行的 function，用來處理此事件。又稱作 `callback`。

~~~
<p>按我按我</p>
&lt;script type="text/javascript"&gt;
  var $body = $('body');
  $body.on('click', function(e){
    console.log('Event Object', e);
  });
&lt;/script&gt;
~~~

「callback」：未來某條件符合時，會被執行的 function。

* 第一個引數是 [Event object](http://api.jquery.com/category/events/event-object/)
* `event.target`：被觸發了該事件的 HTML Element。

以下用 `event` 指稱 handler 裡的 event object。



---

Event Propagation
------

子元素的事件觸發時，父元素的該事件也會跟著被觸發 (bubbling)。

~~~
<table>
  <tr> <td>31 號 2 樓</td> <td>33 號 2 樓</td> </tr>
  <tr> <td>31 號 1 樓</td> <td>33 號 1 樓</td> </tr>
</table>

<style type="text/css">
  table{
    border-collapse: separate;
    border: 3px solid black;
  }
  table td{
    border: 3px solid black;
  }
</style>

&lt;script type="text/javascript"&gt;
  var log = function(msg){
    $('body').append(msg + '<br>');
  };
  $('td').on('click', function(e){
    var td = $(this);
    log('拜訪' + td.text());
    td.css('borderColor', 'red');
  });
  $('tr').on('click', function(e){
    log('拜訪某層');
    $(this).css('background', '#ff0');
    // e.stopPropagation();
  });
  $('table').on('click', function(e){
    log('拜訪此建築');
    $(this).css('borderColor', '#990');
  });
&lt;/script&gt;
~~~
[`event.stopPropagation()`](http://api.jquery.com/event.stopPropagation/) 終止事件散播。



---

抑制原本的動作
------

[`event.preventDefault()`](http://api.jquery.com/event.preventDefault/)

~~~
  $('#submitform').on('submit', function(e){
    // 偵測是否同意出師表
    if(!$('#tos').attr('checked')){
      alert('請詳閱出師表。');
      e.preventDefault();
    }
  });
  $('a').on('click', function(e){
    if(!confirm('您即將離開此頁，要繼續嗎？')){
      e.preventDefault();
    }
  });
~~~

和 `event.stopPropagation()` 不同。


---

handler 的回傳值
------

`return false` = `event.stopPropagation()` + `event.preventDefault()` + `return`

~~~
  $('#submitform').on('submit', function(e){
    // 偵測是否同意出師表
    if(!$('#tos').attr('checked')){
      alert('請詳閱出師表。');
      return false;
      // 下面不會被執行。
    }
    alert('即將送出表單...');
  });
~~~


---

`.on()`
------

`$物件.on('事件', [selector,] handler)`

若觸發者為 `$物件` 子孫中符合 `selector` 者，則執行 handler。

~~~
  // 此行執行時，<a class="del"></a> 還不存在！
  //
  $('#submitform').on('submit', function(e){
    // 偵測是否同意出師表
    if(!$('#tos').attr('checked')){
      alert('請詳閱出師表。');
      e.preventDefault();
    }
  }).on('click', '.del', function(){
    // 刪除推薦人：
    // 把包著 <a class="del"> 之 <p> 整個移除。

    // 這裡的 this 是 .del
    $(this).parents('p').remove();
  });

  // 增加推薦人
  $('.add-referral').on('click', function(){
    // 把下面內容塞進 DOM
    $('<p><input type="text" name="referral"><a class="del">刪除</a></p>').appendTo('#referrals');
  });
~~~



---

捷徑
-------

`.on('click', handler)` → `.click(handler)`
`.on('submit', handler)` → `.submit(handler)`

~~~
  $('#submitform').submit(function(e){
    // 偵測是否同意出師表
    if(!$('#tos').attr('checked')){
      alert('請詳閱出師表。');
      e.preventDefault();
    }
  }).on('click', '.del', function(){ // 這行沒改。
    // 刪除推薦人：
    // 把包著 <a class="del"> 之 <p> 整個移除。
    $(this).parents('p').remove();
  });

  // 增加推薦人
  $('.add-referral').click(function(){
    // 把下面內容塞進 DOM
    $('<p><input type="text" name="referral"><a class="del">刪除</a></p>').appendTo('#referrals');
  });
~~~

不加 `handler` 則可觸發相對應事件（執行該事件的 callback）；
`.submit()` 還可以送出表單。


---

常用的 events
---

### 表單相關
* `focus`, `blur`：得到 focus / 失去 focus 時
* `focusin`, `focusout`：自己或裡面的元素得到 / 失去 focus 時
* `change`：表單元素的值（`value`）改變時
* `submit`: 表單送出前

### 滑鼠相關
* `click`：被點擊（按下滑鼠＋在元素內放開滑鼠）時
* `mousedown`, `mouseup`, `mousemove`: 按下 / 放開 / 移動滑鼠時
* `mouseenter`，`mouseleave`：滑鼠進入 / 離開某元素


---

常用的 events (續）
---

### 鍵盤相關
* `keydown`, `keyup`：按下 / 放開鍵盤按鍵時

### 載入相關
* `ready`：DOM 載入完成時
* `error`：圖片載入錯誤時

---

Exercise
---
[能新增項目的清單](sample/jquery-exercise.html)。

### SPEC

* 按「新增項目」按鈕可以在 `<ul>` 的開頭新增一個 `<li>`
* `<li>` 裡頭有 `<input>` 且進入打字狀態。
* 打完字後按 enter 鍵，可以結束編輯。
* 結束編輯時，將目前的所有項目存進 `localStorage`。順序要保留。
* 頁面剛被打開時，從 `localStorage` 裡撈之前存的資料。
