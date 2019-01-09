var app=getApp()
Page({
  data: {
    imageUrl: app.globalData.imageInfopath,
        items: [
        {
        name: "公司简介",
            src: app.globalData.imageInfopath+'gongsi.png',
        url: "/pages/gongsijieshao/gongsijieshao",
      }, 
      {
        name: "案例详情",
        src: app.globalData.imageInfopath+'xihuan.jpg',
        url: "/pages/anlixiangqing/anlixiangqing",
      }, 
      {
        name: "行业热门",
        src: app.globalData.imageInfopath +'tag.png',
        url: "/pages/hangyeremen/hangyeremen",
      },
        {
          name: "加入我们",
          src: app.globalData.imageInfopath +'telephone.png',
          url: "/pages/jiaruwomen/jiaruwomen",
        }
      ]
       
      ,
    anlizhanshi: {
      pageone: [
        {
          name: "软件开发",
          src: app.globalData.imageInfopath +'ruanjian.png',
          url:"/pages/anli1/anli1"
      
        },
        {
          name: "网站建设",
          src: app.globalData.imageInfopath +'wangzhan.png',
          url: "/pages/anli2/anli2"
        },
        {
          name: "小程序",
          src: app.globalData.imageInfopath +'xiaochengxu.png',
          url: "/pages/anli3/anli3"
        },
        {
          name: "手机APP",
          src: app.globalData.imageInfopath +'shouji.png',
          url: "/pages/anli4/anli4"
        }
      ]
    }
      
      }

  ,

  // onShow: function () {
  //   app.editTabBar();    //显示自定义的底部导航
  // },
  
  onLoad: function () {
    var that =this;

    var imagepath1 = app.globalData.imageInfopath + "" 
    // let openid = app.globalData.openid || wx.getStorageSync('openid');
    // var user = wx.getStorageSync('user') || {};
    // console.log(user.openid)
    // console.log(imagepath1)
 
    that.setData({
        
        imageUrl: imagepath1
    })
  }


  
})