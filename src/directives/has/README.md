# has 指令

权限控制指令，用于根据权限显示/隐藏元素。

## 使用场景

- 按钮权限控制
- 菜单项权限控制
- 页面区域权限控制

## 使用方法

安装本库后，指令会自动注册到 Vue 应用中，直接在组件中使用即可。

### 基础示例

```vue
<template>
  <!-- 有权限时显示，无权限时隐藏 -->
  <button v-has="'user:add'">新增用户</button>
  <button v-has="'user:delete'">删除用户</button>
  <a v-has="'user:edit'">编辑</a>
</template>
```

## API

### 指令绑定值

| 属性 | 类型 | 说明 |
|------|------|------|
| value | `string` | 权限代码，如 `'user:add'` |

## 权限配置

使用前需要通过 `sessionStorage` 设置权限数据：

```javascript
// 设置权限，多个权限用逗号分隔
sessionStorage.setItem('btnPermissions', 'user:add,user:delete,user:edit')
```

## 注意事项

1. 权限数据需要通过 `sessionStorage.setItem('btnPermissions', 'permission1,permission2,...')` 设置
2. 指令仅在 `bind` 时检查权限，动态修改权限后需要重新渲染组件
3. 无权限时元素会被设置为 `display: none`，不会从 DOM 中移除