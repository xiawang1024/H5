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

const postMsg = (openid, content, page, appid = 'wx5f789dea59c6c2c5') => axios.post('http://talk.hndt.com/test/upRadio.do',Qs.stringify({
    openid, content, page , appid
}))


export {
    postUserInfo,
    checkOpenId,
    postMsg
}