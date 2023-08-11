// index.js
var util = require('../../utils/time');
Page({
    data: {
        sunimg: '../../images/sun.png',
        promptTime: '',
        promptDay: '',
        thisyear:'',
        promptTimeSole: '早上好',
        username: "亲爱的用户",
        Wenan: "熬过无人问津的日子，才有诗和远方。",
        promptImage: ['https://7072-prod-5g7fu8i7e9eab266-1309291906.tcb.qcloud.la/%E5%8D%97%E4%B9%A6images/%E9%9F%B3%E6%A0%87.jpg?sign=341a9eb50a01cb09efbaa4b09e792a0a&t=1662982004', 'https://7072-prod-5g7fu8i7e9eab266-1309291906.tcb.qcloud.la/%E5%8D%97%E4%B9%A6images/%E8%AF%AD%E6%B3%95.jpg?sign=9f890b592561a70645a6b5eafb7d8b93&t=1662982384', 'https://7072-prod-5g7fu8i7e9eab266-1309291906.tcb.qcloud.la/%E5%8D%97%E4%B9%A6images/%E5%8D%95%E8%AF%8D.jpg?sign=9c163d568b8315b23bdc04b0d0106943&t=1662982049'],
        promptText: ['音标', '语法', '单词本']

    },
    onLoad: function (options) {
        this.setData({
            promptTime: util.formatTime(new Date()),
            promptDay: util.formatDay(new Date()),
            promptTimeSole: util.formatSole(),
            thisyear:util.thisYear(new Date())
        })
        var userinfo = wx.getStorageSync('userInfo')
        console.log(userinfo.nickName)
        this.setData({
            username: userinfo.nickName
        })

        wx.request({
            url: 'https://apis.juhe.cn/fapig/soup/query?key=df26a79b0d614f83341373783e5834fa',
            header: {
                'Content-Type': 'json'
            },
            success: res => {
                var wenan = res.data.result.text
                console.log(wenan);
                console.log(res);
                this.setData({
                    Wenan: wenan
                })
            }
        })
    },
    toyinbiao() {
        wx.navigateTo({
            url: '../../pages/yinbiao/yinbiao'
        })
    },
    togrammer() {
        wx.navigateTo({
            url: '../../pages/grammer/grammer'
        })
    },
    towords() {
        wx.navigateTo({
            url: '../../pages/words/words'
        })
    },
    words(){
         wx.navigateTo({
            url: '../../pages/recitewords/recitewords'
        })
    },
    onShareAppMessage(res){ 
        return {
        title: '南书英语',
        imageUrl:'https://gitee.com/Yanhaibing-willshine/nanshu-english/raw/master/images/%E6%95%88%E6%9E%9C1.png',
        success: function (res) {
            console.log("分享成功")
        },
        fail: function (res) {
            console.log("分享失败")
        }
        }
    },
})




