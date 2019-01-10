// pages/anli1/anli1.js
var app = getApp();
Page({

  data: {
    imageUrl: app.globalData.imageInfopath,
    
  },

  onLoad: function () {
    var that = this;
    var all=[];
    // var imagepath1 = app.globalData.imageInfopath + "" 
    // console.log(imagepath1)
    // that.setData({
    //   imageUrl: imagepath1
    // })
    const db = wx.cloud.database();
    db.collection('todos').get({
      success(res) {
        all.push(res.data)
        that.setData({
          all:all[0] 
        },
         console.log(all),
          // wx.setStorageSync('id', res.data[0]._id)
          
       ) 
        //循环取值
        // for (let i = 0; i < countResult; i++) {
        //   console.log(all[i])
        // }
           var countResult = all[0].length;
        //循环取值
        for (let i = 0; i < countResult; i++) {
        // oki
        console.log(all[0][i]._id)
        }  
 }
 })
 }
})