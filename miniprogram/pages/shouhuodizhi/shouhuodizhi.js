// pages/shouhuodizhi/shouhuodizhi.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  dizhi: function (e) {
    const that = this;
   var xindizhi = e.detail.value.xindizhi
    var obj = wx.getStorageSync("openid")
    var openid = obj.openid;
    console.log(openid)
    console.log(xindizhi)
    const db = wx.cloud.database();
    db.collection('dizhi').where({
      _openid: openid,
    })
      .get({
        success: res => {
          console.log(res.data.id)
          db.collection('dizhi').doc(res.data.id).update({
      data: {
        dizhi: xindizhi

      },
      success: res => {
        
        wx.showToast({
          title: '修改成功',
        })
      },
    })

          if (res.data == "") {
    db.collection('dizhi').add({
      data: {
       dizhi:xindizhi
      },
        success: res => {

        wx.showToast({
          title: '修改成功',
                    })
                        },
                              })
       }
        }
      })
       }
})