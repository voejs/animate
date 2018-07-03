# Vue animation component

This is a lightest animation component of `Vue.js` which using `animate.css` or `velocity.js`.

## Demo

[Example](https://voejs.github.io/igeek/index.html#/animate/single/vue)

## Install

```shell
npm i @voejs/animate --save
```

## Usage

- Animation support with [animate.css](https://github.com/daneden/animate.css)
- AnimationGroup support with [velocity.js](https://github.com/julianshapiro/velocity)

### Animation

```html
<animation enter="bounceInLeft" leave="bounceOutLeft" appear>
  <div class="box box1" v-if="condition"><span>Vue.js - voe.js - animate.css</span></div>
</animation>
```

props:

- **appear**  - boolean，是否在初始渲染时使用过渡。默认为 `false`
- **mode** - string，控制离开/进入的过渡时间序列。有效的模式有 ``"out-in"` 和 ``"in-out"`；默认同时生效。
- **enter** - string，进入动画名，基于`animate.css`动画库。
- **leave** - string，离开动画名，基于`animate.css`动画库。

### AnimationGroup

```html
<animation-group tag="div" enter="transition.bounceLeftIn" leave="transition.bounceLeftOut" appear :delay="30">
  <div class="box box2" v-for="(item, index) in list" :key="index" :data-index="index" :data-length="list.length">
    {{item}}
  </flex>
</animation-group>
```

Props:

- **appear**  - boolean，是否在初始渲染时使用过渡。默认为 `false`
- **mode** - string，控制离开/进入的过渡时间序列。有效的模式有 ``"out-in"` 和 ``"in-out"`；默认同时生效。
- **delay** - number，列表中每个单位元素动画进入或者离开的时间间隔，默认`0`。
- **tag** -  string，默认为 `span`。
- **enter** - string，进入动画名，基于`velocity.js`动画库。
- **leave** - string，离开动画名，基于`velocity.js`动画库。

> 注意：在`<slot></slot>`中的子元素必须绑定`key`属性以及 `data-index`、`data-length`属性，否则报错。

- **data-index** 元素索引
- **data-length** 列表元素总个数

# License

This is [MIT licensed](https://opensource.org/licenses/MIT).
