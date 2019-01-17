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
//     if (!wx.cloud) {
//       wx.redirectTo({
//         url: '../chooseLib/chooseLib',
//       })
//       return
//     }

//     // 获取用户信息
//     wx.getSetting({
//       success: res => {
//         if (res.authSetting['scope.userInfo']) {
//           // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//           wx.getUserInfo({
//             success: res => {
//               this.setData({
//                 avatarUrl: res.userInfo.avatarUrl,
//                 userInfo: res.userInfo
//               })
//             }
//           })
//         }
//       }
//     })
//   },
    
//   onGetUserInfo: function (e) {
//     if (!this.logged && e.detail.userInfo) {
//       this.setData({
//         logged: true,
//         avatarUrl: e.detail.userInfo.avatarUrl,
//         userInfo: e.detail.userInfo
//       })
//     }
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
//     db.collection('todos').doc('XCCC3N7E7L4w38Y9').get({
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

    // db.collection('todos').add({
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
    showView: true,
    text: '\n',
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
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              //用户已经授权过
              wx.redirectTo({
                url: '../yonghu/yonghu'
              })
            }
          });
        }
      }
    })
  },
  // xieru: function () {
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
  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
       wx.authorize({
        scope: 'scope.record',
        success() {
          // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
          // wx.startRecord()
          wx.login() 
          const db = wx.cloud.database();

    
        }
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '提示',
        content: '拒绝授权将无法进入',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  },
  onGotUserInfo(e) {
    var that = this;
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
    this.setData({
      login_name: e.detail.userInfo.nickName,
      gender: e.detail.userInfo.gender,
       showView: (!that.data.showView)
        })
    
  },
 
})