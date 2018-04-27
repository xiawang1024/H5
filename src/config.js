

const BaseUrl = 'http://www.hndt.com/h5/fmlive'
const chanelList = [
    {   
        title:'',
        cid:0,
        url:``
    },
    {   
        title:'新闻广播',
        cid:1,
        url:`${BaseUrl}/fm1023/index.html`
    },
    {   
        title:'经济广播',
        cid:2,
        url:`${BaseUrl}/fm1032/index.html`
    },
    {   
        title:'交通广播',
        cid:3,
        url:`${BaseUrl}/fm1041/index.html`
    },
    {   
        title:'戏曲广播·娱乐976',
        cid:4,
        url:`${BaseUrl}/fm976/index.html`
    },
    {   
        title:'魅力881·音乐广播',
        cid:5,
        url:`${BaseUrl}/fm881/index.html`
    },
    {   
        title:'农村广播',
        cid:6,
        url:`${BaseUrl}/fm1074/index.html`
    },
    {   
        title:'影视广播·My Radio',
        cid:7,
        url:`${BaseUrl}/fm900/index.html`
    },
    {   
        title:'旅游广播·私家车999',
        cid:8,
        url:`${BaseUrl}/fm999/index.html`
    },
    {   
        title:'教育广播·UPRADIO',
        cid:9,
        url:`${BaseUrl}/fm1066/index.html`
    },
    {   
        title:'信息广播·乐龄1056',
        cid:10,
        url:`${BaseUrl}/fm1056/index.html`
    }
]

const cid = 6 //频率id

module.exports = chanelList[cid]