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
          src: "/pages/images/ruanjian.png",
          url:"/pages/anli1/anli1"
      
        },
        {
          name: "网站建设",
          src: "/pages/images/wangzhan.png",
          url: "/pages/anli2/anli2"
        },
        {
          name: "小程序",
          src: "/pages/images/xiaochengxu.png",
          url: "/pages/anli3/anli3"
        },
        {
          name: "手机APP",
          src: "/pages/images/shouji.png",
          url: "/pages/anli4/anli4"
        }
      ]
    }
      
      }

  ,

  
})