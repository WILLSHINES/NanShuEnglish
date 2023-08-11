// pages/grammer/grammer.js

const app = getApp();
const citys = {
  名词: ['名词的格', '名词的数', '名词的性'],
  冠词: ['定冠词', '不定冠词', '零冠词'],
  代词: ['基本代词', '不定代词', '疑问代词和关系代词'],
  数词: ['基数词和序数词', '时间货币和编码', '小数分数和百分数'],
  助动词和情态动词: ['can和may,must的用法', '情态动词的其他形式', '助动词'],
  介词: ['介词的种类等'],
  并列连词: ['并列连词'],
  动词的时态: ['动词的过去时', '动词的现在时', '动词的将来时',],
  现在分词: ['句子成分', '结构和时态'],
  过去分词: ['过去分词的结构', '过去分词在句中的成分'],
  动名词: ['句子成分', '结构和形式'],
  形容词和副词: ['形容词的功能和作用', '副词的功能和作用', '形容词和副词的比较级'],
  虚拟语气:['在从句中的用法','在非真实条件句中的用法'],
  被动语态:['被动语态'],
  一致关系:['一致关系'],
  定语从句:['定语从句','非限制性定语从句'],
  名词性从句:['名词性从句'],
  状语从句:['状语从句1','状语从句2'],
  it的用法:['it的用法'],
  倒装:['倒装']
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    article: {},
    show: false,
    tips:"点击切换",
    columns: [
      {
        values: Object.keys(citys),
        className: 'column1',
      },
      {
        values: citys['名词'],
        className: 'column2',
        defaultIndex: 2,
      },
    ],
    list:[
      ['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%90%8D%E8%AF%8D/%E5%90%8D%E8%AF%8D%E7%9A%84%E6%A0%BC.md','https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%90%8D%E8%AF%8D/%E5%90%8D%E8%AF%8D%E7%9A%84%E6%95%B0.md','https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%90%8D%E8%AF%8D/%E5%90%8D%E8%AF%8D%E7%9A%84%E6%80%A7.md'],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%86%A0%E8%AF%8D/%E5%AE%9A%E5%86%A0%E8%AF%8D.md','https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%86%A0%E8%AF%8D/%E5%AE%9A%E5%86%A0%E8%AF%8D.md',''],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E4%BB%A3%E8%AF%8D/5%E7%A7%8D%E5%9F%BA%E6%9C%AC%E4%BB%A3%E8%AF%8D.md','https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E4%BB%A3%E8%AF%8D/%E4%B8%8D%E5%AE%9A%E4%BB%A3%E8%AF%8D.md','https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E4%BB%A3%E8%AF%8D/%E7%96%91%E9%97%AE%E4%BB%A3%E8%AF%8D%E5%92%8C%E5%85%B3%E7%B3%BB%E4%BB%A3%E8%AF%8D.md'],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E6%95%B0%E8%AF%8D/%E5%9F%BA%E6%95%B0%E8%AF%8D%E5%92%8C%E5%BA%8F%E6%95%B0%E8%AF%8D.md','https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E6%95%B0%E8%AF%8D/%E6%97%B6%E9%97%B4%E3%80%81%E8%B4%A7%E5%B8%81%E5%92%8C%E7%BC%96%E7%A0%81.md','https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E6%95%B0%E8%AF%8D/%E5%B0%8F%E6%95%B0%E3%80%81%E5%88%86%E6%95%B0%E3%80%81%E7%99%BE%E5%88%86%E6%95%B0.md'],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%8A%A9%E5%8A%A8%E8%AF%8D%E5%92%8C%E6%83%85%E6%80%81%E5%8A%A8%E8%AF%8D/%E6%83%85%E6%80%81%E5%8A%A8%E8%AF%8Dcan%E3%80%81may%E3%80%81must%E7%9A%84%E7%94%A8%E6%B3%95.md','https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%8A%A9%E5%8A%A8%E8%AF%8D%E5%92%8C%E6%83%85%E6%80%81%E5%8A%A8%E8%AF%8D/%E6%83%85%E6%80%81%E5%8A%A8%E8%AF%8D%E7%9A%84%E5%85%B6%E4%BB%96%E5%BD%A2%E5%BC%8F.md',''],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E4%BB%8B%E8%AF%8D/%E4%BB%8B%E8%AF%8D%E7%9A%84%E7%A7%8D%E7%B1%BB%E3%80%81%E7%9F%AD%E8%AF%AD%E5%8F%8A%E6%90%AD%E9%85%8D.md'],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%B9%B6%E5%88%97%E8%BF%9E%E8%AF%8D/%E5%B9%B6%E5%88%97%E8%BF%9E%E8%AF%8D.md'],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%8A%A8%E8%AF%8D%E7%9A%84%E6%97%B6%E6%80%81/%E5%8A%A8%E8%AF%8D%E7%9A%84%E8%BF%87%E5%8E%BB%E6%97%B6.md','https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%8A%A8%E8%AF%8D%E7%9A%84%E6%97%B6%E6%80%81/%E5%8A%A8%E8%AF%8D%E7%9A%84%E7%8E%B0%E5%9C%A8%E6%97%B6.md','https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%8A%A8%E8%AF%8D%E7%9A%84%E6%97%B6%E6%80%81/%E5%8A%A8%E8%AF%8D%E7%9A%84%E5%B0%86%E6%9D%A5%E6%97%B6.md'],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E7%8E%B0%E5%9C%A8%E5%88%86%E8%AF%8D/%E7%8E%B0%E5%9C%A8%E5%88%86%E8%AF%8D%E5%9C%A8%E5%8F%A5%E5%AD%90%E4%B8%AD%E7%9A%84%E6%88%90%E5%88%86.md','https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E7%8E%B0%E5%9C%A8%E5%88%86%E8%AF%8D/%E7%8E%B0%E5%9C%A8%E5%88%86%E8%AF%8D%E7%9A%84%E7%BB%93%E6%9E%84%E5%92%8C%E6%97%B6%E6%80%81.md'],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E8%BF%87%E5%8E%BB%E5%88%86%E8%AF%8D/%E8%BF%87%E5%8E%BB%E5%88%86%E8%AF%8D%E7%9A%84%E7%BB%93%E6%9E%84.md','https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E8%BF%87%E5%8E%BB%E5%88%86%E8%AF%8D/%E8%BF%87%E5%8E%BB%E5%88%86%E8%AF%8D%E5%9C%A8%E5%8F%A5%E5%AD%90%E4%B8%AD%E7%9A%84%E6%88%90%E5%88%86.md'],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%8A%A8%E5%90%8D%E8%AF%8D/%E5%8A%A8%E5%90%8D%E8%AF%8D%E5%9C%A8%E5%8F%A5%E5%AD%90%E4%B8%AD%E7%9A%84%E6%88%90%E5%88%86.md','https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%8A%A8%E5%90%8D%E8%AF%8D/%E5%8A%A8%E5%90%8D%E8%AF%8D%E7%9A%84%E7%BB%93%E6%9E%84%E5%92%8C%E5%BD%A2%E5%BC%8F.md'],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%BD%A2%E5%AE%B9%E8%AF%8D%E5%92%8C%E5%89%AF%E8%AF%8D/%E5%BD%A2%E5%AE%B9%E8%AF%8D%E7%9A%84%E5%8A%9F%E7%94%A8.md','https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%BD%A2%E5%AE%B9%E8%AF%8D%E5%92%8C%E5%89%AF%E8%AF%8D/%E5%89%AF%E8%AF%8D%E7%9A%84%E5%8A%9F%E7%94%A8.md','https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%BD%A2%E5%AE%B9%E8%AF%8D%E5%92%8C%E5%89%AF%E8%AF%8D/%E5%BD%A2%E5%AE%B9%E8%AF%8D%E5%92%8C%E5%89%AF%E8%AF%8D%E7%9A%84%E6%AF%94%E8%BE%83%E7%BA%A7.md'],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E8%99%9A%E6%8B%9F%E8%AF%AD%E6%B0%94/%E8%99%9A%E6%8B%9F%E8%AF%AD%E6%B0%94%E5%9C%A8%E4%BB%8E%E5%8F%A5%E4%B8%AD%E7%9A%84%E7%94%A8%E6%B3%95.md','https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E8%99%9A%E6%8B%9F%E8%AF%AD%E6%B0%94/%E5%9C%A8%E9%9D%9E%E7%9C%9F%E5%AE%9E%E6%9D%A1%E4%BB%B6%E5%8F%A5%E4%B8%AD%E7%9A%84%E7%94%A8%E6%B3%95.md'],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E8%A2%AB%E5%8A%A8%E8%AF%AD%E6%80%81/%E8%A2%AB%E5%8A%A8%E8%AF%AD%E6%80%81.md'],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E4%B8%80%E8%87%B4%E5%85%B3%E7%B3%BB/%E4%B8%80%E8%87%B4%E5%85%B3%E7%B3%BB.md'],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%AE%9A%E8%AF%AD%E4%BB%8E%E5%8F%A5/%E5%AE%9A%E8%AF%AD%E4%BB%8E%E5%8F%A5.md','https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%AE%9A%E8%AF%AD%E4%BB%8E%E5%8F%A5/%E9%9D%9E%E9%99%90%E5%88%B6%E6%80%A7%E5%AE%9A%E8%AF%AD%E4%BB%8E%E5%8F%A5.md'],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%90%8D%E8%AF%8D%E6%80%A7%E4%BB%8E%E5%8F%A5/%E5%90%8D%E8%AF%8D%E6%80%A7%E4%BB%8E%E5%8F%A5.md'],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E7%8A%B6%E8%AF%AD%E4%BB%8E%E5%8F%A5/%E7%8A%B6%E8%AF%AD%E4%BB%8E%E5%8F%A5(1).md','https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E7%8A%B6%E8%AF%AD%E4%BB%8E%E5%8F%A5/%E7%8A%B6%E8%AF%AD%E4%BB%8E%E5%8F%A5(2).md'],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/IT%E7%9A%84%E7%94%A8%E6%B3%95/IT%E7%9A%84%E7%94%A8%E6%B3%95.md'],['https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%80%92%E8%A3%85/%E5%80%92%E8%A3%85.md']
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
   showsheet(){
    this.setData({
      show: true
    })
   },
   onConfirm(e){
 this.setData({
      show: false,
      tips:e.detail.value[1]
    });
    var thislink=this.data.list[(e.detail.index[0])][(e.detail.index[1])];
    console.log(e)
    console.log(thislink)
    app.getText(thislink,res => {
      let obj = app.towxml(res.data,'markdown',{
        theme:'light', //主题 dark 黑色，light白色，不填默认是light
        events:{      //为元素绑定的事件方法
          tap:e => {
            console.log('tap',e);
          },
          change:e => {
            console.log('todo',e);
          }
        }
      });
      //更新解析数据
      this.setData({
        article:obj,
      });
    });
   },
   onCancel(){
    this.setData({
      show: false
    })
   },
  onChange(e) {
    const { picker, value, index } = e.detail;
    picker.setColumnValues(1, citys[value[0]]);
    console.log(e)
  },
  onLoad(options) {
    app.getText('https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/docs/%E5%90%8D%E8%AF%8D/%E5%90%8D%E8%AF%8D%E7%9A%84%E6%95%B0.md',res => {
      console.log(res);
      let obj = app.towxml(res.data,'markdown',{
        theme:'light', //主题 dark 黑色，light白色，不填默认是light
        events:{      //为元素绑定的事件方法
          tap:e => {
            console.log('tap',e);
          },
          change:e => {
            console.log('todo',e);
          }
        }
      });
      //更新解析数据
      this.setData({
        article:obj,
      });
    });
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