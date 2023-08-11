// pages/yinbiao/yinbiao.js
var changyuanyinAudiosrc = [
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/i-sound2.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/er-sound.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/a-sound2.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/o-sound2.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/u-sound2.mp3']
var changyuanyinAudio0 =wx.createInnerAudioContext();
changyuanyinAudio0.src= changyuanyinAudiosrc[0]

var changyuanyinAudio1 =wx.createInnerAudioContext();
changyuanyinAudio1.src= changyuanyinAudiosrc[1]

var changyuanyinAudio2 =wx.createInnerAudioContext();
changyuanyinAudio2.src= changyuanyinAudiosrc[2]

var changyuanyinAudio3 =wx.createInnerAudioContext();
changyuanyinAudio3.src= changyuanyinAudiosrc[3]

var changyuanyinAudio4 =wx.createInnerAudioContext();
changyuanyinAudio4.src= changyuanyinAudiosrc[4]

var duanyuanyinAudiosrc =[
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/i-sound.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/e-sound.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/an-sound.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/e%5E-sound.mp3?',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/%5E-sound.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/o-sound.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/u-sound.mp3'
]
var duanyuanyinAudio0 =wx.createInnerAudioContext();
duanyuanyinAudio0.src= duanyuanyinAudiosrc[0];

var duanyuanyinAudio1 =wx.createInnerAudioContext();
duanyuanyinAudio1.src= duanyuanyinAudiosrc[1];

var duanyuanyinAudio2 =wx.createInnerAudioContext();
duanyuanyinAudio2.src= duanyuanyinAudiosrc[2];

var duanyuanyinAudio3 =wx.createInnerAudioContext();
duanyuanyinAudio3.src= duanyuanyinAudiosrc[3];

var duanyuanyinAudio4 =wx.createInnerAudioContext();
duanyuanyinAudio4.src= duanyuanyinAudiosrc[4];

var duanyuanyinAudio5 =wx.createInnerAudioContext();
duanyuanyinAudio5.src= duanyuanyinAudiosrc[5];

var duanyuanyinAudio6 =wx.createInnerAudioContext();
duanyuanyinAudio6.src= duanyuanyinAudiosrc[6];

var shuangyuanyinAudiosrc = [
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/ei.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/ai.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/oi.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/ao.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/eu.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/ir.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/er.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/uer.mp3'
]
var shuangyuanyinAudio0 =wx.createInnerAudioContext();
shuangyuanyinAudio0.src= shuangyuanyinAudiosrc[0];

var shuangyuanyinAudio1 =wx.createInnerAudioContext();
shuangyuanyinAudio1.src= shuangyuanyinAudiosrc[1];

var shuangyuanyinAudio2 =wx.createInnerAudioContext();
shuangyuanyinAudio2.src= shuangyuanyinAudiosrc[2];

var shuangyuanyinAudio3 =wx.createInnerAudioContext();
shuangyuanyinAudio3.src= shuangyuanyinAudiosrc[3];

var shuangyuanyinAudio4 =wx.createInnerAudioContext();
shuangyuanyinAudio4.src= shuangyuanyinAudiosrc[4];

var shuangyuanyinAudio5 =wx.createInnerAudioContext();
shuangyuanyinAudio5.src= shuangyuanyinAudiosrc[5];

var shuangyuanyinAudio6 =wx.createInnerAudioContext();
shuangyuanyinAudio6.src= shuangyuanyinAudiosrc[6];

var shuangyuanyinAudio7 =wx.createInnerAudioContext();
shuangyuanyinAudio7.src= shuangyuanyinAudiosrc[7];

var qingfuyinAudiosrc  = [
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/p.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao//t.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/k.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/f.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/si.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/s.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/ss.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/h.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/tss.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/ts.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/tr.mp3'
]
var qingfuyinAudio0 =wx.createInnerAudioContext();
qingfuyinAudio0.src= qingfuyinAudiosrc[0];

var qingfuyinAudio1 =wx.createInnerAudioContext();
qingfuyinAudio1.src= qingfuyinAudiosrc[1];

var qingfuyinAudio2 =wx.createInnerAudioContext();
qingfuyinAudio2.src= qingfuyinAudiosrc[2];

var qingfuyinAudio3 =wx.createInnerAudioContext();
qingfuyinAudio3.src= qingfuyinAudiosrc[3];

var qingfuyinAudio4 =wx.createInnerAudioContext();
qingfuyinAudio4.src= qingfuyinAudiosrc[4];

var qingfuyinAudio5 =wx.createInnerAudioContext();
qingfuyinAudio5.src= qingfuyinAudiosrc[5];

var qingfuyinAudio6 =wx.createInnerAudioContext();
qingfuyinAudio6.src= qingfuyinAudiosrc[6];

var qingfuyinAudio7 =wx.createInnerAudioContext();
qingfuyinAudio7.src= qingfuyinAudiosrc[7];

var qingfuyinAudio8 =wx.createInnerAudioContext();
qingfuyinAudio8.src= qingfuyinAudiosrc[8];

var qingfuyinAudio9 =wx.createInnerAudioContext();
qingfuyinAudio9.src= qingfuyinAudiosrc[9];

var qingfuyinAudio10 =wx.createInnerAudioContext();
qingfuyinAudio10.src= qingfuyinAudiosrc[10];


var zhuofuyinAudiosrc  = [
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/b.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/d.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/g.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/v.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/qq.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/z.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/n3.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/r.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/d3.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/dz.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/dr.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/m.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/n.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/ng.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/l.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/j.mp3',
  'https://gitee.com/Yanhaibing-willshine/english-grammar/raw/master/yinbiao/w.mp3'
];
var zhuofuyinAudio0 =wx.createInnerAudioContext();
zhuofuyinAudio0.src= zhuofuyinAudiosrc[0];

var zhuofuyinAudio1 =wx.createInnerAudioContext();
zhuofuyinAudio1.src= zhuofuyinAudiosrc[1];

var zhuofuyinAudio2 =wx.createInnerAudioContext();
zhuofuyinAudio2.src= zhuofuyinAudiosrc[2];

var zhuofuyinAudio3 =wx.createInnerAudioContext();
zhuofuyinAudio3.src= zhuofuyinAudiosrc[3];

var zhuofuyinAudio4 =wx.createInnerAudioContext();
zhuofuyinAudio4.src= zhuofuyinAudiosrc[4];

var zhuofuyinAudio5 =wx.createInnerAudioContext();
zhuofuyinAudio5.src= zhuofuyinAudiosrc[5];

var zhuofuyinAudio6 =wx.createInnerAudioContext();
zhuofuyinAudio6.src= zhuofuyinAudiosrc[6];

var zhuofuyinAudio7 =wx.createInnerAudioContext();
zhuofuyinAudio7.src= zhuofuyinAudiosrc[7];

var zhuofuyinAudio8 =wx.createInnerAudioContext();
zhuofuyinAudio8.src= zhuofuyinAudiosrc[8];

var zhuofuyinAudio9 =wx.createInnerAudioContext();
zhuofuyinAudio9.src= zhuofuyinAudiosrc[9];

var zhuofuyinAudio10 =wx.createInnerAudioContext();
zhuofuyinAudio10.src= zhuofuyinAudiosrc[10];

var zhuofuyinAudio11 =wx.createInnerAudioContext();
zhuofuyinAudio11.src= zhuofuyinAudiosrc[11];

var zhuofuyinAudio12 =wx.createInnerAudioContext();
zhuofuyinAudio12.src= zhuofuyinAudiosrc[12];

var zhuofuyinAudio13 =wx.createInnerAudioContext();
zhuofuyinAudio13.src= zhuofuyinAudiosrc[13];

var zhuofuyinAudio14 =wx.createInnerAudioContext();
zhuofuyinAudio14.src= zhuofuyinAudiosrc[14];

var zhuofuyinAudio15 =wx.createInnerAudioContext();
zhuofuyinAudio15.src= zhuofuyinAudiosrc[15];

var zhuofuyinAudio16 =wx.createInnerAudioContext();
zhuofuyinAudio16.src= zhuofuyinAudiosrc[16];

Page({

  /**
   * 页面的初始数据
   */
  data: {
   changyuanyin:[
    {sign:"iː",example:"bee /biː/ n. 蜜蜂",clickfun:"changyuanyin0"},
    {sign:"ɜː",example:"work /wɜːk/ n. 工作",clickfun:"changyuanyin1"},
    {sign:"ɑː ",example:"bar /bɑː/ n. 条",clickfun: "changyuanyin2"},
    {sign:"ɔː",example:"walk /wɔːk/ n. 步行",clickfun: "changyuanyin3"},
    {sign:"uː",example:"rude /ruːd/ adj. 粗鲁的",clickfun: "changyuanyin4"},
  ],
  duanyuanyin:[
    {sign:" ɪ",example:"sit /sɪt/ vi. 坐",clickfun:"duanyuanyin0"},
    {sign:"e",example:"pen /pen/ n. 钢笔",clickfun:"duanyuanyin1"},
    {sign:"æ ",example:"pan /pæn/ n. 平底锅",clickfun:"duanyuanyin2"},
    {sign:" ə",example:" sofa /'səʊfə/ n. 沙发",clickfun:"duanyuanyin3"},
    {sign:"ʌ ",example:" run /rʌn/ vt. 奔跑",clickfun:"duanyuanyin4"},
    {sign:" ɒ",example:"dog /dɒg/ n. 狗 ",clickfun:"duanyuanyin5"},
    {sign:"ʊ",example:"book /bʊk/ n. 书籍 ",clickfun:"duanyuanyin6"},
  ],
  shuangyuanyin:[
    {sign:"eɪ",example:"wait /weɪt/ vt. 等候",clickfun:"shuangyuanyin0"},
    {sign:"aɪ",example:"write /raɪt/ vi. 写",clickfun:"shuangyuanyin1"},
    {sign:"ɔɪ",example:"choice /tʃɔɪs/ n. 选择",clickfun:"shuangyuanyin2"},
    {sign:"əʊ",example:"know /nəʊ/ vt. 知道",clickfun:"shuangyuanyin3"},
    {sign:"aʊ",example:"know /nəʊ/ vt. 知道",clickfun:"shuangyuanyin4"},
    {sign:"ɪə",example:"beer /bɪə/ n. 啤酒",clickfun:"shuangyuanyin5"},
    {sign:"eə",example:"bear /beə/ n. 熊",clickfun:"shuangyuanyin6"},
    {sign:"ʊə",example:"poor /pʊə/ adj. 贫穷的",clickfun:"shuangyuanyin7"},
  ],
  qingfuyin:[
    {sign:"p",example:"open /'əʊpn/ v.打开",clickfun:"qingfuyin0"},
    {sign:"t",example:"talk /tɔːk/ vt. 讲",clickfun:"qingfuyin1"},
    {sign:"k",example:"key /kiː/ n.钥匙",clickfun:"qingfuyin2"},
    {sign:"f",example:"fish /fɪʃ/ n. 鱼",clickfun:"qingfuyin3"},
    {sign:"θ",example:"south /saʊθ/ n. 南方",clickfun:"qingfuyin4"},
    {sign:"s",example:"sit /sɪt/ vi. 坐",clickfun:"qingfuyin5"},
    {sign:"ʃ",example:"ship /ʃɪp/ n. 船",clickfun:"qingfuyin6"},
    {sign:"h",example:"home /həʊm/ n. 家",clickfun:"qingfuyin7"},
    {sign:"tʃ",example:"chick /tʃɪk/ n. 小鸡",clickfun:"qingfuyin8"},
    {sign:"ts",example:"boats /bəʊts/ n. (复数)小船",clickfun:"qingfuyin9"},
    {sign:"tr",example:"trade /treɪd/ n. 贸易",clickfun:"qingfuyin10"}
  ],
  zhuofuyin: [
    {sign:"b",example:"bread /bred/ n. 面包",clickfun:"zhuofuyin0"},
    {sign:"d",example:"duck /dʌk/ n. 鸭子",clickfun:"zhuofuyin1"},
    {sign:"ɡ",example:"egg /eg/ n. 蛋",clickfun:"zhuofuyin2"},
    {sign:"v",example:"very /'verɪ/ adv. 非常",clickfun:"zhuofuyin3"},
    {sign:"ð",example:"they /ðeɪ/ pron. 他们",clickfun:"zhuofuyin4"},
    {sign:"z",example:"zoo /zuː/ n. 动物园",clickfun:"zhuofuyin5"},
    {sign:"ʒ",example:"version /'vɜːʃ(ə)n/ n. 版本",clickfun:"zhuofuyin6"},
    {sign:"r",example:"red /red/ n. 红色",clickfun:"zhuofuyin7"},
    {sign:"dʒ",example:"July /dʒʊˈlaɪ/ n. 七月",clickfun:"zhuofuyin8"},
    {sign:"dz",example:"cards /kɑ:dz/ n.卡片(复数)",clickfun:"zhuofuyin9"},
    {sign:"dr",example:"drink /drɪŋk/ vt. 喝",clickfun:"zhuofuyin10"},
    {sign:"m",example:"move /muːv/ vi. 移动",clickfun:"zhuofuyin11"},
    {sign:"n",example:"no /nəʊ/ adv. 不",clickfun:"zhuofuyin12"},
    {sign:"ŋ",example:"bank /bæŋk/ n. 银行",clickfun:"zhuofuyin13"},
    {sign:"l",example:"like /laɪk/ vt. 喜欢",clickfun:"zhuofuyin14"},
    {sign:"j",example:"youth /juːθ/ n. 青年",clickfun:"zhuofuyin15"},
    {sign:"w",example:"what /wɒt/ pron. 什么",clickfun:"zhuofuyin16"}
  ]
  },
  changyuanyin0(){
    changyuanyinAudio0.play();
  },
  changyuanyin1(){
    changyuanyinAudio1.play();
  },
  changyuanyin2(){
    changyuanyinAudio2.play();
  },
  changyuanyin3(){
    changyuanyinAudio3.play();
  },
  changyuanyin4(){
    changyuanyinAudio4.play();
  },
  duanyuanyin1(){
    duanyuanyinAudio1.play();
  },
  duanyuanyin2(){
    duanyuanyinAudio2.play();
  },
  duanyuanyin0(){
    duanyuanyinAudio0.play();
  },
  duanyuanyin3(){
    duanyuanyinAudio3.play();
  },
  duanyuanyin4(){
    duanyuanyinAudio4.play();
  },
  duanyuanyin5(){
    duanyuanyinAudio5.play();
  },
  duanyuanyin1(){
    duanyuanyinAudio1.play();
  },
  duanyuanyin6(){
    duanyuanyinAudio6.play();
  },
  shuangyuanyin0(){
    shuangyuanyinAudio0.play();
  },
  shuangyuanyin1(){
    shuangyuanyinAudio1.play();
  },
  shuangyuanyin2(){
    shuangyuanyinAudio2.play();
  },
  shuangyuanyin3(){
    shuangyuanyinAudio3.play();
  },
  shuangyuanyin4(){
    shuangyuanyinAudio4.play();
  },
  shuangyuanyin5(){
    shuangyuanyinAudio5.play();
  },
  shuangyuanyin6(){
    shuangyuanyinAudio6.play();
  },
  shuangyuanyin7(){
    shuangyuanyinAudio7.play();
  },
  qingfuyin0(){
    qingfuyinAudio0.play();
  },
  qingfuyin1(){
    qingfuyinAudio1.play();
  },
  qingfuyin2(){
    qingfuyinAudio2.play();
  },
  qingfuyin3(){
    qingfuyinAudio3.play();
  },
  qingfuyin4(){
    qingfuyinAudio4.play();
  },
  qingfuyin5(){
    qingfuyinAudio5.play();
  },
  qingfuyin6(){
    qingfuyinAudio6.play();
  },
  qingfuyin7(){
    qingfuyinAudio7.play();
  },
  qingfuyin8(){
    qingfuyinAudio8.play();
  },
  qingfuyin9(){
    qingfuyinAudio9.play();
  },
  qingfuyin10(){
    qingfuyinAudio10.play();
  },
  zhuofuyin0(){
    zhuofuyinAudio0.play();
  },
  zhuofuyin1(){
    zhuofuyinAudio1.play();
  },
  zhuofuyin2(){
    zhuofuyinAudio2.play();
  },
  zhuofuyin3(){
    zhuofuyinAudio3.play();
  },
  zhuofuyin4(){
    zhuofuyinAudio4.play();
  },
  zhuofuyin5(){
    zhuofuyinAudio5.play();
  },
  zhuofuyin6(){
    zhuofuyinAudio6.play();
  },
  zhuofuyin7(){
    zhuofuyinAudio7.play();
  },
  zhuofuyin8(){
    zhuofuyinAudio8.play();
  },
  zhuofuyin9(){
    zhuofuyinAudio9.play();
  },
  zhuofuyin10(){
    zhuofuyinAudio10.play();
  },
  zhuofuyin11(){
    zhuofuyinAudio11.play();
  },
  zhuofuyin12(){
    zhuofuyinAudio12.play();
  },
  zhuofuyin13(){
    zhuofuyinAudio13.play();
  },
  zhuofuyin14(){
    zhuofuyinAudio14.play();
  },
  zhuofuyin15(){
    zhuofuyinAudio15.play();
  },
  zhuofuyin16(){
    zhuofuyinAudio16.play();
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