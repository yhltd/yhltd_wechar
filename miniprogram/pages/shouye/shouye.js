var app=getApp()
Page({

  data: {
    // categoryList: {
      items: [
        {
        name: "公司简介",
        src: "/pages/images/gongsi.png",
        url: "/pages/gongsijieshao/gongsijieshao",
      }, 
      {
        name: "案例详情",
        src: "/pages/images/xihuan.jpg",
        url: "/pages/anlixiangqing/anlixiangqing",
      }, 
      {
        name: "行业热门",
        src: "/pages/images/tag.png",
        url: "/pages/hangyeremen/hangyeremen",
      },
        {
          name: "加入我们",
          src: "/pages/images/telephone.png",
          url: "/pages/jiaruwomen/jiaruwomen",
        }
      ]
      // }
      ,
    anlizhanshi: {
      pageone: [
        {
          name: "软件开发",
          src: "/pages/images/ruanjian.png"
        },
        {
          name: "网站建设",
          src: "/pages/images/wangzhan.png"
        },
        {
          name: "小程序",
          src: "/pages/images/xiaochengxu.png"
        },
        {
          name: "手机APP",
          src: "/pages/images/shouji.png"
        }
      ]
    }
      
      }

  ,

  
})