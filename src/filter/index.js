import Vue from 'vue'

Vue.filter('timeStamp2LocalTime',function(val) {
    return timeStampToDate(val)
})

function getLocalTime(nS) {     
    return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,' ');     
} 

function timeStampToDate(nS) {
    let time = new Date(parseInt(nS))
    let year = time.getFullYear()
    let month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1): time.getMonth() + 1;
    let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
    let dateStr = year + "-" + month + "-" + day;
    

    let h = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    let m = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    let s = time.getSeconds();
    return dateStr + ` ${h}:${m}:${s}`
    
}