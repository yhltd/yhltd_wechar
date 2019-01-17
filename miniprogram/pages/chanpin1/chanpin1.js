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
    console.log(id)
    // console.log(obj)
    var openid=obj.openid;
    console.log(openid)
    
    const db = wx.cloud.database();
    db.collection('shoucang').get({
      success(res) {
        console.log(res.data)
        var countResult = res.data.length;
      
        if (openid!=1){
          
          db.collection('shoucang').add({

            data: {
             _id:openid
              
            },
            success: res => {
              // 在返回结果中会包含新创建的记录的 _id

              wx.showToast({
                title: '新增记录成功',
              })
              

            }
          })
         
        }
        else if(openid = res.data[i]._id){
        // db.collection('shoucang').doc(openid).update({
          //       data: {

          //            },
          //  success: res => {

          //         wx.showToast({
          //   title: '修改成功',
          //   })
          //  },
          // })
   
     }  
      }
     }
    )



  }
})
