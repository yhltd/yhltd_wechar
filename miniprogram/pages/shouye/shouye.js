var app=getApp()
Page({

  data: {
    
      items: [
        {
        name: "公司简介",
          src: "cloud://yhltd-ca4527.7968-yhltd-ca4527/tupian/gongsi.png",
        url: "/pages/gongsijieshao/gongsijieshao",
      }, 
      {
        name: "案例详情",
        src: "cloud://yhltd-ca4527.7968-yhltd-ca4527/tupian/xihuan.jpg",
        url: "/pages/anlixiangqing/anlixiangqing",
      }, 
      {
        name: "行业热门",
        src: "cloud://yhltd-ca4527.7968-yhltd-ca4527/tupian/tag.png",
        url: "/pages/hangyeremen/hangyeremen",
      },
        {
          name: "加入我们",
          src: "cloud://yhltd-ca4527.7968-yhltd-ca4527/tupian/telephone.png",
          url: "/pages/jiaruwomen/jiaruwomen",
        }
      ]
       
      ,
    anlizhanshi: {
      pageone: [
        {
          name: "软件开发",
          src: "cloud://yhltd-ca4527.7968-yhltd-ca4527/tupian/ruanjian.png",
          url:"/pages/anli1/anli1"
      
        },
        {
          name: "网站建设",
          src: "cloud://yhltd-ca4527.7968-yhltd-ca4527/tupian/wangzhan.png",
          url: "/pages/anli2/anli2"
        },
        {
          name: "小程序",
          src: "cloud://yhltd-ca4527.7968-yhltd-ca4527/tupian/xiaochengxu.png",
          url: "/pages/anli3/anli3"
        },
        {
          name: "手机APP",
          src: "cloud://yhltd-ca4527.7968-yhltd-ca4527/tupian/shouji.png",
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

  }


  
})