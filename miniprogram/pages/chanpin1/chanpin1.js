var app = getApp();
Page({
  data: {

  },
  onLoad: function (options) {
    
    // app.editTabBar1(); //底部栏

    var that = this;
    var id = options.id;
    console.log(id)
    const db = wx.cloud.database();
    db.collection('todos').doc(id).get({
      success(res) {
        that.setData({
          all: res.data
        })
      }
    })
  }
})
