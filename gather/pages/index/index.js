//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  toLaunch: function () {
    wx.navigateTo({
      url: '../launch/launch',
    })
  },
  toParttime: function () {
    wx.navigateTo({
      url: '../parttime/parttime',
    })
  },
  toSite: function () {
    wx.navigateTo({
      url: '../site/site',
    })
  },
  toMatch: function () {
    wx.navigateTo({
      url: '../match/match',
    })
  },
  toCircle: function () {
    wx.navigateTo({
      url: '../circle/circle',
    })
  },
  toShop: function () {
    wx.navigateTo({
      url: '../shop/shop',
    })
  }
})
