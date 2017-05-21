Flex 的特色
-----

1. 按照特定方向 (`flex-direction`) 排列 box
2. 大小是 Flex 的（`flex`）
3. 可以調整對齊方式（`justify-content`、`align-items`）
4. 顯示順序可以透過 CSS 調整 (`order`)

---

[Flex containers & items](https://www.w3.org/TR/css-flexbox-1/#box-model)
-----

`display: flex`

* Flex container：`display: flex` 的元素
* Flex items：Flex container 的 children。

[[rupixumuwi/1]]

---

排版設定 - `flex-direction`
-----

![Flex direction](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)

`flex-direction: row | column | row-reverse | column-reverse`

* 寫在 flex container／預設 `row`
* 沿著 flex-direction 方向為 “Main axis”、大小叫 “Main size”
* 與 flex-direction 垂直的方向為 “Cross axis”、大小叫 “Cross size”

---

排版設定 - `flex-wrap`
---

`flex-wrap: nowrap | wrap | wrap-reverse`

* 寫在 flex container／預設 `nowrap`
* `nowrap`：無論如何，將所有 flex item 排成一條線
* `wrap`：flex item 可以有很多行，寬度不夠就換行
* `wrap-reverse`：同 `wrap`，但是從最後一行開始排到第一行。

[[cerinecito/1]]

---

排版設定 shorthand
---

上面 2 個 CSS property 可以合併成下面 shorthand

`flex-flow: <flex-direction> <flex-wrap>`

[[cerinecito/1]]

---

決定 Main size - `flex-basis`
----

`flex-basis: content | width 與 height 能用的值`

* 寫在 flex item／預設 `auto`
* `content`：內容大小。
* `auto`：看 main size property（`width` 或 `height`）；如果其為 `auto`，則視為 `content`。

[[cerinecito/1]]

---

決定 Main size  - `flex-grow`
---

`flex-grow: 0 | <positive number>`

* 寫在 flex item／預設 `0`
* flex item 依照 `flex-basis` 排列好後，如果 main axis 方向排不滿一行（flex line），瀏覽器會依照每個 flex item 所寫的數字為比例來增加該 flex line 每個 flex item 的 main size，直到佔滿 flex line。

[[cerinecito/1]]

---

決定 Main size  - `flex-shrink`
---

`flex-shrink: 0 | <positive number>`

* 寫在 flex item／預設 `1`
* flex item 依照 `flex-basis` 排列好後，若 main axis 方向的大小超出 flex container，瀏覽器會依照每個 flex item 所寫的數字、乘上寬度後，依比例來減少 main size，直到恰好佔滿 main axis 的一行（flex line）。

[[cerinecito/1]]

---

決定 Main size - `flex-shrink`
---

多行的狀況下⋯⋯

* 空間不夠會先斷行（建立新 flex line）
* 若有 flex line 只剩下一個 flex item，才有可能會縮小：
  - flex line 的寬度還是超過 flex container
  - `flex-shrink` 不為 `0`

[[cerinecito/1]]

---

Main size shorthand - `flex`
---

```
flex: auto | none |
      <flex-grow> |
      <flex-grow> <flex-shrink> |
      <flex-grow> <flex-shrink> <flex-basis>
```

* 寫在 flex item／預設 `0 1 auto`
* `auto` = `flex: 1 1 auto`
* `none` = `flex: 0 0 auto`
* 1 個值 = `flex: <值> 1 0;`
* 其他：沒填的就會使用預設值。

[spec 稱：「這樣的行為符合一般期待」](https://www.w3.org/TR/css-flexbox-1/#flex-common)

---

決定 Cross size
---

* 每個 flex-item 的 cross-size property（`height` 或 `width`）
* `align-items` 的設定

---

Cross axis 對齊 - `align-items`
---

`align-items: stretch | flex-start | flex-end | center | baseline`

* 寫在 flex container／預設 `stretch`


---

Main axis 對齊 - `justify-content`
---

`justify-content: flex-start | flex-end | center | space-between | space-around`

* 寫在 flex container／預設 `flex-start`
