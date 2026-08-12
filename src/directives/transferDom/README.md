# transferDom 指令

DOM 传送指令，用于将元素从原始位置移动到指定的目标容器中。

## 使用场景

- 弹窗、下拉菜单等组件需要脱离原始 DOM 层级，避免被父元素的 `overflow: hidden` 或 `z-index` 影响
- 需要将元素渲染到 `body` 或其他指定容器中
- 解决定位上下文问题（如 fixed 定位在 transform 元素内失效）

## 使用方法

该指令为内部使用指令，通常不需要直接在业务代码中使用。库中的组件（如 `tableSetting`）会自动使用该指令。

### 基础示例

```vue
<template>
  <!-- transfer 为 true 时启用传送，元素会被移动到 body 下 -->
  <div
    v-transfer-dom
    :data-transfer="true"
    class="dropdown-menu"
  >
    下拉内容
  </div>
</template>
```

### 动态控制

```vue
<template>
  <!-- 通过变量动态控制是否启用传送功能 -->
  <div
    v-transfer-dom
    :data-transfer="shouldTransfer"
    class="popup"
  >
    弹窗内容
  </div>
</template>

<script>
export default {
  data() {
    return {
      shouldTransfer: true
    }
  }
}
</script>
```

## API

### 指令绑定值

| 属性 | 类型 | 说明 |
|------|------|------|
| value | `string \| Node` | 可选，目标容器。可以是 CSS 选择器或 DOM 节点，不传时默认为 `body` |

### 元素属性

| 属性 | 类型 | 说明 |
|------|------|------|
| data-transfer | `boolean` | 必须设置，控制是否启用传送功能。设置为 `true` 时启用，`false` 时禁用 |

## 注意事项

1. **必须设置 `data-transfer` 属性**：指令会检查元素的 `data-transfer` 属性，只有当其值为 `'true'` 时才会生效
2. **`data-transfer` 仅控制开关**：该属性只控制是否开启传送功能，值只能是 `boolean` 类型，不指定目标容器
3. **目标容器由指令值决定**：通过 `v-transfer-dom="'#app'"` 的方式指定目标容器，默认为 `body`
4. **元素会被添加 `v-transfer-dom` class**：便于样式调试和识别
5. **原始位置会保留注释占位符**：元素被移动后，原位置会留下一个 HTML 注释节点作为占位
6. **组件卸载时会自动还原**：元素会被移回原始父容器，并清理相关数据
7. **动态切换目标容器**：支持在运行时动态修改目标容器，指令会自动处理移动逻辑
8. **该指令主要用于组件内部**：业务代码中通常不需要直接使用，除非有特殊需求

## 实现原理

1. 在 `inserted` 钩子中，将元素从原始父节点中移除
2. 在原位置创建一个 HTML 注释节点作为占位符
3. 将元素添加到目标容器中
4. 在 `componentUpdated` 钩子中，监听目标容器的变化并动态调整
5. 在 `unbind` 钩子中，将元素移回原始父节点并清理数据

## 参考来源

- [vux/transfer-dom](https://github.com/airyland/vux/blob/v2/src/directives/transfer-dom/index.js)
- [vue-dom-portal](https://github.com/calebroseland/vue-dom-portal)