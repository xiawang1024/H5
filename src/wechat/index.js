
import axios from 'axios'
import Qs from 'qs'
const wx = require('weixin-js-sdk')

// import { title, link, imgUrl, desc } from './config'

const title  = '报名'
const link   = 'http://hndt.com/h5/yinyue/index.html'
const imgUrl = 'http://www.hndt.com/fm/881/res/WGLcmNK5.png?1487665352849'
const desc   = '报名'

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



