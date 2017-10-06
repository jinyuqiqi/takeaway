// pages/mine/coupon/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHave: true,
    status: 1,
    click:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      
  },

  /**
   * 优惠券状态切换
   */
  tabSwitch: function (e) {
      var status = e.currentTarget.dataset.status;
      console.log(status);
      var data = {
          op: 'coupon',
          status: status
      }
      app.getPostData(function (post_data) {
          app.getApiData(function (res) {
              console.log(res);
          }, 'GET', post_data)
      }, data)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 跳转页面函数
   */
  navTo: function (e){
      var click = e.currentTarget.dataset.click;
      if(click == 'back'){
          wx.navigateBack({
              delta: 1
          })
      }
  },


  /**
   * 请求全部数据
   */
  getAll: function (e) {
     var that = this;

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
})