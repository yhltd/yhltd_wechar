// var app = getApp();
// Page({
//   data: {
   
//     language:"",
//     nickName: "",
//     avatarUrl:"",
//     gender:"",
//     province:"",
//     city:"",
//     country:"" 
//   },
// shouquan:function(){
//   wx.navigateTo({
//     url: '/pages/shouquan/shouquan',
//   })
// },

//   onload: function () { 
   
    
//   },


//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onShow:function() {
//     var that=this;
//     this.setData({
//       language: app.globalData.language,
//       nickName: app.globalData.nickName,
//       avatarUrl: app.globalData.avatarUrl,
//       gender: app.globalData.gender,
//       province:  app.globalData.province,
//       city:app.globalData.city,
//       country:app.globalData.country,
      
//     })
  
//   }
// ,
  


//   onReachBottom: function () {
//   },
//   xinjianyonghu: function () {
//     const db = wx.cloud.database();
//       db.collection('todos').doc('XBn3u3kPDdDCJ2ld').get({
//       success(res) {
//         console.log(res.data)
//         wx.showToast({
//           title: '' + res.data.ziduan1,
//           icon: 'success',
//           duration: 2000
//         }) 
//       }
//     })
//   },
//   xieru: function () {
//     const db = wx.cloud.database();

//     db.collection('todos').add({
//       data: {
//         age: 100
//       },
//       success: res => {
//         // 在返回结果中会包含新创建的记录的 _id
//         this.setData({
//           counterId: res._id,
//           age: 1
//         })
//         wx.showToast({
//           title: '新增记录成功',
//         })
//         console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
//       },

//     })
//   },
//   updatecase: function () {
//     const db = wx.cloud.database();
//     db.collection('todos').doc('XCLo95T75u22xUVG').update({
//       data: {
//         agee: "650",

//       },
//       success: res => {
//         console.log(res);
//         console.log(app.globalData.nickName)
//         wx.showToast({
//           title: '修改成功',
//         })
//       },
//     })
//   },
//   de: function () {
//     const db = wx.cloud.database();
//     db.collection('todos').doc('XBso-XffS3SWICHW').remove({
      
//       success: res => {
//         console.log(res);

//         wx.showToast({
//           title: '删除成功',
//         })
//       },
//     })


//   },
//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   },
//   xinjian:function(){
//     const db = wx.cloud.database();

//     db.collection('shoucang').add({
//       data: {
//         age: 100
//       },
//       success: res => {
//         // 在返回结果中会包含新创建的记录的 _id
//         this.setData({
//           counterId: res._id,
//           age: 1
//         })

//       }
//   })
//   }
// })
var app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    orderItems: [
      {
        typeId: 0,
        name: '待付款',
        url: 'bill',
        imageurl: '/pages/images/personal_pay.png',
      },
      {
        typeId: 1,
        name: '发货中',
        url: 'bill',
        imageurl: '/pages/images/personal_receipt.png',
      },
      {
        typeId: 2,
        name: '代收货',
        url: 'bill',
        imageurl: '/pages/images/personal_comment.png'
      },
      {
        typeId: 3,
        name: '待评价',
        url: 'bill',
        imageurl: '/pages/images/personal_service.png'
      }
    ],
  },
  //事件处理函数
  

onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo, hasUserInfo: true
        })
      }
    } else {      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo, hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toOrder: function () {
    wx.navigateTo({
      url: '../order/order'
    })
  },
})