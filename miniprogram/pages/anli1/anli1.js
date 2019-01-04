// pages/anli1/anli1.js
var app = getApp();
Page({

  data: {

  },

  onLoad: function () {
    var that = this;
    var all=[];
    const db = wx.cloud.database();
    db.collection('todos').get({
      success(res) {
        all.push(res.data)
        that.setData({
          all:all[0] 
        },
       ) 
        //    var countResult = all[0].length;
        // //循环取值
        // for (let i = 0; i < countResult; i++) {
        // // oki
        // console.log(all[0][i]._id)
        // }  
 }
 })
 }
})