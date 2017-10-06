// pages/mine/index.js
var app = getApp();
Page({

  data: {
    // userInfo: '',
    login: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
    
      var userInfo = wx.getStorageSync('userInfo');
         //console.log(userInfo);
      if (userInfo != ''){
         that.setData({
            userInfo: userInfo,
            login: true
         })
      }else{
         app.getPostData(function (post_data) {
            app.getApiData(function (res) {
            console.log(res);
            var userInfo = res.data.data;
            wx.setStorageSync('userInfo', userInfo);
               that.setData({
                  userInfo: userInfo,
                  login: true
               })
            }, 'GET', post_data)
         }, {op: 'info'})
    }
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },


  /**
   * 页面跳转
   */
  navTo: function (e){
      var click = e.currentTarget.dataset.click;
      wx.navigateTo({
         url: '/pages/mine/'+click+'/index',
      })
  },

  
})