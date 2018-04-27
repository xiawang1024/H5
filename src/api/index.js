/**
 * api
 */
import axios from 'axios'
import Qs from 'qs'

// axios.defaults.baseURL = '/api';
// axios.defaults.baseURL = 'http://www.softzztiedu.top/test/upRadio.do';

// ?openid=ofiRq0VYx1ccPYzqlffbh_kwMPaQ&appid=wx9760b6876d5e339f&content=1234567&page=0

const postUserInfo = (name, mobile, origin, openId) => axios.post('http://a.weixin.hndt.com/user/add/hn', {
    name,
    mobile,   
    origin,
    openId
})

const checkOpenId = (openId, origin) => axios.get('http://a.weixin.hndt.com/user/check/?openid=' + openId + '&origin=' + origin)

const getUser = (openid) => axios.get('http://a.weixin.hndt.com/user/find/openid?openid=' + openid)


import channelInfo from '../config'
const postMsg = ( page, cid = channelInfo.cid, creater='', fromUid='', content='') => axios.post('http://talk.hndt.com/test/upRadio.do',Qs.stringify({
    page, cid, creater, fromUid, content
}))


/**
 * 获取指定频率列表接口
 * @param  {[type]} channelId [cid]
 * @return {[type]}           [description]
 */
const getChannelItem = (channelId) => axios.get('http://program.hndt.com/get/live/channel/' + channelId)

export {
    postUserInfo,
    checkOpenId,
    getUser,
    postMsg,
    getChannelItem
}