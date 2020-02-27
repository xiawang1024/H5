/*
 * @Description:
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2020-02-27 11:47:07
 * @LastEditTime: 2020-02-27 14:16:57
 */
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
const postMsg = (
  page,
  fromUid,
  content = '',
  cid = HU_DONG_ID,
  creater = '游客'
) =>
  axios.post(
    'https://talk.hndt.com/test/upRadio.do',
    Qs.stringify({
      page,
      fromUid,
      content,
      cid,
      creater
    })
  )
/**
 * 获取直播信息
 */
// let url = `https://api.hndt.com/api/page?template_id=393&channel_id=${
//   channelData[HU_DONG_ID - 1]['channel_id']
// }`

let channel_id = 1511
let article_id = 2256953
// let url = `https://api.hndt.com/api/page?template_id=394&channel_id=${channel_id}&article_id=${article_id}`
let url = `https://prog.dianzhenkeji.com/program/get/channel/channelIds/program/180`

const getLiveData = () => axios.get(url).then(res => {
  return new Promise((resolve, reject) => {
    let { name, image, streams } = res.data[0]
    resolve({
      data: {
        title: name,
        icon: `https://cmsres.dianzhenkeji.com${image}`,
        live: streams[0],
        status: 'b',
        body: '',
        channel: "",
        video: ''
      }
    })
  })
})

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
 * @param {*} channel_id 1511： 哈密
 */
const getLiveListOld = (page, channel_id = '1511') => {
  let url = `https://api.hndt.com/api/page?template_id=395&channel_id=${channel_id}&page=${page}`
  return axios.get(url)
}

export { postMsg, getLiveData, getLiveListOld }
