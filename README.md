# vue-tabslider vue tab滑动切换插件

# vue-tabslider
[![NPM version](https://img.shields.io/npm/v/vue-tabslider.svg)](https://www.npmjs.com/package/vue-tabslider)


## npm

``` bash

# npm install
npm install vue-tabslider --save

```
## 引入

在main.js中引入

```js
import vueTabslider from './index.js'
Vue.use(vueTabslider)
```

## 使用

###  vue tab滑动插件

- 使用时需要给vue-tabslider设置一个宽度和高度

``` html
  <vue-tabslider
      :duration="300"
      :position="'top'"
      :title="titleData"
      :titleStyles="titleStyles"
      :activeStyle="activeStyle"
      :titleBoxStyles="titleBoxStyles"
        style="width:100vw;height:100vh;">
  </vue-tabslider>
```

| 参数 | 类型 | 备注 | 默认值 | 是否必须
|  ------ | ------ | ------ | ------ | ------ |
| duration | Number | 动画过渡时间 | 300 | false |
| position | String | tab标题位置 | 'top' | false |
| title | Array | 标题数组 | [{ name: '我的' }] | false |
| titleStyles | Object | 标题样式<br>（驼峰命名：backgroundColor） | {} | false |
| activeStyle | Object | 标题激活样式<br>（驼峰命名：backgroundColor） | {} | false |
| titleBoxStyles | Object | 滑动页样式<br>（驼峰命名：backgroundColor） | {} | false |

###  使用自定义插槽

- 在组件中添加template
- 添加div,class为tab-slider

``` html
  <vue-tabslider
      :duration="300"
      :position="'top'"
      :title="titleData"
      :titleStyles="titleStyles"
      :activeStyle="activeStyle"
      :titleBoxStyles="titleBoxStyles"
        style="width:100vw;height:100vh;">
    <template>
      <div class="tab-slider" style="background:#fde1e1">
        first
      </div>
      <div class="tab-slider" style="background:#b2c0f1">
        second
      </div>
      <div class="tab-slider" style="background:#e6f5ea">
        third
      </div>
      <div class="tab-slider" style="background:#e6d3f5">
        four
      </div>
    </template>
  </vue-tabslider>
```

属性举例

```
// 标题数组
title: [
  {
    name: '首页'
  },
  {
    name: '数据页'
  },
  {
    name: '我的'
  },
  {
    name: '更多'
  }
],
// 标题样式属性
titleStyles: {
  borderRight: '1px solid #333'
},
// 滑动页样式属性
titleBoxStyles: {
  paddingLeft: '1px',
  background: '#FFFFFF',
  width: '100%'
},
// 标题激活样式属性
activeStyle: {
  color: '#745fe4',
  fontSize: '30px'
}
```

# 效果展示

![avatar](/src/assets/rollmsgfgif.gif)


源码地址：[https://github.com/liqin1059/vue-tabslider](https://github.com/liqin1059/vue-tabslider)

