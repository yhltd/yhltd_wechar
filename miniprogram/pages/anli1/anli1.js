// pages/anli1/anli1.js
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
    var that = this;
    var all=[];
    // app.editTabBar1();
    const db = wx.cloud.database();


    db.collection('todos').get({
      success(res) {
        all.push(res.data)
        that.setData({
          all:all[0] 
        },
      
          // console.log(all),
          wx.setStorageSync('id', res.data[0]._id)
 )
        var countResult = all[0].length;
        console.log(countResult);
     
        //循环取值
        for (let i = 0; i < countResult; i++) {
          console.log(all[0][i]._id)
        }
      
 }
 })


 },
  dange:function(){

  }
 
})