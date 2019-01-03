var app = getApp();
Page({
  data: {
    id: ""
  },
  onLoad: function () {
    var that = this;
    var id = wx.getStorageSync('id');//wx.getStorageSync(key)，获取本地缓存
    console.log(id)
    const db = wx.cloud.database();
    db.collection('todos').doc(id).get({
      success(res) {
        that.setData({
          all: res.data
        })
        // console.log(that.data)
      }
    })
    // console.log(that.data)
    that.setData({
      id: id
    })

  }

  
})
