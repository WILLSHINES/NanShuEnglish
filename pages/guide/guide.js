// pages/guide/guide.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: [
      'https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/%E6%95%88%E6%9E%9C1.png',
      'https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/%E6%95%88%E6%9E%9C2.png',
      'https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/%E6%95%88%E6%9E%9C3.png',
      'https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/%E6%95%88%E6%9E%9C4.png',
      'https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/%E6%95%88%E6%9E%9C5.png',
      'https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/%E6%95%88%E6%9E%9C6.png',
      'https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/%E6%95%88%E6%9E%9C7.png',
      'https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/%E6%95%88%E6%9E%9C8.png',
      'https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/%E6%95%88%E6%9E%9C9.png'
    ],

  },
  userIt() {
    wx.switchTab({
      url: '/pages/index/index'
    })

    var that = this;
    wx.showModal({//用户授权弹窗
      title: '是否体验南书英语小程序',
      content: '点击确定',
      success(res) {
        console.log(res)
        //如果用户点击了确定按钮
        if (res.confirm) {
          wx.getUserProfile({
            desc: '获取你的昵称、头像、地区及性别',
            success: res => {
              console.log(res.userInfo)//控制台输出结果
              wx.setStorageSync('userInfo', res.userInfo)
              console.log("获取成功");
            },
            fail: res => {
              console.log(res)
              //拒绝授权
              wx.showToast({
                title: '登录失败',
                icon: 'error',
                duration: 2000
              });
              return;
            }
          });
        } else if (res.cancel) {
          //如果用户点击了取消按钮
          console.log(3);
          wx.showToast({
            title: '登录失败',
            icon: 'error',
            duration: 2000
          });
          return;
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})