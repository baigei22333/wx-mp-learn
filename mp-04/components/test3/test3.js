// components/test3/test3.js
Component({
  // 新的生命周期声明
  lifetimes: {
    created() {
      console.log('created___');
    }
  },
  // 页面声明周期
  pageLifetimes: {
    show() {
      // console.log('show');
      this._randomColor()
    },
    hide() {
      console.log('hide');
    },
    resize() {
      console.log('resize');
    }
  },
  options: {
    // 指定所有 以 _开头的数据字段为纯数据字段
    pureDataPattern: /^_/
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    _rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0,0,0'
  },

  observers: {
    // 'rgb.r, rgb.g, rgb.b': function (newR, newG, newB) {
    //   this.setData({
    //     fullColor: `${newR},${newG},${newB}`
    //   })
    // }
    // 使用通配符  ** 监听对象上所有属性的变化
    '_rgb.**': function (obj) {
      this.setData({
        fullColor: `${obj.r},${obj.g},${obj.b}`
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    changeR() {
      this.setData({
        '_rgb.r': this.data._rgb.r + 5 > 255 ? 0 : this.data._rgb.r + 5
      })
    },

    changeG() {
      this.setData({
        '_rgb.g': this.data._rgb.g + 5 > 255 ? 0 : this.data._rgb.g + 5
      })
    },
    changeB() {
      this.setData({
        '_rgb.b': this.data._rgb.b + 5 > 255 ? 0 : this.data._rgb.b + 5
      })
    },
    _randomColor() {
      this.setData({
        _rgb: {
          r: Math.floor(Math.random() * 256),
          g: Math.floor(Math.random() * 256),
          b: Math.floor(Math.random() * 256),
        }
      })
    }
  },
  // 旧方法 不推荐使用
  // created() {
  //   console.log('created');
  // },
  // attached() {
  //   console.log('attached');
  // }
})