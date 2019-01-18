var app = getApp();
Page({
  data: {

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
    var id = that.data.id;
    var openid=obj.openid;
    
    console.log(open)
    const db = wx.cloud.database();
    db.collection('shoucang').get({
      success(res) {
        var countResult = res.data.length;
        console.log(res.data)
        for (var i = 0; i < countResult;i++)
        {
          var openidd = res.data[i]._openid
          var idd = res.data[i].id
          console.log(openidd)
        //  if(id==){
        //   db.collection('shoucang').add({
        //         data: {
        //           id: id
        //              },
        //         success: res => {
        //           wx.showToast({
        //     title: '收藏成功',
        //     })
        //    },
        //   })
        //   }
          if ((id != idd) || (openid != openidd)) {
            wx.showToast({
              title: '您已收藏',
            })
          }
          if ((id == idd)&&(openid==openidd)) {
            wx.showToast({
              title: '您已收藏',
            })
          }
           
        } 
      }
     }
    )
  }
})
