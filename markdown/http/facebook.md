### Facebook Social Plugin

只要使用者有登入 Facebook 就能有   讚按鈕、分享按鈕。

- - -

### Facebook Graph API 與 FQL

Facebook Object（文章、使用者、照片......等）的 API。

- - -

### Facebook 登入

使用者允許此應用程式後，可以得到使用者的 Access token，之後可用 Graph API 以使用者的身份做事情。

---

Facebook App
------------

Facebook 使用者把權限交付給某 Facebook App，此 App 以使用者的身分做事情。

![Facebook App attribution](images/http/app-attribution.png)

---

Social Plugin : Like Button
---------

最簡單、最常見的整合方式：讚按鈕。

[Like Button](https://developers.facebook.com/docs/reference/plugins/like/)

可設定要按讚的網址（URL to Like）、寬度與一些外觀。

<div class="row">
  <div class="span3 centered">
    ![Facebook Get Code](images/http/facebook-iframe.png)
  </div>
</div>

可透過 `iframe` 或 HTML5 + Facebook JS SDK 引入，或直接用一個連結來做。

---

Graph API / FQL
---------------

[Graph API Reference](https://developers.facebook.com/docs/reference/api/)

能讀取或發佈各種資源；每項資源裡有 fields（欄位）和 edges（巢狀資源）。

- - -

[FQL](https://developers.facebook.com/docs/reference/fql/)

將 Graph API 裡的「物件」當成資料庫的「資料表」來操作，可以拿到比較多資源、下比較複雜的指令。

---

用 ajax 存取 Graph API
------------

[[mrorz-ajax-demo2]]

---

Graph API Explorer
-------------------

[Graph API Explorer](https://developers.facebook.com/tools/explorer)

- - -

試試 `454607821247176` 可以拿得到什麼資源與欄位。

- - -

Page 物件有[很多 edge](https://developers.facebook.com/docs/graph-api/reference/page#edges)。

`454607821247176/posts` -- 塗鴉牆文章

`454607821247176/feed` -- 「Recent Posts by Others」

---

用 Facebook 帳號登入
----------

使用有名的複雜登入標準 Ouath2。

登入過程會導到 facebook.com 登入與授權。

![登入畫面](images/http/login.png) ![進階授權畫面](images/http/extended.png)

- - -

登入後，Facebook 把 Access token 傳給我們的網站

---

Token
-----

![令牌](images/http/token.jpg)

### 令牌

> 令牌是我國古代軍事所用的一種物品......通常由軍隊的最高長官發出，交給下屬軍官，用於在執行任務時，證明已經或了最高長官的指令或授權......類似於今天的介紹信、授權證明書或執法證件。
<a href="http://baike.baidu.com/view/544102.htm">-- 百度百科</a>

<div class="fragment">
  <hr>

  已獲授權的證明。
</div>

---

Access Token
------------

![進階授權畫面](images/http/extended.png)

裡頭有 App、目前的 Facebook 使用者是誰、允許的權限項目、登入時間等資訊（所以會 expire）。

[Login Permissions Reference](https://developers.facebook.com/docs/reference/login/#permissions)

Graph API 裡的 field 與 connection 都有[相對應的權限](https://developers.facebook.com/docs/graph-api/reference/page)。

---

Javascript SDK
-------------

[Javascript SDK Reference](https://developers.facebook.com/docs/javascript/reference)

`FB.init(...)` 放在特殊 function `fbAsyncInit` 中進行設定

`FB.login(...)` 處理登入與授權。

`FB.api(...)` 幫我們用 ajax 呼叫 Graph API。
