## tableTooltip

Table专用tooltip，其他场景也可使用（本体内容和弹出层内容一样时），只在内容会导致换行或显示不完整时渲染tooltip，其他情况只渲染个简单的span，减少dom节点和浏览器压力，全局 UI 组件，直接用

### 属性

- content: 字符串|数字|布尔值|null|undefined，本体内容和弹出层内容

### 使用示例

```
  <tableTooltip content='234'/>
```
