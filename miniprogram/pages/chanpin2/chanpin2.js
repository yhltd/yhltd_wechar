// pages/chanpin2/chanpin2.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chanpinming: ""
  },
  onShow: function () {
    var that = this;

    
    app.editTabBar1();
    const db = wx.cloud.database();
    db.collection('todos').doc('XCCC13ffS3SWOXSZ').get({
      success(res) {
        that.setData({
          chanpinming: res.data.chanpinming,
          jiagexiao: res.data.jiagexiao,
          jiagezheng: res.data.jiagezheng,
          text1: res.data.text1,
          text2: res.data.text2,
          text3: res.data.text3,
          text4: res.data.text4,
          text5: res.data.text5,
          text6: res.data.text6,
          text7: res.data.text7,
          text8: res.data.text8,
          text9: res.data.text9,
          text10: res.data.text10,
          text11: res.data.text11,
        })
      }

    })

  }
 

})