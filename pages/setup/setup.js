// pages/setup/setup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender:" ",
    userinfo:[]
  },
  loginout(){
    this.setData({
      userinfo:''
    })
    //清理本地缓存
    wx.setStorageSync('user', null)
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var userinfo = wx.getStorageSync('userInfo')
    this.setData({
      userinfo
    })
    console.log(userinfo.gender)
   
    if (userinfo.gender==1){
      this.setData({gender: "男"});
    }else if(userinfo.gender==2) {
      this.setData({gender: "女"});
    }else{
      this.setData({gender: "未知"});
    }
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