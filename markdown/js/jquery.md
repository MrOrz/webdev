開始用 jQuery
--------

神秘咒語

```
<script type="text/javascript"
 src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js">
</script>
```

然後施魔法


~~~
  <p></p>

  &lt;script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"&gt;&lt;/script&gt;
  &lt;script type="text/javascript"&gt;
    $('p').text('jQuery 好 Q!');
  &lt;/script&gt;
~~~


---

全能 DOM 改造王
--------
物件 5927：不方便的 API

~~~
  // 偵測是否同意出師表
  var form = document.querySelector('#submitform');

  form.addEventListener('submit', function(e){
    if(!document.querySelector('#tos').checked){
      alert('請詳閱出師表。');
      e.preventDefault();
    }
  });

  // 增加推薦人
  document.querySelector('.add-referral')
          .addEventListener('click', function(){

    // 開一個 buffer，建立下面架構：
    /*
      <p>
        <input type="text" name="referral">
        <a class="del" href="javascript:;">刪除</a>
      </p>
    */
    var buffer = document.createDocumentFragment(),
        p      = buffer.appendChild(
                    document.createElement('p')),
        txt    = p.appendChild(
                    document.createElement('input')),
        del    = p.appendChild(
                    document.createElement('a'));

    txt.setAttribute('type', 'text');
    txt.setAttribute('name', 'referral');
    del.setAttribute('class', 'del');
    del.setAttribute('href', 'javascript:;');
    del.innerHTML = '刪除';

    // 把 buffer 內容塞進 DOM
    document.querySelector('#referrals')
            .appendChild(buffer);
  });

  // 刪除推薦人
  form.addEventListener('click', function(e){
    // 若 'click' 事件來自 <a class="del">
    if(e.target.className === 'del'){
      // 把包著 <a class="del"> 之 <p> 整個移除。
      var p = e.target.parentNode;
      p.parentNode.removeChild(p);
    }
  });
~~~

DOM 這個 API 很長，相當困擾。


---

一級 DOM 改造士: jQuery
--------

### SPEC

* 表單送出時，檢查是否接受出師表
* 按「增加推薦人」時，蓋一個下面的東西：

  ```
    <p>
      <input type="text" name="referral">
      <a class="del">刪除</a>
    </p>
  ```
* 按裡頭的「刪除」時，把整個 `<p>` 移除。

### 希望
  寫少一點，作到的事情更多。


---

BEFORE
--------

~~~
  var form = document.querySelector('#submitform');

  // 偵測是否同意出師表
  form.addEventListener('submit', function(e){
    if(!document.querySelector('#tos').checked){
      alert('請詳閱出師表。');
      e.preventDefault();
    }
  });

  // 增加推薦人
  document.querySelector('.add-referral')
          .addEventListener('click', function(){

    // 開一個 buffer，建立下面架構：
    var buffer = document.createDocumentFragment(),
        p      = buffer.appendChild(
                    document.createElement('p')),
        txt    = p.appendChild(
                    document.createElement('input')),
        del    = p.appendChild(
                    document.createElement('a'));

    txt.setAttribute('type', 'text');
    txt.setAttribute('name', 'referral');
    del.setAttribute('class', 'del');
    del.setAttribute('href', 'javascript:;');
    del.innerHTML = '刪除';

    // 把 buffer 內容塞進 DOM
    document.querySelector('#referrals')
            .appendChild(buffer);
  });

  // 刪除推薦人
  form.addEventListener('click', function(e){
    // 若 'click' 事件來自 <a class="del">
    if(e.target.className === 'del'){
      // 把包著 <a class="del"> 之 <p> 整個移除。
      var p = e.target.parentNode;
      p.parentNode.removeChild(p);
    }
  });
~~~


---

AFTER
--------

<iframe width="150" height="40" style="position: absolute; right: 0; top: 0; opacity: 0.1;" src="http://www.youtube.com/embed/E9gfiTAhScM?rel=0" frameborder="0"></iframe>

なんということでしょう!


~~~
  $('#submitform').on('submit', function(e){
    // 偵測是否同意出師表
    if(!$('#tos').attr('checked')){
      alert('請詳閱出師表。');
      e.preventDefault();
    }
  }).on('click', '.del', function(){
    // 刪除推薦人
    // 把包著 <a class="del"> 之 <p> 整個移除。
    $(this).parents('p').remove();
  });

  // 增加推薦人
  $('.add-referral').on('click', function(){
    // 把下面內容塞進 DOM
    $('<p><input type="text" name="referral"><a class="del">刪除</a></p>').appendTo('#referrals');
  });
~~~