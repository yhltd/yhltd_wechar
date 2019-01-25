var app = getApp();
Page({
  data: {
  
      shoucangtai: "1"
  
  },
  onLoad: function (options) {
    
    app.editTabBar1(); //底部栏

    var that = this;
    var id = options.id;
    that.setData({
      id:id
    })
    console.log(id)
    const db = wx.cloud.database();
    db.collection('todos').doc(id).get({
      success(res) {
        that.setData({
          all: res.data
        })
      }
    })
  },
  jiaru: function () {
    var that=this;
    
    var obj = wx.getStorageSync("openid")
    var idd = that.data.id;
    var openid=obj.openid;
    
    console.log(openid)
    console.log(idd)
            const db = wx.cloud.database();
             db.collection('shoucang').where({
              _openid: openid,
               id:idd
              })
          .get({
            success: res => {
              // res.data 是包含以上定义的两条记录的数组
              console.log(res.data)
              wx.showToast({
                title: '收藏成功',
              })
              if(res.data==""){
                db.collection('shoucang').add({
                  data: {
                    id: idd,
                    zhuangtai:1
                  },
                  success: res => {
                    wx.showToast({
                      title: '收藏成功',
                    })
                  }
                })
              }
            },
             }) 
      }
})
