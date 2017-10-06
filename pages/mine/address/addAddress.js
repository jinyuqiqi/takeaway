// pages/mine/address/addAdress.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      region: ['请选择'],
      checked: false,
      is_default: 0,
      detailAddress: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      var click = options.click;
      var id = options.id;
      //console.log(click);
      that.setData({
          click : click,
          id: id
      })
      if (click == 'editAddress'){
          app.getPostData(function (post_data){
              app.getApiData(function (res){
                 //console.log(res)
                 var address = res.data.data;
                 var detailAddress = res.data.data.number;
                 var region = res.data.data.address.split(",")
                 that.setData({
                     address: address,
                     region: region,
                     detailAddress: detailAddress,
                 })
              }, 'POST', post_data)
          },{id: id, op: 'update'})
      }
  },
  
  /**
   * 选择所在地区
   */
  bindRegionChange: function (e) {
      var that = this;
      console.log('picker发送选择改变，携带值为', e.detail.value)
      that.setData({
          region: e.detail.value
      })
  },

  /**
   * 编辑详细地址
   */
  chooseAddress: function (e) {
      var that = this;
      var address;
      var names;
      var location_x;
      var location_y;
      wx.chooseLocation({
          success: function (res) {
              console.log(res.address);
              address = res.address;
              names = res.name;
              location_x = res.latitude;
              location_y = res.longitude;
              that.setData({
                  address: address,
                  names: res.name,
                  location_x: location_x,
                  location_y: location_y
              })
              console.log(address);
              var detailAddress = address + names;
              that.setData({
                  detailAddress: detailAddress
              })
          }
      })
      //console.log(address)
  },

  /**
   * 设为默认
  */
  setDefault: function (e){
      var that = this;
      var is_default;
      var checked = that.data.checked;
      that.setData({
          checked: !checked
      })
      //var isDefault = e.detail.value;
      if (checked == true){
          is_default = 1
          that.setData({
              is_default: is_default
          })
      } 
      if(checked == false){
          is_default = 0
          that.setData({
              is_default: is_default
          })
      }
      
      
      console.log(is_default);
  },


  /**
   * 返回地址列表页
   */
  backTo: function (e) {
      wx.navigateBack({
          delta: 1
      })
  },


  /**
   * 提交新增地址及编辑地址保存 
   */
  saveAddress: function (e){
      var that = this;
      var click = that.data.click;
      var userName = e.detail.value.userName;
      var phoneNumber = e.detail.value.phoneNumber;
      var address = that.data.region;
      var detailAddress = e.detail.value.detailAddress;
      var is_default = that.data.is_default;
      var location_x = that.data.location_x;
      var location_y = that.data.location_y;
      var names = that.data.names;
      var op = '';
      var id;
      
      console.log(is_default);
      if (click == 'addAddress'){
          op = 'add';
          id = '';
      }
      if (click == 'editAddress'){
          op = 'updates';
          id = that.data.id;
      }
      var data = {
            op: op,
            id: id,
            realname: userName,
            mobile: phoneNumber,
            address: address,
            detail: detailAddress,
            is_default: is_default,
            names: names,
            location_x: location_x,
            location_y: location_y

      }
      console.log(data)
      if( data['realname'] != '' || data['mobile'] != '' || data['address'] != '' || '请选择' || data['detail'] != ''){
        wx.showToast({
            title: '正在提交',
            icon: 'loading',
            duration: 2000,
            mask: true,
        });          
        app.getPostData(function (post_data){
                app.getApiData(function (res){
                    //console.log(res);
                    wx.navigateBack({
                        delta: 1
                    })
                }, 'POST', post_data)
        }, data)
      } else {
          wx.showToast({
              title: '请填写完整地址',
              duration: 1000,
              mask: true,
          });
          return
      }  
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
})