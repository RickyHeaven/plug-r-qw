## sideMenuPro

侧边菜单，贴在父容器左侧，可向左将菜单收起进入精简模式（一级纯图标），全局 UI 组件，直接用

### 属性

- data: 数组，菜单结构数据，如：

```json
[
	{
		"name": "面条",
		"icon": "icon-tree2",
		"level": 1,
		"path": "/noodles",
		"children": [
			{
				"name": "牛肉面",
				"level": 2,
				"path": "/noodles/beef"
			},
			{
				"name": "小面",
				"level": 2,
				"path": "/noodles/vegetarian"
			}
		]
	},
	{
		"name": "稀饭",
		"icon": "icon-css3",
		"level": 1,
		"path": "/conjee"
	},
	{
		"name": "馒头",
		"icon": "icon-selectScrollMore",
		"level": 1,
		"path": "/steamedBun"
	},
	{
		"name": "川菜",
		"icon": "icon-formModal",
		"level": 1,
		"path": "/sichuanCuisine",
		"children": [
			{
				"name": "小炒",
				"level": 2,
				"path": "/sichuanCuisine/friedDish",
				"children": [
					{
						"name": "仔姜肉丝",
						"level": 3,
						"path": "/sichuanCuisine/friedDish/wangGingerPork"
					},
					{
						"name": "红烧肉",
						"level": 3,
						"path": "/sichuanCuisine/friedDish/bouilli"
					}
				]
			},
			{
				"name": "盖饭",
				"level": 2,
				"path": "/sichuanCuisine/combo",
				"children": [
					{
						"name": "青椒肉丝",
						"level": 3,
						"path": "/sichuanCuisine/combo/shreddedPorkWithGreenPepper"
					},
					{
						"name": "回锅肉",
						"level": 3,
						"path": "/sichuanCuisine/combo/twiceCookedPork",
						"children": [
							{
								"name": "加豆干",
								"level": 4,
								"path": "/sichuanCuisine/combo/twiceCookedPork/sideMenuPro"
							},
							{
								"name": "加洋葱",
								"level": 4,
								"path": "/sichuanCuisine/combo/twiceCookedPork/onion"
							}
						]
					},
					{
						"name": "宫保鸡丁",
						"level": 3,
						"path": "/sichuanCuisine/combo/kungPaoChicken"
					}
				]
			}
		]
	}
]
```

- light: 布尔值，是否开启浅色模式，默认：`false`

### 注意

- 菜单父容器需要是弹性布局，要有高度，如果父容器高度不够，菜单将会竖向滚动。

- 菜单的激活样式需要配合 vue-router 的`linkActiveClass`配置实现，需将其值设置为`'active'`。

- `name`为菜单项展示的 label；`level`为菜单项左侧缩进宽度，按级别递增，从 1 级开始；`path`为菜单项点击后跳转的地址，为完整路径；如接口数据结构不满足前面要求，自己调整成规定格式后传入使用。

- 菜单项`icon`为iconfont图标，你可以使用任何你喜欢的iconfont图标（使用方法参考本库示例）。
