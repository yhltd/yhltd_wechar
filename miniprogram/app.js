//app.js
App({
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
    userInfo: null,
    header: {
      'Cookie': ''
    },
    appid: 'wxd747b7dd1d8f9e34', //填写微信小程序appid
    secret: '3199a980a6b595e75c27de6864fdd3a5',//填写微信小程序secret
    imageInfopath:"cloud://yhltd-028b95.7968-yhltd-028b95/tupian/",
    cookie: "",           
    nickName:"",
    gender: "",
    avatarUrl: "",
    province: "",
    city: "",
    country: "",
    language: "",
  
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
          "text": "收藏夹",
          "iconPath": "/images/gouwuche.png",
          "clas": "menu-item1",
          active: true
        },
        {   "bindtap":"jiaru",
          "pagePath": "/pages/xinxi/xinxi",
          "text2": "加入收藏",
          "clas": "menu-item3",
          "selectedColor": "#FF5E00",
          "bingtap":"xieru",
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
    
   var that = this
   var user = wx.getStorageSync('user') || {};
   var userInfo = wx.getStorageSync('userInfo') || {};
   if ((!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600)) && (!userInfo.nickName)) {
     wx.login({
       success: function (res) {
         if (res.code) {
           wx.getUserInfo({
             success: function (res) {
               var objz = {};
               objz.avatarUrl = res.userInfo.avatarUrl;
               objz.nickName = res.userInfo.nickName;
               //console.log(objz);
               wx.setStorageSync('userInfo', objz);//存储userInfo
             }
           });
          

           var d = that.globalData;//这里存储了appid、secret、token串  
           var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
          
           wx.setStorageSync('url', l);
           wx.request({
             url: l,
             data: {},
             method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
             // header: {}, // 设置请求的 header  
             success: function (res) {
               var obj = {};
               obj.openid = res.data.openid;
               obj.expires_in = Date.now() + res.data.expires_in;
              
               wx.setStorageSync('openid', obj);//存储openid  
                console.log(obj);
               console.log('1');
             }
           });
         } else {
           console.log('获取用户登录态失败！' + res.errMsg)
         }
       }
     });
   }

  
  },
  
})
