// pages/anlixiangqing/anlixiangqing.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl : app.globalData.imageInfopath,
    anlizhanshi: {

      pageone: [
        {
          name: "软件开发",
          src: app.globalData.imageInfopath+"ruanjian.png",
          url:"/pages/anli1/anli1"
        },
        {
          name: "网站建设",
          src: app.globalData.imageInfopath+"wangzhan.png",
          url: "/pages/anli2/anli2"
        },
        {
          name: "小程序",
          src: app.globalData.imageInfopath +"xiaochengxu.png",
          url: "/pages/anli3/anli3"
        },
        {
          name: "手机APP",
          src: app.globalData.imageInfopath +"shouji.png",
          url: "/pages/anli4/anli4"
        }
      ]
    }

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