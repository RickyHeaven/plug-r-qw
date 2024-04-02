## formTeam

`分组表单`,formR 及其族群组件的一种特殊使用方式

### 应用场景

单个表单内部的表单项需要分组，用于布局和样式控制，同一组表单项有共同的父元素，利用这个父元素可以独立控制该组的布局和样式（可以通过`teamClass`属性指定这类父元素的 class）

### 使用方法

- formData 属性需要传递二维数组（普通表单为一维数组），如：

```
[
  [
    {
      type: 'input',
      key: 'name',
      label: '姓名'
    },
    {
      type: 'input',
      key: 'sex',
      label: '性别'
    }
  ],
  [
    {
      type: 'input',
      key: 'post',
      label: '应聘岗位'
    },
    {
      type: 'input',
      key: 'pay',
      label: '期望薪资'
    }
  ]
]
```

这是一个表单，但是内部表单项可以分为“基本信息”和“应聘信息”两组，并在布局和样式上进行区分，具体可参考库内示例项目`formTeam`。

### 相关属性

- teamClass 字符串，分组表单-组容器的 class，用于布局和样式控制，默认：`formTeamBox`

### 注意

- 每个组容器被分配了单独的 class（该 class 不随 teamClass 的值改变），如：`formTeamBox0`、`formTeamBox1`等，用于对每个组容器进行单独的样式控制（如容器高度）。

- 因为分组表单的 formData 为二维数组，所以调用`updateFormDataT`方法时需要传两个索引值，如：`{index:1,indexB:1,label:XXX,title:XX}` 意思是改变分组表单第二组第二个表单项的 label 和 title 的值。
