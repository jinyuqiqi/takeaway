//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
      top1: false,
      top2: false,
      top3: false,
      item:{
         stars:[1,1,1,1,1]
      },
          
      
      
      region: ['广东省', '广州市', '海珠区'],//--------------------------
        customItem: '全部',//------------------
        imgUrls:[
        'http://img0.imgtn.bdimg.com/it/u=2395907280,3625811080&fm=11&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=2587536661,585367514&fm=27&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=2827070164,3731467866&fm=11&gp=0.jpg'
      ],
      sortSels:[
        {
          sortImgURL:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=518663811,1842957615&fm=27&gp=0.jpg',
          txt:'抢购'
        },
        {
          sortImgURL: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=518663811,1842957615&fm=27&gp=0.jpg',
          txt: '火锅'
        },
        {
          sortImgURL: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=518663811,1842957615&fm=27&gp=0.jpg',
          txt: '酒店'
        },
        {
          sortImgURL: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=518663811,1842957615&fm=27&gp=0.jpg',
          txt: 'KTV'
        },
        {
          sortImgURL: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=518663811,1842957615&fm=27&gp=0.jpg',
          txt: '运动健身'
        },
        {
          sortImgURL: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=518663811,1842957615&fm=27&gp=0.jpg',
          txt: '快餐'
        },
        {
          sortImgURL: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=518663811,1842957615&fm=27&gp=0.jpg',
          txt: '自助餐'
        },
        {
          sortImgURL: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=518663811,1842957615&fm=27&gp=0.jpg',
          txt: '更多分类'
        }
    ],
    
 
  },


  onLoad: function (ops) {
      var that = this;
    //   wx.request({
    //       url: 'http://xcx.szhuanya.cn/web/index.php?c=site&a=entry&do=web&m=we7_wmall&ctrl=Interface&op=openUserInfo',
    //       data: {

    //       },
    //       success: function (res){
    //           console.log(res);
    //       }
      //})
  },


  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },


  search: function () {
    wx.navigateTo({
      url: 'search/search'
    })
  },
  
  /**
   * tel_tab分类点击
   */
  navBarSwitch: function (e){
    var that = this;
    var nav = e.currentTarget.dataset.nav;
    if(nav == 1){
        that.setData({
            top1: !that.data.top1,
            top2: false,
            top3: false
        })
    }
    if (nav == 2) {
        that.setData({
            top2: !that.data.top2,
            top1: false,
            top3: false
        })
    }
    if (nav == 3) {
        that.setData({
            top3: !that.data.top3,
            top2: false,
            top1: false
        })
    }
    
  },
  

})
