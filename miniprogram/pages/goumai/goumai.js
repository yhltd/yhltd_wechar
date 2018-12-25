// pages/goumai/goumai.js
var app = getApp();
Page({
  data: {
     id:""
  },
  onLoad: function () {
    var that = this;
    var id = wx.getStorageSync('id');//wx.getStorageSync(key)，获取本地缓存
    const db = wx.cloud.database();
    db.collection('todos').doc(id).get({
      success(res) {
        that.setData({ 
          all: res.data
          })
           console.log(that.data)
      }
    })
    console.log(that.data)
    that.setData({
      id: id
    }) 
   
  },
 zhifu: function(){
    var self = this;
    wx.request({
      url: 'https://www.hgdqdev.cn/api/wxpay/unifiedorder',
      data: {
        openid: self.data.openid   // 这里正常项目不会只有openid一个参数
      },
      success: function(res){
        if(res.data.status == 100){
          var payModel = res.data;
          wx.requestPayment({
            'timeStamp': payModel.timestamp,
            'nonceStr': payModel.nonceStr,
            'package': payModel.package,
            'signType': 'MD5',
            'paySign': payModel.paySign,
            'success': function (res) {
              wx.showToast({
                title: '支付成功',
                icon: 'success',
                duration: 2000
              })
            },
            'fail': function (res) {
            }
          })
        }
      },
      fail: function(){

      }
    })
  }

})