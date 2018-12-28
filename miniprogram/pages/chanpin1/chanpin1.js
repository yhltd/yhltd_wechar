var app = getApp();
// const APP_ID = '';//输入小程序appid  
// const APP_SECRET = '';//输入小程序app_secret  
// var OPEN_ID = ''//储存获取到openid  
// var SESSION_KEY = '' /
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  onLoad: function () {
   wx.login({
     success(res) {
       if (res.code) {
         // 发起网络请求
         wx.request({
           url: 'https://test.com/onLogin',
           data: {
             code: res.code
           }          
         })
       } else {
         console.log('登录失败！' + res.errMsg)
       }
     }
   })
 },
  //   //调用API从本地缓存中获取数据
  //   var that = this
  //   wx.login({
  //     success: function (loginCode) {
  //       var appid = 'wx329763d21878c5a6'; //填写微信小程序appid
  //       var secret = '0fb1f26a030abfab5f8896373f449de6'; //填写微信小程序secret 
  //       //调用request请求api转换登录凭证
  //       wx.request({
  //         url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&grant_type=authorization_code&js_code=' + loginCode.code,
  //         header: {
  //           'content-type': 'application/json'
  //         },
  //         success: function (res) {
  //           console.log(res.data.openid) //获取openid
  //         }
  //       })
  //     }

  //   })
  // },
  // xieru:function(){
  //   var openId = (wx.getStorageSync('openId'))
  //   wx.login({
  //     success: function (res) {
  //       if (res.code) {
  //         wx.getUserInfo({
  //           withCredentials: true,
  //           success: function (res_user) {
  //             wx.login({
  //               success: function (res) {
  //                 wx.request({
  //                   url: 'https://api.weixin.qq.com/sns/jscode2session',
  //                   data: {
  //                     appid: 'wx329763d21878c5a6',
  //                     secret: '0fb1f26a030abfab5f8896373f449de6',
  //                     js_code: res.code,
  //                     grant_type: 'authorization_code'
  //                   },
  //                   method: 'GET',
  //                   success: function (res) {
  //                     var openid = res.data.openid;//获取到的openid
  //                     console.log(openid);
  //                   }
  //                 })
  //               }
  //             })
  //           }
  //         })}}})},
  // getOpenIdTap:function(){
  //   var that = this;
  //   wx.login({
  //     success: function (res) {
  //       wx.request({
  //         //获取openid接口  
  //         url: 'https://api.weixin.qq.com/sns/jscode2session',
  //         data: {
  //           appid: APP_ID,
  //           secret: APP_SECRET,
  //           js_code: res.code,
  //           grant_type: 'authorization_code'
  //         },
  //         method: 'GET',
  //         success: function (res) {
  //           console.log(res.data)
  //           OPEN_ID = res.data.openid;//获取到的openid  
  //           SESSION_KEY = res.data.session_key;//获取到session_key  
  //           console.log(OPEN_ID.length)
  //           console.log(SESSION_KEY.length)
  //           that.setData({
  //             openid: res.data.openid.substr(0, 10) + '********' + res.data.openid.substr(res.data.openid.length - 8, res.data.openid.length),
  //             session_key: res.data.session_key.substr(0, 8) + '********' + res.data.session_key.substr(res.data.session_key.length - 6, res.data.session_key.length)
  //           })
  //         }
  //       })
  //     }
  //   })

    
    
  // },
  onShow: function () {
    var that=this;
    var id;
    app.editTabBar1();
    const db = wx.cloud.database();
    db.collection('todos').doc('XCBDTnffS3SWOCjG').get({
      success(res) {
       that.setData({
        all:res.data})
        
        wx.setStorageSync('id', res.data._id),
          console.log(res.data._id)
      }
    })
  },
 
 
})

