import axios from 'axios'

// axios.defaults.baseURL = '/api';
axios.defaults.baseURL = 'http://a.weixin.hndt.com';
const postUserInfo = (name, mobile, work, age, personNum, origin, openId) => axios.post('/user/add/hn', {
    name,
    mobile, 
    work,  
    age,
    personNum,
    origin,
    openId
})

const checkOpenId = (openId, origin) => axios.get('/user/check/?openid=' + openId + '&origin=' + origin)


export {
    postUserInfo,
    checkOpenId
}