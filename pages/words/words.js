// pages/grammer/grammer.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr : [
      {name:"group1\t第一组",thisfunction:"topages1",mintitle:"557组短语",poetry:"不积跬步无以至千里；不积小流无以成江海。",img:"https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/wordpage%20(1).jpeg"},
      {name:"group2\t第二组",thisfunction:"topages2",mintitle:"600组短语",poetry:"宝剑锋从磨砺出，梅花香自苦寒来。",img:"https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/wordpage%20(1).jpg"},
      {name:"group3\t第三组",thisfunction:"topages3",mintitle:"598组短语",poetry:"锲而舍之，朽木不折；锲而不舍，金石可镂。",img:"https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/pexels-karolina-grabowska-4207791.jpg"},
      {name:"group4\t第四组",thisfunction:"topages4",mintitle:"380组短语",poetry:"乘风破浪会有时，直挂云帆济沧海。",img:"https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/wordpage%20(2).jpeg"},
      {name:"group5\t第五组",thisfunction:"topages5",mintitle:"180组短语",poetry:"千淘万漉虽辛苦，吹尽狂沙始到金。 ",img:"https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/wordpage%20(2).jpg"},
      {name:"group6\t第六组",thisfunction:"topages6",mintitle:"180组短语",poetry:"非学无以广才，非志无以成学。",img:"https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/wordpage%20(3).jpg"},
      {name:"group7\t第七组",thisfunction:"topages7",mintitle:"180组短语",poetry:"路漫漫其修远兮，吾将上下而求索。 ",img:"https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/wordpage%20(4).jpg"},
      {name:"group8\t第八组",thisfunction:"topages8",mintitle:"180组短语",poetry:"穷且益坚，不坠青云之志。",img:"https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/wordpage%20(5).jpg"},
      {name:"group9\t第九组",thisfunction:"topages9",mintitle:"180组短语",poetry:"一日不读书，胸臆无佳想。",img:"https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/wordpage%20(6).jpg"},
    ]
  },
  topages1(){
    wx.navigateTo({
      url: '/pages/group1/group1'
    })
  },
  topages2(){
    wx.navigateTo({
      url: '/pages/group2/group2'
    })
  },
  topages3(){
    wx.navigateTo({
      url: '/pages/group3/group3'
    })
  },
  topages4(){
    wx.navigateTo({
      url: '/pages/group4/group4'
    })
  },
  topages5(){
    wx.navigateTo({
      url: '/pages/group5/group5'
    })
  },
  topages6(){
    wx.navigateTo({
      url: '/pages/group6/group6'
    })
  },
  topages7(){
    wx.navigateTo({
      url: '/pages/group7/group7'
    })
  },
  topages8(){
    wx.navigateTo({
      url: '/pages/group8/group8'
    })
  },
  topages9(){
    wx.navigateTo({
      url: '/pages/group9/group9'
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