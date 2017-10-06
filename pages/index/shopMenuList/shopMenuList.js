
var app = getApp();
// page/one/index.js
Page({
  data: {
    imgUrls: [
      'http://img0.imgtn.bdimg.com/it/u=2395907280,3625811080&fm=11&gp=0.jpg',
      'http://img3.imgtn.bdimg.com/it/u=2587536661,585367514&fm=27&gp=0.jpg',
      'http://img0.imgtn.bdimg.com/it/u=2827070164,3731467866&fm=11&gp=0.jpg'
    ],
    content: [],
  
    qyopen: false,
    qyshow: false,
    nzopen: false,
    nzshow: false,
    pxopen: false,
    pxshow: false,
    kfopen:false,
    kfshow:false,
    isfull: false,
    citycenter: {},
    select1: '',
    select2: '',
    shownavindex:1,
      //评价部分标签页切换数据
      winWidth: 0,
      winHeight: 0,
      // tab切换
      currentTab: 0,
      nv: ['衣服', '裤子', '内衣', '服饰', '衣服', '裤子', '内衣', '服饰', '衣服', '裤子', '内衣', '服饰'],
      px: ['默认排序', '离我最近', '价格最低', '价格最高'],
      kf: ['111111111111', "222222222222222"]
  },
  
  onLoad: function () {
    // this.setData({
    //   nv: ['衣服', '裤子', '内衣', '服饰', '衣服', '裤子', '内衣', '服饰', '衣服', '裤子', '内衣', '服饰'],
    //   px: ['默认排序', '离我最近', '价格最低', '价格最高'],
    //   kf:['111111111111',"222222222222222"]
    // })
  //    评价部分，标签页的切换
      var that = this;

      /**
       * 获取系统信息
       */
      wx.getSystemInfo( {

          success: function( res ) {
              that.setData( {
                  winWidth: res.windowWidth,
                  winHeight: res.windowHeight
              });
          }

      });
  },
  qq:function(){
    wx.navigateTo({
      url: 'http://wpa.qq.com/msgrd?v=3&uin=3394167574&site=qq&menu=yes'
    })
  },
  listqy: function (e) {//区域
    if (this.data.qyopen) {
      this.setData({
        qyopen: false,
        qyshow: false,
        nzopen: false,
        nzshow: true,
        pxopen: false,
        pxshow: true,
        kfopen:false,
        kfshow:true,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        qyopen: true,
        qyshow: false,
        nzopen: false,
        nzshow: true,
        pxopen: false,
        pxshow: true,
        kfopen:false,
        kfshow:true,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }

  },
  list: function (e) {//女装
    if (this.data.nzopen) {
      this.setData({
        qyopen: false,
        qyshow: true,
        nzopen: false,
        nzshow: false,
        pxopen: false,
        pxshow: true,
        kfopen:false,
        kfshow:true,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        content: this.data.nv,
        qyopen: false,
        qyshow: true,
        nzopen: true,
        nzshow: false,
        pxopen: false,
        pxshow: true,
        kfopen:false,
        kfshow:true,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
  },
  listpx: function (e) {//排序
    if (this.data.pxopen) {
      this.setData({
        qyopen: false,
        qyshow: true,
        nzopen: false,
        nzshow: true,
        pxopen: false,
        pxshow: false,
        kfopen:false,
        kfshow:true,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        content: this.data.px,
        qyopen: false,
        qyshow: true,
        nzopen: false,
        nzshow: true,
        pxopen: true,
        pxshow: false,
        kfopen:false,
        kfshow:true,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
    console.log(e.target)
  },
  listkf: function (e) {//客服
        if (this.data.pxopen) {
            this.setData({
                qyopen: false,
                qyshow: true,
                nzopen: false,
                nzshow: true,
                pxopen: false,
                pxshow: true,
                kfopen:false,
                kfshow:false,
                isfull: false,
                shownavindex: 0
            })
        } else {
            this.setData({
              content: this.data.kf,
                qyopen: false,
                qyshow: true,
                nzopen: false,
                nzshow: true,
                pxopen: false,
                pxshow: true,
                kfopen:true,
                kfshow:false,
                isfull: true,
                shownavindex: e.currentTarget.dataset.nav
            })
        }
        console.log(e.target)
    },
  selectleft: function (e) {

    this.setData({
      citycenter: this.data.cityleft[e.currentTarget.dataset.city],
      select1: e.target.dataset.city,
      select2: ''
    });
  },
  selectcenter: function (e) {
    this.setData({
      select2: e.target.dataset.city
    });
  },
  //评价部分标签页的切换
    /**
     * 滑动切换tab
     */
    bindChange: function( e ) {

        var that = this;
        that.setData( { currentTab: e.detail.current });

    },
    /**
     * 点击tab切换
     */
    swichNav: function( e ) {

        var that = this;

        if( this.data.currentTab === e.target.dataset.current ) {
            return false;
        } else {
            that.setData( {
                currentTab: e.target.dataset.current
            })
        }
    }



})