// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: {},
    shopList: [],
    page: 1,
    pageSize: 10,
    total: 0,
    isloading: false
  },

  getShopList(cb) {
    // 展示loading 效果
    wx.showLoading({
      title: '数据加载中...',
    })
    this.setData({
      isloading: true
    })
    wx.request({
      url: `https://applet-base-api-t.itheima.net/categories/${this.data.query.id}/shops`,
      method: "GET",
      data: {
        _page: this.data.page,
        _limit: this.data.pageSize
      },
      success: (res) => {
        // console.log(res);
        this.setData({
          shopList: [...this.data.shopList, ...res.data],
          total: +res.header['X-Total-Count']
        })
      },
      complete: () => {
        wx.hideLoading()
        this.setData({
          isloading: false
        })

        cb && cb()

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options);
    this.setData({
      query: options
    })

    this.getShopList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.setNavigationBarTitle({
      title: this.data.query.title,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 需要重置关键的数据
    this.setData({
      page: 1,
      shopList: [],
      total: 0
    })
    // 重新发起数据请求
    this.getShopList(() => {
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if (this.data.page * this.data.pageSize >= this.data.total) {
      wx.showToast({
        title: '数据加载完毕！',
        icon: 'none'

      })
      // 证明没有下一页的数据了
      return
    }
    // 判断是否在加载其他数据
    if (!this.data.isloading) {
      // 页码值+1
      this.setData({
        page: this.data.page + 1
      })
    }
    this.getShopList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})