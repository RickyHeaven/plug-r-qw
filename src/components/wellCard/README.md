## wellCard

带标题和顶部按钮的卡片，全局组件,直接使用

### 属性

- title: 字符串，标题

- fitToContent: 布尔值，卡片组件尺寸会根据内容改变，该模式下`width`和`height`不再生效，无需再传，默认：`false`

- width: 字符串/正整数，宽度，默认：`100%`

- height: 字符串/正整数，高度，默认：`100%`

- inline: 布尔对象，是否为行内元素，默认：`false(块级元素)`

### 注意

- 卡片内容通过默认插槽引入，可以直接放在标签内，如：

```$xslt
<wellCard title="模块A">
    我是内容~~~~~~~~~~
</wellCard>
```

- 顶部按钮通过 slot 引入，插槽名为*bts*，如：

```$xslt
<template #bts>
    <div class="fullHeight tr">
        <Button class="headerBt withIcoL" type="text" @click="handleClick" size="small" ghost>
            <icon type="md-add"/>新增
        </Button>
    </div>
</template>
```

- 卡片支持主题定制化，具体方法在[该库的 README](/README.md)中有讲，顶部背景色和卡片边框色为`@titleBg`，顶部文字颜色为`@textColor`，顶部高度为`@headerH`。
