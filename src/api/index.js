import axios from 'axios'

// axios.defaults.baseURL = '/api';
axios.defaults.baseURL = 'http://a.weixin.hndt.com/';
const postUserInfo = (name, mobile, job, personCount, openId) => axios.post('/user/add/hn', {
    name,
    mobile,
    job,
    personCount,
    openId
})

const checkOpenId = (openId) => axios.get('http://a.weixin.hndt.com/user/check/?openid=' + openId)


export {
    postUserInfo,
    checkOpenId
}