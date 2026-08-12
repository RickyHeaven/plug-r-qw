# loadmore 指令

滚动加载更多指令，常用于 select 下拉滚动监听。

## 使用场景

- select 下拉滚动到底部加载更多
- 列表滚动加载
- 无限滚动加载

## 使用方法

安装本库后，指令会自动注册到 Vue 应用中，直接在组件中使用即可。

### 基础示例

```vue
<template>
  <!-- 默认监听 .ivu-select-dropdown 或元素自身的滚动 -->
  <div v-loadmore="loadMore" class="scroll-container">
    <div v-for="item in list" :key="item.id">{{ item.name }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]
    }
  },
  methods: {
    loadMore() {
      console.log('滚动到底部，加载更多')
      // 加载更多数据
    }
  }
}
</script>
```

### 指定滚动容器

可以通过指令参数传递 class 名称来指定滚动容器：

```vue
<template>
  <!-- 指定 class 为 my-select 的元素作为滚动容器 -->
  <div v-loadmore:my-select="loadMore">
    <select class="my-select">
      <option v-for="item in options" :key="item.value">{{ item.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: []
    }
  },
  methods: {
    loadMore() {
      console.log('滚动到底部，加载更多')
    }
  }
}
</script>
```

## API

### 指令绑定值

| 属性 | 类型 | 说明 |
|------|------|------|
| value | `Function` | 滚动到底部时触发的回调函数 |
| arg | `string` | 可选，指定滚动容器的 class 名称 |

## 注意事项

1. 滚动容器需要有固定的高度和 `overflow: auto` 或 `overflow: scroll`
2. 当滚动位置满足 `scrollTop > 0 && scrollHeight - scrollTop <= clientHeight` 时触发回调
3. 组件卸载时会自动移除事件监听器，无需手动清理
4. 如果没有传递指令参数，默认会查找 `.ivu-select-dropdown` 或使用元素自身作为滚动容器