# clickOutside 指令

在容器外部有鼠标点击事件时触发。

## 使用场景

- 点击弹窗外部区域关闭弹窗
- 点击下拉菜单外部区域收起菜单
- 点击输入框外部区域收起自动完成列表

## 使用方法

安装本库后，指令会自动注册到 Vue 应用中，直接在组件中使用即可。

### 基础示例

```vue
<template>
  <div v-if="isOpen" v-click-outside="handleClose" class="dropdown-menu">
    <ul>
      <li>选项 1</li>
      <li>选项 2</li>
      <li>选项 3</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true
    }
  },
  methods: {
    handleClose() {
      this.isOpen = false
      console.log('点击了外部区域')
    }
  }
}
</script>
```

### 获取事件对象

```vue
<template>
  <div v-click-outside="handleOutsideClick" class="popup">
    点击外部区域会触发回调并传入事件对象
  </div>
</template>

<script>
export default {
  methods: {
    handleOutsideClick(event) {
      console.log('点击目标元素:', event.target)
      console.log('点击位置:', event.clientX, event.clientY)
    }
  }
}
</script>
```

## API

### 指令绑定值

| 属性 | 类型 | 说明 |
|------|------|------|
| value | `Function` | 点击发生在绑定元素外部时触发的回调函数 |
| 回调参数 | `MouseEvent` | 鼠标点击事件对象 |

## 注意事项

1. 指令会在组件更新（`update`）时自动更新绑定的回调函数，确保始终使用最新的函数引用
2. 组件卸载时会自动移除事件监听器，无需手动清理
3. 点击事件在 `document` 上监听，因此点击页面任何不在绑定元素内的区域都会触发回调
4. 如果点击发生在绑定元素内部（包括子元素），不会触发回调