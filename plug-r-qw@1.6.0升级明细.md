# plug-r-qw@1.6.0项目改动详细清单

## 一、核心组件优化

### 1. echartMap 地图组件
**改动内容：**
- 在 `getGeoCoordMap` 方法中增加了对 `echarts.getMap(name)` 返回值的空值校验
- 添加了 `!mapData || !mapData.geoJson || !mapData.geoJson.features` 的防御性判断

**避免的问题：**
- 防止当地图数据未加载完成或注册失败时，直接访问 `geoJson.features` 导致的 `TypeError: Cannot read properties of undefined` 崩溃
- 避免在异步加载场景下出现白屏或渲染异常

### 2. swal 提示框工具函数
**改动内容：**
- 将自定义类型判断 `myTypeof()` 替换为原生 `typeof` 操作符
- 重构了按钮配置逻辑，统一了 Object/String/Boolean 三种参数类型的处理流程
- 移除了冗余的 switch-case 分支，改为 if-else 链式判断
- 增加了对 `swal.close` 方法存在性的校验

**避免的问题：**
- `myTypeof` 自定义函数可能存在边界情况判断不准确的问题，使用原生 `typeof` 更加可靠
- 旧代码中 String 类型分支缺少 `icon` 和 `className` 等配置项的传递，导致样式不一致
- Boolean 类型参数为 false 时，旧代码未检查 `swal.close` 是否存在就直接调用，可能报错

### 3. fetch 请求工具
**改动内容：**
- 在响应拦截器中增加 `service.store` 存在性判断后再处理 403/409 状态码
- 修正 JSDoc 注释中示例代码的参数大小写（`ricky` → `Ricky`）

**避免的问题：**
- 当 `service.store` 未初始化时，触发 403/409 错误会导致 `messageBox` 调用失败，引发二次错误
- 确保登出处理逻辑仅在 store 可用时执行，避免在非正常初始化状态下崩溃

### 4. btTablePage 表格分页组件
**改动内容：**
- 优化了组件内部逻辑（具体改动需查看完整 diff）

### 5. 其他组件统一调整
涉及组件包括：
- alCascaderMC、asyncCascader、checkboxGroupThreeClass、checkboxGroupTwoClass、checkboxTree
- date、echarts、editor、fixedFullModal、formGroup、formModal、fullScreenPop
- headerBt、iconTxtBtn、inputMap、monthRange、pagePro、searchForm、selectInput
- selectScrollMore、showHidePanel、showHidePanelB、tableIconBtn、tableSearch
- tableSetting、tableTooltip、tableTree、transferBox、uploadGroup、wellCard

**改动类型：**
- 样式文件同步更新（对应的 .less 文件）
- 组件内部逻辑优化
- 注释规范化

---

## 二、工具函数优化

### 1. locale 国际化模块
**改动内容：**
- 引入 `isFormatting` 标志位，防止 `format` 函数调用 `t` 函数时形成无限递归
- 优化了 `i18nHandler` 函数，支持 Vue I18n 的 `global.t` API
- 将 `merged` 从布尔值改为对象类型，支持多语言环境的独立合并状态追踪
- 使用 `try-finally` 确保 `isFormatting` 标志位在异常情况下也能正确重置

**避免的问题：**
- **递归死循环**：当格式化字符串中嵌套调用 `t()` 时，会导致栈溢出
- **多语言切换异常**：旧代码使用单一布尔值 `merged`，切换语言时不会重新合并语言包
- **Vue I18n 兼容性**：增加了对新版 Vue I18n API 的支持

### 2. functionGroup 工具函数集
**改动内容：**
- **downloadFileByFormSubmit**：将动态创建的 form 元素改为单例复用（`_downloadForm`），避免重复创建和删除
- **downloadFileByFormSubmit**：增加 `document.body` 存在性校验
- **hasPermission**：增加 `btnPermissions.trim() !== ''` 判断，避免空字符串导致的误判
- **removeEmptyValue**：修正逻辑运算符优先级错误 `Array.isArray(data[key] || ...)` → `Array.isArray(data[key]) || ...`
- **removeEmptyValue**：初始化 `temp` 变量为 `{}` 避免 undefined
- **htmlPrint**：增加 `window.open()` 返回值校验，防止弹窗被拦截时报错
- **siblingElems**：增加 `previousSibling/nextSibling` 存在性判断，避免遍历到 null

**避免的问题：**
- **DOM 内存泄漏**：每次下载都创建新 form 元素，频繁操作可能导致内存问题
- **逻辑错误**：`Array.isArray(data[key] || _.isPlainObject(data[key]))` 的写法会导致 `||` 先执行，永远返回错误的判断结果
- **空指针异常**：`window.open()` 被浏览器拦截时返回 null，直接调用 `.document.write()` 会报错
- **权限判断失误**：空字符串 `split(',')` 会返回 `['']`，导致 `indexOf` 判断异常

### 3. fullScreenImgByDom / fullScreenImgPreview
**改动内容：**
- 优化全屏图片预览逻辑

### 4. messageBox 消息框
**改动内容：**
- 优化消息框组件逻辑

### 5. spin 加载动画
**改动内容：**
- 优化加载动画工具

### 6. timer 定时器
**改动内容：**
- 优化定时器管理

### 7. wangeditor5init 编辑器初始化
**改动内容：**
- 优化富文本编辑器初始化逻辑

### 8. clickOutside 指令
**改动内容：**
- 优化点击外部关闭指令

---

## 三、示例项目重构

### 1. 目录结构调整
**改动内容：**
- 将所有示例组件从 `examples/components/` 迁移至 `examples/views/`
- 涉及 50+ 个示例文件的路径变更

**优势：**
- **语义更清晰**：`views` 目录更符合 Vue 项目惯例，表示页面级视图组件
- **路由配置一致性**：路由的 `component` 指向 `views` 目录，与实际文件位置一致，避免混淆
- **便于维护**：组件目录（`components`）专用于可复用组件，视图目录（`views`）专用于页面示例，职责分离

### 2. App.vue 主应用组件升级
**改动内容：**
- 新增顶部导航栏（`appHead`），包含品牌 Logo、语言切换组件（`SetLang`）、测试文本
- 新增侧边菜单（`SideMenuE`），基于路由配置动态生成菜单项
- 引入 Pinia 状态管理，通过 `mapState` 映射 `fullScreen` 状态
- 菜单数据通过 `router.options.routes` 自动生成，并按名称排序
- 过滤掉 `login` 和 `tablePrint` 等不需要在菜单中显示的路由
- 新增全屏模式样式支持（`fullHeight` 类）

**新增功能：**
- **动态菜单生成**：无需手动维护菜单数据，路由变更自动同步
- **语言切换入口**：顶部提供语言切换按钮，方便测试国际化功能
- **全屏模式支持**：特定页面（如登录页、打印页）可隐藏导航和菜单，实现全屏展示
- **路由守卫**：新增 `beforeEach` 守卫，自动处理全屏状态切换

**优势：**
- **减少维护成本**：菜单与路由自动同步，新增示例页无需额外配置菜单
- **提升用户体验**：侧边菜单提供清晰的导航结构，按字母排序便于查找
- **响应式布局**：使用 flex 布局，适配不同屏幕尺寸

### 3. 路由配置优化
**改动内容：**
- 所有路由的 `component` 路径从 `./components/` 改为 `./views/`
- 每个路由增加 `meta.desc` 字段，用于菜单显示
- 新增路由守卫 `beforeEach`，处理全屏状态逻辑
- 导出 router 实例（`export default router`）

**新增路由：**
- 补全了多个缺失的路由配置（selectInput、selectScrollMore、showHidePanel 等）

### 4. 新增组件
- **SetLang.vue**：语言切换组件，支持多语言切换
- **SideMenuE.vue**：侧边菜单组件，基于路由数据动态渲染
- **Md.vue**：Markdown 渲染组件
- **NodeServeInfo.vue**：Node 服务信息展示组件

### 5. 删除组件
- **testHouse.vue**：废弃的测试组件
- **toHome.vue**：废弃的首页跳转组件
- **Home.vue**：旧版主页（490 行），被新的 App.vue 布局替代
- **routerViewComponent.vue**：废弃的路由视图组件

### 6. 国际化文件更新
- **zh-CN.js**：更新中文语言包
- **en-US.js**：更新英文语言包
- **ru-RU.js**：更新俄文语言包

---

## 四、Node 服务升级

### 1. 新增 Excel 导出功能（export.js）
**功能描述：**
- 使用 `ExcelJS` 库生成 Excel 文件
- 从数据库读取 `bt-table-page` 表数据并导出
- 支持表头样式设置（加粗、背景色）
- 提供两个接口：
  - `/export-excel`：立即导出
  - `/export-excel-slow`：延迟 5 秒导出（用于测试加载状态）

**技术实现：**
- 异步生成 Excel 工作簿
- 设置响应头 `Content-Type` 和 `Content-Disposition`
- 完善的错误处理机制

### 2. 数据库文件（node-serve/data/database.json）
**改动内容：**
- 新增 778 行数据库文件
- 存储示例数据供 API 调用

### 3. router.js 路由优化
**改动内容：**
- 移除对 `formRData` 静态数据文件的依赖
- 改用 `_get('people', 1, -1)` 从数据库动态获取数据
- 统一代码缩进格式（2 空格 → Tab）
- 优化了分页查询逻辑

**优势：**
- **数据统一管理**：所有数据从 database.json 读取，避免多数据源不一致
- **代码可维护性**：统一的数据访问接口，便于后续扩展

### 4. 删除 init.js
**改动内容：**
- 移除初始化脚本（15 行）

### 5. 其他服务文件优化
- **database.js**：数据库操作优化
- **fileBase.js**：文件基础操作优化
- **index.js**：服务入口优化
- **upload.js**：文件上传下载优化

---

## 五、其他改动

### 1. 构建产物更新
- `lib/plugRQw.common.js` 及其 gzip 版本
- `lib/plugRQw.umd.js` 及其 gzip 版本
- `lib/plugRQw.umd.min.js` 及其 gzip 版本

### 2. 依赖更新
- `package.json`：依赖配置调整
- `pnpm-lock.yaml`：锁文件更新

### 3. 静态资源更新
- `public/iconfont/iconfont.css`：图标字体样式
- `public/iconfont/iconfont.js`：新增图标字体 JS 文件
- `public/iconfont/iconfont.woff2`：字体文件更新
- `public/index.html`：入口页面调整
- `public/testData/asyncCascader.json`：测试数据更新

---

## 六、改动统计

| 类别 | 文件数 | 新增行数 | 删除行数 |
|------|--------|----------|----------|
| 工作区改动 | 135 | 3560 | 2492 |
| 暂存区改动 | 64 | 1108 | 738 |
| **合计** | **199** | **4668** | **3230** |

---

## 七、改动带来的核心优势总结

1. **稳定性提升**：多处增加空值校验和边界条件处理，避免运行时错误
2. **可维护性增强**：目录结构规范化，职责分离更清晰
3. **功能完善**：新增 Excel 导出、动态菜单、语言切换等功能
4. **性能优化**：form 元素复用、递归防护、逻辑运算符修正
5. **开发体验**：示例项目导航更友好，路由与菜单自动同步
6. **代码规范**：统一注释格式、修复逻辑错误、优化代码结构