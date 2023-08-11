// pages/recitewords/recitewords.js
var getwords = require('../../utils/a_z/a.js').getRandom_word
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    enword:"",//单词原文
    exp:"",//单词中文翻译
    wordcount:30,//单词初始数量
    wordgrup:"",
    show: false,
  },
upwords(){
  if(0<=this.data.index<=this.data.wordcount)
  {
      this.setData({
    enword:this.data.wordgrup[(this.data.index)].word,
    exp:this.data.wordgrup[(this.data.index)].exp,
    index:(this.data.index)-1,
  });
  if(this.data.index<0){
    this.setData({
      index:(this.data.wordcount)-1
    })
  }
  }
  this.onShow()
  console.log("upwords"+this.data.index)
},
next_word(){
  if(this.data.index>=this.data.wordcount){
    this.setData({
      index:0,
    })
  }else{
    this.setData({
      index:(this.data.index)+1,      
      enword:this.data.wordgrup[(this.data.index)].word,
      exp:this.data.wordgrup[(this.data.index)].exp,
    })
  }
  this.onShow()

  console.log("next_word: " + this.data.index);
},
more(){
  this.setData({ show: true });
},

onClose() {
  this.setData({ 
    show: false,
    wordgrup:getwords(this.data.wordcount)
  });
},
onChange(e) {
  // console.log(e)
  this.setData({ wordcount: e.detail });
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({ 
      wordgrup:getwords(this.data.wordcount)
    })
    console.log("加载后的index为"+this.data.index);
    // 页面加载完成获取默认单词和翻译结果
  },
  returnindex(){
    wx.switchTab({
      url: '../../pages/index/index'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.setData({
     enword:this.data.wordgrup[(this.data.index)].word,
     exp:this.data.wordgrup[(this.data.index)].exp,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      enword:this.data.wordgrup[(this.data.index)].word,
      exp:this.data.wordgrup[(this.data.index)].exp,
     })
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