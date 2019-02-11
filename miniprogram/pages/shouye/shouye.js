var app = getApp()
Page({
  data: {
    imageUrl: app.globalData.imageInfopath,
    items: [
      {
        name: "公司简介",
        src: app.globalData.imageInfopath + 'gongsi.png',
        url: "/pages/gongsijieshao/gongsijieshao",
      },
      {
        name: "案例详情",
        src: app.globalData.imageInfopath + 'xihuan.jpg',
        url: "/pages/anlixiangqing/anlixiangqing",
      },
      {
        name: "行业热门",
        src: app.globalData.imageInfopath + 'tag.png',
        url: "/pages/hangyeremen/hangyeremen",
      },
      {
        name: "加入我们",
        src: app.globalData.imageInfopath + 'telephone.png',
        url: "/pages/jiaruwomen/jiaruwomen",
      }
    ]

    ,
    anlizhanshi: {
      pageone: [
        {
          name: "单片机硬件开发",
          src: app.globalData.imageInfopath + 'wangzhan.png',
          url: "/pages/chanpin1/chanpin1?id=XDgk2nkPDdDCJ3QH"
        },
        {       
          name: "软件开发",
          src: app.globalData.imageInfopath + 'ruanjian.png',
          url: "/pages/chanpin1/chanpin1?id=XCBDTnffS3SWOCjG"
        },
        {
          name: "网站建设",
          src: app.globalData.imageInfopath + 'wangzhan.png',
          url: "/pages/chanpin1/chanpin1?id=XCCC13ffS3SWOXSZ"
        },
        {
          name: "小程序",
          src: app.globalData.imageInfopath + 'xiaochengxu.png',
          url: "/pages/chanpin1/chanpin1?id=XCCC2sDR1TiNEP9l"
        },
        {
          name: "手机APP",
          src: app.globalData.imageInfopath + 'shouji.png',
          url: "/pages/chanpin1/chanpin1?id=XCCC3N7E7L4w38Y9"
        }
      ]
    }

  }
  ,
  compare: function (property) {
    return function (a, b) {
      var value1 = a[property];
      var value2 = b[property];
      return value2 - value1;
    }
  },

  onLoad: function () {
    var that = this;
    var imagepath1 = app.globalData.imageInfopath + ""
    

    that.setData({

      imageUrl: imagepath1
    })
  },
 
  onShow:function(){
    var that = this;
    var all = [];
    const db = wx.cloud.database();
    db.collection('tupian1').get({
      success(res) {
       
        all.push(res.data)
        all[0].sort(that.compare("Sort_index"));//排序
        that.setData({
          all: all[0]
        },
          console.log(all[0])
        )
        
      }
    })

  }
  


})