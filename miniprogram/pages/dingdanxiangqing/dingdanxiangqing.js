// pages/dingdanxiangqing/dingdanxiangqing.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    that.setData({
      id: id
    })
    const db = wx.cloud.database();
    db.collection('todos').doc(id).get({
      success(res) {
        that.setData({
          all: res.data
        })
      }
    })

    db.collection('dizhi').where({
      _openid: openid,
    })
      .get({
        success: res => {
          console.log(res.data)
          that.setData({
            allll: res.data
          })
        }
      })

    var obj = wx.getStorageSync("openid")
    var openid = obj.openid;
    db.collection('shoucang').where({
      _openid: openid,
      id: id
    })
   .get({
        success: res => {
          // res.data 是包含以上定义的两条记录的数组
          console.log(res.data)
          that.setData({
            alll: res.data
          })
          }
          })
          },

  
})