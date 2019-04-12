/**
 * api
 */
import axios from 'axios'
import Qs from 'qs'
import HU_DONG_ID from '@/config.js'
import channelData from '@/channelData'

/**
 * 互动
 * @param {*} page
 * @param {*} cid
 * @param {*} content
 * @param {*} creater
 * @param {*} fromUid
 */
const postMsg = (page, cid = HU_DONG_ID, content = '', creater = '游客', fromUid = '0') =>
	axios.post(
		'http://talk.hndt.com/test/upRadio.do',
		Qs.stringify({
			page,
			cid,
			creater,
			fromUid,
			content
		})
	)
/**
 * 获取直播信息
 */
// let url = `https://api.hndt.com/api/page?template_id=393&channel_id=${
//   channelData[HU_DONG_ID - 1]['channel_id']
// }`

// let channel_id = 1650
// let url = `http://api.hndt.com/api/page?template_id=394&channel_id=${channel_id}&article_id=${getQueryString('id')}`

// let url = `/hndt/streaming-media/stream/230`
let url = `http://gw.dianzhenkeji.com/streaming-media/stream/${getQueryString('cid')}`

const getLiveData = () => {
	return new Promise((resolve, reject) => {
		axios.get(url).then((res) => {
			let { code, msg, result } = res.data
			console.log(res.data)
			if (code === 0) {
				let { ipAndPort, liveUrl, screenshot, videoTitle, description } = result

				let data = {
					live: `${ipAndPort}${liveUrl}`,
					icon: `${ipAndPort}${screenshot}`,
					name: videoTitle,
					desc: description
				}
				resolve(data)
			} else {
				reject()
			}
		})
	})
}

function getQueryString(name) {
	var url = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
	var newUrl = window.location.search.substr(1).match(url)
	if (newUrl != null) {
		return unescape(newUrl[2])
	} else {
		return false
	}
}

/**
 * 获取直播列表
 * @param {*} page
 * @param {*} channel_id 1502： 1066直播列表，1503： 共享直播间列表
 */
const getLiveList = (page, channel_id = '1502') => {
	let url = `http://api.hndt.com/api/page?template_id=395&channel_id=${channel_id}&page=${page}`
	return axios.get(url)
}

export { postMsg, getLiveData, getLiveList }
