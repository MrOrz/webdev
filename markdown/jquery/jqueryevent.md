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

[[mrorz-js-jquery-event?javascript,console,live]]

「callback」：未來某條件符合時，會被執行的 function。

* 第一個引數是 [Event object](http://api.jquery.com/category/events/event-object/)

以下用 `event` 指稱 handler 裡的 event object。


---

Event Propagation
------

子元素的事件觸發時，父元素的該事件也會跟著被觸發 (bubbling)。

[[mrorz-js-jquery-evtprop]]

[`event.stopPropagation()`](http://api.jquery.com/event.stopPropagation/) 終止事件散播。


---

抑制原本的動作
------

[`event.preventDefault()`](http://api.jquery.com/event.preventDefault/)

[[mrorz-js-jquery-preventdefault]]

和 `event.stopPropagation()` 不同。


---

handler 的回傳值
------

`return false` = `event.stopPropagation()` + `event.preventDefault()` + `return`

[[mrorz-js-jquery-evtreturn]]

---

`.on()`
------

`$物件.on('事件', [selector,] handler)`

若觸發者為 `$物件` 子孫中符合 `selector` 者，則執行 handler。

[[mrorz-js-jquery-form2]]

---

捷徑
-------

`.on('click', handler)` → `.click(handler)`

[[mrorz-js-jquery-form2]]

不加 `handler` 則可觸發相對應事件（執行該事件的 callback）


---

常用的 events
----

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
----

### 鍵盤相關
* `keydown`, `keyup`：按下 / 放開鍵盤按鍵時

### 載入相關
* `ready`：DOM 載入完成時
* `error`：圖片載入錯誤時

