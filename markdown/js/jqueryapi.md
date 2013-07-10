Manipulation
------
操弄 DOM 結構與屬性

* [讀取 / 新增 class 或 CSS style](http://api.jquery.com/category/css/)
* [讀取 / 新增 / 移除屬性](http://api.jquery.com/category/attributes/)
* 在 [裡面](http://api.jquery.com/category/manipulation/dom-insertion-inside/) / [旁邊](http://api.jquery.com/category/manipulation/dom-insertion-outside/) 插入/移除 DOM element
* [包覆](http://api.jquery.com/category/manipulation/dom-insertion-around/)目前 DOM element

------

[Manipulation - jQuery API](http://api.jquery.com/category/manipulation/)


---

Manipulation
------

~~~
  <style type="text/css">
    p{
      border: 20px solid yellow;
      margin: 20px; padding: 20px;
    }
    .clearstyle{
      border: 0; margin: 0; font: 20px monospace;
    }
  </style>

  <p>我只是個 p。</p>

  &lt;script type="text/javascript" &gt;
    var old_p = $('p');

    // 複製原本的 <p>，加上 class
    var new_p = old_p.clone().addClass('clearstyle');

    // 設定新的 <p> 的內容
    new_p.html([
      'innerWidth: ', old_p.innerWidth(), '<br>',
      'outerWidth: ', old_p.outerWidth()
    ].join(''));

    // 設定 HTML element 屬性
    new_p.attr('title', '請拿左上角的尺');

    // 把新的 <p> 插入 DOM element
    old_p.after(new_p);
  &lt;/script&gt;
~~~

[`.addClass()`](http://api.jquery.com/addClass/) [`.clone()`](http://api.jquery.com/clone/) [`.innerWidth()`](http://api.jquery.com/innerWidth/) [`.attr()`](http://api.jquery.com/attr/) [`.after()`](http://api.jquery.com/after/)


---

Traversing
------
從目前 element 找到另一個 element

* [找親戚](http://api.jquery.com/category/traversing/tree-traversal/)
* [過濾](http://api.jquery.com/category/traversing/filtering/)目前的 jQuery object

------

[Traversing - jQuery API](http://api.jquery.com/category/traversing/)


---

Traversing
------

~~~
  <style type="text/css">
    p{
      padding: 1em; margin: 1em;
    }
    .border1 {
      border: 1px solid blue;
    }
    .border2 {
      border: 1px solid green;
    }
    .bg{
      background: #cfc;
    }
  </style>

  <section>
    Section 裡頭。
    <article>
      article  裡頭。
      <p>
        p 裡頭。
      </p>
      <p></p>
    </article>
  </section>

  &lt;script type="text/javascript"&gt;
    $('p').parents('section').addClass('border1');
    $('section').find('p').addClass('border2');
    $('section').find('p').not(':empty').addClass('bg');
  &lt;/script&gt;

~~~
[`.parents()`](http://api.jquery.com/parents/) [`.find()`](http://api.jquery.com/find/) [`.not()`](http://api.jquery.com/not/)
