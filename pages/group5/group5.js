// pages/group1/group1.js
var group = require('../../utils/Englishgrup/group5').group5;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    allgroup: "",
    uhiden: -1,
    show_exp: false,
  },
  showexp(e){
    if(this.data.uhiden ==-1){
      this.setData({
      uhiden:e.currentTarget.id,
    })
  }else if(this.data.uhiden ==e.currentTarget.id){
    this.setData({
      uhiden:-1
    })
  }else{
    this.setData({
      uhiden:e.currentTarget.id,
    })
  }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      allgroup:group
    })
    console.log(group);
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