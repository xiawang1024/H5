import axios from 'axios';
import Qs from 'qs';
import HU_DONG_ID from '@/config.js';

// axios.defaults.baseURL = '/api';
axios.defaults.baseURL = 'https://a.weixin.hndt.com';
const postUserInfo = (name, description, age, mobile, origin, openId) =>
	axios.post('/user/add/hn', {
		name,
		description,
		age,
		mobile,
		origin,
		openId
	});

const checkOpenId = (openId, origin) => axios.get('/user/check/?openid=' + openId + '&origin=' + origin);

const getUser = (openId) => axios.get('/user/find/openid?openid=' + openId);

const postMsg = (page, cid = HU_DONG_ID, creater = '', fromUid = '', content = '') =>
	axios.post(
		'https://talk.hndt.com/test/upRadio.do',
		Qs.stringify({
			page,
			cid,
			creater,
			fromUid,
			content
		})
	);

export { postUserInfo, checkOpenId, getUser, postMsg };
