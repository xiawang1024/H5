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

const postMsg = ( page, cid = 4, creater='', fromUid='', content='') => axios.post('http://talk.hndt.com/test/upRadio.do',Qs.stringify({
    page, cid, creater, fromUid, content
}))

const pay = (name, phone, openId, source=100) => axios.post('http://a.weixin.hndt.com/passport/order/create.do',Qs.stringify({
    name, phone, openId, source, 
    "orderDetailList":[{
        "productId" : 3,
        "productQuantity" : 1
    }]
}))

const visit = (openId) => axios.get('http://a.weixin.hndt.com/passport/pay_to_live/pay_and_time_auth.do?openId=' + openId)


export {
    postUserInfo,
    checkOpenId,
    getUser,
    postMsg,
    pay,
    visit
}