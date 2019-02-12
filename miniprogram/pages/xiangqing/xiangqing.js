// pages/xiangqing/xiangqing.js
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
  onLoad: function () {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  compare: function (property) {
    return function (a, b) {
      var value1 = a[property];
      var value2 = b[property];
      return value2 - value1;
    }
  },
  onShow: function () {
    var that = this;
    var all = [];
    const db = wx.cloud.database();
    db.collection("tupian1").get({
      success(res){
        
        all.push(res.data)
        all[0].sort(that.compare("Sort_index"));//排序
        
        that.setData({
          all: all[0]
        },
       
        )
       
      }
     
    })
  },
  button1:function(e){
    var that = this;
    const db = wx.cloud.database();
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/xiangqingxiugai/xiangqingxiugai?id'
    })
  },
 button2: function (e) {
   var that = this;
   const db = wx.cloud.database();
   var id = e.currentTarget.dataset.id
   db.collection('tupian1').doc(id).remove({
      success: res => {
        console.log(res);
        wx.showToast({
          title: '删除成功',
        })
        that.onShow()
      },
    })
  }
})