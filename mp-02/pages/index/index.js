// index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: 'hello world',
    img: 'http://www.itheima.com/images/logo.png',
    randomNum1: Math.floor(Math.random() * 10),
    randomNum2: Math.random().toFixed(2),
    count: 0,
    msg: '你好',
    type: 1,
    flag: true,
    arr1: ['苹果', '华为', '小米'],
    userList: [{
        id: 1,
        name: '小红'
      },
      {
        id: 2,
        name: '小黄'
      },
      {
        id: 3,
        name: '小白'
      }
    ]
  },

  // 定义按钮的事件处理函数
  btnTaphandler(event) {
    console.log(event);
  },

  /**
   * 加1按钮的点击处理函数
   */
  countChange() {
    // console.log('ok');
    this.setData({
      count: this.data.count + 1
    })
  },


  btnTap2(e) {
    // console.log(e.target.dataset.info);
    this.setData({
      count: this.data.count + e.target.dataset.info
    })

  },

  /**
   * 输入框的事件处理函数
   */
  inputHandler(e) {
    console.log(e.detail.value);
  },

  /**
   * 实现消息互传
   */
  iptHandler(e) {
    this.setData({
      msg: this.data.msg = e.detail.value
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})