// pages/serch/serch.js
var app = getApp();

var md5 = require('../../utils/MD5.js').Md5
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: '',
    value: '',
    show: false,
    columns: ['中英', '英中', '中日', '日中', '中韩', '韩中', '中法', '法中'],
    From: 'zh',
    To: 'en',
    fronttext: "中英",
    itstyle: "serch-container-class",
  },
  showPopup() {
    console.log('语言选择已开启')
    this.setData({ show: true });
  },
  onConfirm(event) {
    const { picker, value, index } = event.detail;
    console.log(`当前值：${value}, 当前索引：${index}`);
    var BDcolumns = [
      [{
        src: 'zh',
        dst: 'en',
        text: '中英'
      }],
      [{
        src: 'en',
        dst: 'zh',
        text: '英中'
      }],
      [{
        src: 'zh',
        dst: 'jp',
        text: '中日'
      }],
      [{
        src: 'jp',
        dst: 'zh',
        text: '日中'
      }],
      [{
        src: 'zh',
        dst: 'kor',
        text: '中韩'
      }],
      [{
        src:'kor',
        dst: 'zh',
        text: '韩中'
      }]
      ,
      [{
        src: 'zh',
        dst: 'fra',
        text: '中法'
      }],
      [{
        src:'fra',
        dst: 'zh',
        text: '法中'
      }]
    ];
    for (var i = 0; i <= index; i++) {
      if (index == i) {
        this.setData({
          From: BDcolumns[i][0].src,
          To: BDcolumns[i][0].dst,
          fronttext: BDcolumns[i][0].text
        })
      }
    }
    // console.log(BDcolumns[0][0].src);
    this.setData({
      show: false
    });
  },
  onCancel() {
    this.setData({
      show: false
    });
    console.log('取消');
  },
  onTranslate: function (e) {
    var q = e.detail.value;
    this.setData({
      value: q
    })
    console.log(e);
    console.log(this.data.From);
    var from = this.data.From;
    var to = this.data.To;
    //注册获得appid和密匙
    var appid = '20220904001331314';
    var key = 'jJ7ghBKTdv81eQNUIBV0';
    var salt = Date.parse(Date());//随机数,按文档要求应该是随机数，使用时间戳
    var string = appid + q + salt + key;
    var sign = md5(string); //MD5是一个写好的加密函数

    var tts = 1;
    var dict = 0;
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      data: {
        q,
        from,
        to,
        appid,
        salt,
        sign,
        tts,
        dict
      },
      success: res => {
        console.log('success:', res)
        console.log(res)
        // var answer = res.data.trans_result[0].dst;
        var answer = '';
        for (var i = 0; i < res.data.trans_result.length; i++) {
          answer = answer + '\n' + res.data.trans_result[i].dst
        }
        console.log(answer);
        this.setData({
          result: answer.replace('\n', '')
        })
      },
      fail: res => {
        console.log('fail:', res)
      }
    })
  },
  onFocus() {
    this.setData({
      itstyle: "serch-container-class-it "
    })
  },
  onBlur() {
    this.setData({
      itstyle: "serch-container-class"
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