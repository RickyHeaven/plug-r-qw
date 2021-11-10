## sideMenu
侧边菜单，贴在父容器左侧，可向左将整个菜单收起，全局UI组件，直接用

### 属性
* data: 数组，菜单结构数据，如：
```$xslt
[
  {
    "name": "面条",
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
    "level": 1,
    "path": "/conjee"
  },
  {
    "name": "馒头",
    "level": 1,
    "path": "/steamedBun"
  },
  {
    "name": "川菜",
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

### 注意

* 菜单父容器需要是弹性布局，要有高度，如果父容器高度不够，菜单将会竖向滚动。