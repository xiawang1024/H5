
import axios from 'axios'
import Qs from 'qs'
const wx = require('weixin-js-sdk')

// import { title, link, imgUrl, desc } from './config'

const title  = '乐龄1056--跟着诗歌去旅行“江南站”报名通道'
const link   = 'http://hndt.com/h5/xinxi/index.html'
const imgUrl = 'http://www.hndt.com/fm/1056/res/9G7yxLDL.png?1487661285139'
const desc   = '想象总归是虚无肤浅的，仅仅想想或谈谈那是辜负了江南。4月22号~~4月28号一起去吧，和主持人一起，去触摸江南的记忆,去体验不一样的江南。'

console.log(title,link,imgUrl,desc)

let configData = {
    url: window.location.href.split('#')[0],
    jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'chooseImage',
        'previewImage',
        'startRecord', 
        'playVoice', 
        'stopRecord', 
        'downloadVoice',
        'uploadVoice',
        'stopVoice'
    ]
}

axios.post('https://a.weixin.hndt.com/at/sign',Qs.stringify({url:configData.url})).then((res) => {
    let data = res.data
    wx.config({
        debug: false, 
        appId: data.appId, 
        timestamp: data.timestamp,
        nonceStr: data.nonceStr, 
        signature: data.signature,
        jsApiList: configData.jsApiList
    });
})


wx.ready(function() {
    wx.onMenuShareTimeline({
        title:title, 
        link: link, 
        imgUrl: imgUrl, 
        success: function() {
            
        },
        cancel: function() {
           
        }
    });
    wx.onMenuShareAppMessage({
        title:title,
        link: link, 
        imgUrl: imgUrl, 
        desc: desc, 
        type: '', 
        dataUrl: '', 
        success: function() {
            
        },
        cancel: function() {
            
        }
    });
})



