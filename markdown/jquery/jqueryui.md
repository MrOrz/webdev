jQuery UI
-------------------
* [拖曳等等](http://jqueryui.com/demos/sortable/)的互動
* [對話視窗](http://jqueryui.com/demos/dialog/)之類的 Widgets
* 更多[特效](http://jqueryui.com/demos/show/)

- - -  

### Why 介紹 it?

* jQuery UI 元件有統一的 API
* jQuery UI 是複雜程度適中的一種 jQuery plugin

<div class="fragment">
  而且作業會用到。
</div>

---

安裝 jQuery UI
-------------------
* 選擇 Theme，下載 jQuery UI
* 選擇要用的 plugin
* 引入需要的 css 和 javascripts

---

安裝 jQuery UI (I)
-------------------
選擇 Theme，下載 jQuery UI
<div class="row">
  <div class="span3">
    ![Theme roller](images/js/themeroller.png)
  </div>
  <div class="span3">
    ![下載](images/js/download.png)
  </div>
</div>

---

安裝 jQuery UI (II)
-------------------
載下來的檔案：

![檔案們](images/js/jqueryui.png)

* `css/THEME名/` 內有 jQuery UI 用的圖檔與 css 檔。
* `js/` 底下有 jQuery 與 jQuery UI 的 js 檔。
* development bundle 有文件和各個元件的原始碼。
* index.html 是此元件的 demo。

---

安裝 jQuery UI (III)
-------------------
<div class="row">
  <div class="span3">![放到 css 資料夾](images/js/tocss.png)</div>
  <div class="span3">開 `css/THEME名`，把 css 檔和 image 目錄複製到你放 css 的地方。</div>
</div>

<div class="row">
  <div class="span3">![放到 js 資料夾](images/js/tojs.png)</div>
  <div class="span3">把 jQuery UI 的 js 檔複製到放 js 的地方。</div>
</div>

* 打開要安裝 jQuery UI 的網頁，用 `link` 標籤連結 css 檔。
* 同上，用 `script` 標籤連結 jQuery UI 的 js 檔。


---

UI css 與 image
-------------------

![要修改的東西](images/js/changecss.png)

若分開放置把 image 目錄和 css 檔，請把 css 檔中所有 `url(...)` 的路徑，換成此 css 檔到圖檔的相對路徑。


---

jQuery UI API 形式
-------------------
jQuery UI 各種元件的的操作方式都很類似。

- - -

以下用 jquery UI `dialog` 為例。

---


* `$(元素).dialog({autoOpen: false, resizable: false})`：初始化 `dialog`。
* `$(元素).dialog('open')`：呼叫 dialog 的 method。
* `$(元素).on('dialogopen', handler)`：綁定 event handler。 

詳細的初始化 `option`、`event`、`method`，都在[文件](http://api.jqueryui.com/dialog/)裡。

[[mrorz-js-jqueryui]]

---

Demo
-----
用 jQuery UI sortable，把[能新增項目的清單](sample/jquery-exercise.html)改成可拖曳

### SPEC

* 要能上下拖曳清單項目
* 拖曳結束時，將目前順序存進 `localStorage`
* 新增刪除按鈕，按下去會有 jQuery UI dialog 確認是否繼續
* 別忘了刪除後也要更新 `localStorage`

<hr>
[修改後](sample/jqueryui-exercise.html)