var app = getApp();
Page({
  data: {
   
    language:"",
    nickName: "",
    avatarUrl:"",
    gender:"",
    province:"",
    city:"",
    country:"" 
  },
shouquan:function(){
  wx.navigateTo({
    url: '/pages/shouquan/shouquan',
  })
},

  onload: function () { 
   
    
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onShow:function() {
    var that=this;
    this.setData({
      language: app.globalData.language,
      nickName: app.globalData.nickName,
      avatarUrl: app.globalData.avatarUrl,
      gender: app.globalData.gender,
      province:  app.globalData.province,
      city:app.globalData.city,
      country:app.globalData.country,
      
    })
  
  }
,
  


  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
 

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },
  xinjianyonghu: function () {
    const db = wx.cloud.database();
      db.collection('todos').doc('XBn3u3kPDdDCJ2ld').get({
      success(res) {
        console.log(res.data)
        wx.showToast({
          title: '' + res.data.ziduan1,
          icon: 'success',
          duration: 2000
        }) 
      }
    })
  },
  xieru: function () {
    const db = wx.cloud.database();

    db.collection('todos').add({
      data: {
        age: 100
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          counterId: res._id,
          age: 1
        })
        wx.showToast({
          title: '新增记录成功',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },

    })
  },
  updatecase: function () {
    const db = wx.cloud.database();
    db.collection('todos').doc('XCLo95T75u22xUVG').update({
      data: {
        agee: "650",

      },
      success: res => {
        console.log(res);
        console.log(app.globalData.nickName)
        wx.showToast({
          title: '修改成功',
        })
      },
    })
  },
  de: function () {
    const db = wx.cloud.database();
    db.collection('todos').doc('XBso-XffS3SWICHW').remove({
      
      success: res => {
        console.log(res);

        wx.showToast({
          title: '删除成功',
        })
      },
    })


  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  xinjian:function(){
    const db = wx.cloud.database();

    db.collection('shoucang').add({
      data: {
        age: 100
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          counterId: res._id,
          age: 1
        })

      }
  })
  }



})