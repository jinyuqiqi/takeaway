var app = getApp();
Page({
  data: {
    region: ['','','江南豪园']
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})