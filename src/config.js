const HU_DONG_ID = getQueryString('streamName') //临时id

function getQueryString(name) {
	var url = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
	var newUrl = window.location.search.substr(1).match(url)
	if (newUrl != null) {
		return unescape(newUrl[2])
	} else {
		return false
	}
}

export default HU_DONG_ID
