## timer

可自动销毁的定时器，setTimeout 和 setInterval，需要在安装库时传入 router

### 说明

- 配置 在引入库时传入 router：`Vue.use(plugRQw,{router,...})`

- 使用 两个定时器方法挂在 vue 原型下面，组件里使用`this`调用，其他情况使用`Vue.prototype`调用，参数和`window`的定时器一样

- 注意 定时器会在路由变换时自动销毁，只管用就行了，不用在定时器回调里面手动销毁定时器
