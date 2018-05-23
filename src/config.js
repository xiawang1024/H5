const BaseUrl = 'http://www.hndt.com/h5/fmlive';
const chanelList = [
	{
		title: '',
		cid: 0,
		url: ``
	},
	{
		title: '新闻广播',
		cid: 1,
		url: `${BaseUrl}/live/index.html?cid=1`
	},
	{
		title: '经济广播',
		cid: 2,
		url: `${BaseUrl}/live/index.html?cid=2`
	},
	{
		title: '交通广播',
		cid: 3,
		url: `${BaseUrl}/live/index.html?cid=3`
	},
	{
		title: '戏曲广播·娱乐976',
		cid: 4,
		url: `${BaseUrl}/live/index.html?cid=4`
	},
	{
		title: '魅力881·音乐广播',
		cid: 5,
		url: `${BaseUrl}/live/index.html?cid=5`
	},
	{
		title: '农村广播',
		cid: 6,
		url: `${BaseUrl}/live/index.html?cid=6`
	},
	{
		title: '影视广播·My Radio',
		cid: 7,
		url: `${BaseUrl}/live/index.html?cid=7`
	},
	{
		title: '旅游广播·私家车999',
		cid: 8,
		url: `${BaseUrl}/live/index.html?cid=8`
	},
	{
		title: '教育广播·UPRADIO',
		cid: 9,
		url: `${BaseUrl}/live/index.html?cid=9`
	},
	{
		title: '信息广播·乐龄1056',
		cid: 10,
		url: `${BaseUrl}/live/index.html?cid=10`
	}
];

const cid = parseInt(getQueryString('cid')); //频率id
console.log(getQueryString('cid'));
function getQueryString(query) {
	var qs = location.search.substr(1), // 获取url中"?"符后的字串
		args = {}, // 保存参数数据的对象
		items = qs.length ? qs.split('&') : [], // 取得每一个参数项,
		item = null,
		len = items.length;

	for (var i = 0; i < len; i++) {
		item = items[i].split('=');
		var name = decodeURIComponent(item[0]),
			value = decodeURIComponent(item[1]);
		if (name) {
			args[name] = value;
		}
	}
	return args[query];
}
module.exports = chanelList[cid];
