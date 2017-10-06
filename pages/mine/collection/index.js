// pages/mine/collection/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 0,
    stars: [1,1,1,1,1],
    isNone: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  
  /**
   * 收藏内容状态切换
   */
  tabSwitch: function (e) {
      var that = this;
      var status = e.currentTarget.dataset.status;
    //   that.setData({
    //       status: status
    //   })
      if(status == 1 || 2){
          that.setData({
              isNone: true, 
              status: status
          })
      }else{
          that.setData({
              isNone: false,
              status: status
          })
      }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})