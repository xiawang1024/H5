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
  cid = HU_DONG_ID,
  content = '',
  creater = '游客',
  fromUid = '0'
) =>
  axios.post(
    'https://talk.hndt.com/test/upRadio.do',
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
let url = `https://api.hndt.com/api/page?template_id=393&channel_id=${
  channelData[HU_DONG_ID - 1]['channel_id']
}`

const getLiveData = () => axios.get(url)

export { postMsg, getLiveData }
