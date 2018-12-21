//app.js
App({
  
  // onLaunch: function () {

  // },

  //第一种底部  
  editTabBar: function () {
    //使用getCurrentPages可以获取当前加载中所有的页面对象的一个数组，数组最后一个就是当前页面。

    var curPageArr = getCurrentPages();    //获取加载的页面
    var curPage = curPageArr[curPageArr.length - 1];    //获取当前页面的对象
    var pagePath = curPage.route;    //当前页面url
    if (pagePath.indexOf('/') != 0) {
      pagePath = '/' + pagePath;
    }

    var tabBar = this.globalData.tabBar;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == pagePath) {
        tabBar.list[i].active = true;    //根据页面地址设置当前页面状态    
      }
    }
    curPage.setData({
      tabBar: tabBar
    });
  },
  //第二种底部，原理同上
  editTabBar1: function () {
    var curPageArr = getCurrentPages();
    var curPage = curPageArr[curPageArr.length - 1];
    var pagePath = curPage.route;
    if (pagePath.indexOf('/') != 0) {
      pagePath = '/' + pagePath;
    }
    var tabBar = this.globalData.tabBar1;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == pagePath) {
        tabBar.list[i].active = true;
      }
    }
    curPage.setData({
      tabBar: tabBar
    });
  },
  globalData: {
    nickName:"",
    //第一种底部导航栏显示
    // tabBar: {
    //   "color": "#dddddd",
    //   "borderStyle": "white",
    //   "selectedColor": "#1afa29",
    //   "backgroundColor": "#ffffff",
    //   "list": [
    //     {
    //       "iconPath":"/images/shouye.png",
    //       "pagePath":"/pages/shouye/shouye",
    //       "seletedIconPath":"images/shouyelv.png",
    //       "text":"首页",
    //       "selectedColor": "#4EDF80",
    //       "clas": "menu-item",
    //       active: false
    //     },
    //     {
    //       "iconPath":"/images/xinxi.png",
    //       "pagePath":"/pages/xinxi/xinxi",
    //       "selectedIconPath":"/images/xinxilv.png",
    //       "text":"信息",
    //       "selectedColor": "#4EDF80",
    //       "clas": "menu-item",
    //       active: false
    //     },
    //     {
    //       "iconPath": "/images/chanpin.png",
    //       "pagePath": "/pages/chanpin/chanpin",
    //       "selectedIconPath": "/images/chanpinlv.png",
    //       "text": "产品",
    //       "selectedColor": "#4EDF80",
    //       "clas": "menu-item",
    //       active: false
    //     },
    //     {
    //       "iconPath": "/images/yonghu.png",
    //       "pagePath": "/pages/yonghu/yonghu",
    //       "selectedIconPath": "/images/yonghulv.png",
    //       "text": "用户",
    //       "selectedColor": "#4EDF80",
    //       "clas": "menu-item",
    //       active: false
    //     }
    //   ],
    //   "position": "bottom"
    // },
    //第二种底部导航栏显示
    tabBar1: {
      "color": "#4F4F4F",
     
      "selectedColor" :"#ffffff",
      "list": [
        {
          "pagePath": "/pages/kefu/kefu",
          "text": "联系客服",
          "iconPath": "/images/kefu.png",
          "clas": "menu-item1",
          active: false
        },
        {
          "pagePath": "/pages/gouwuche/gouwuche",
          "text": "收藏",
          "iconPath": "/images/gouwuche.png",
          "clas": "menu-item1",
          active: true
        },
        {
          "pagePath": "/pages/jiaru/jiaru",
          "text2": "加入收藏",
          "clas": "menu-item3",
          "selectedColor": "#FF5E00",
          active: false
        },
        {
          "pagePath": "/pages/goumai/goumai",
          "text2": "立即购买",
          "clas": "menu-item4",
          "selectedColor": "#F80000",
          active: false
        }
      ],
      "position": "bottom"
    }

  },
 onLaunch: function () {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

  },
})
