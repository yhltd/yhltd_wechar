var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              console.log(res.userInfo)
            }
          })
          wx.getUserInfo({
            success(res) {
              const userInfo = res.userInfo
              const language = userInfo.language
              const nickName = userInfo.nickName
              const avatarUrl = userInfo.avatarUrl
              const gender = userInfo.gender // 性别 0：未知、1：男、2：女
              const province = userInfo.province
              const city = userInfo.city
              const country = userInfo.country
              app.globalData.userInfo = userInfo
              app.globalData.nickName = nickName
              app.globalData.avatarUrl = avatarUrl
             
              app.globalData.gender = gender
              app.globalData.province = province
              app.globalData.city = city
              app.globalData.language = language
              app.globalData.country = country

            }
          })
          
        }
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  }
  ,
  denglu: function () {
    wx.navigateBack({
      url: '/pages/yonghu/yonghu',
    })
  },
})