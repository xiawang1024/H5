<template>
    <div class="comment">
        <scroll
                class="list-wrap"
                ref="scroll"
                :data="commentList"
                :pullDownRefresh = "pullDownRefresh"
                :pullUpLoad="pullUpLoad"
                @pullingDown = "onPullingDown"
                @pullingUp="onPullingUp"
            > 
            <div class="list" v-for="item of commentList" :key="item.id">
                <img :src="item.icon" alt="" class="avatar">
                <div class="text-wrap">
                    <span class="time">{{item.create_time | timeStamp2LocalTime}}</span>
                    <h5 class="name">{{item.creater}}</h5>
                    <div class="content">
                        <p v-if="item.file_type == 'TEXT'" v-html="item.content"></p>                            
                        <img class="img" v-if="item.file_type == 'PIC'" :src="item.content" />
                    </div>
                </div>
            </div>     
        </scroll>
        <send-msg @sendMsg="onSendMsg"></send-msg>
    </div>
</template>


<script>
import Scroll from 'common/scroll/scroll'
import SendMsg from '../SendMsg/SendMsg'

import { postMsg } from 'api/index'

export default {
    name:'comment',
    components:{
       Scroll,
       SendMsg
    },
    data() {
        return {
            commentList:[],
            pullDownRefresh:{
				txt:'更新成功',
                stop:40,
                threshold:60
            },
            pullUpLoad:{
                txt:{
                    more:'玩命加载中',
                    noMore:'没有更多数据'
                },
                threshold:0
            },
            page:1,
            pages:0,
            openid:''
        }
    },
    created() {
        this._fetchData(1)
    },
    mounted() {
        this.openid = this._getQueryString('openId')

        setInterval(() => {
            this._fetchData(1)
        },30000)
    },
    methods:{
        _fetchData(page) {
            postMsg(this.openid, '', page).then((res) => {
                // console.log(res)
                let data = res.data
                if(data.success) {
                    this.commentList = data.result.list
                    this.pages = data.result.pages
                }
            }).catch((err) => {
                console.log(err)
            })
        },
        _getQueryString(name) {
            let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            let r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        },
        onSendMsg() {
            // alert('fasongxinxi')
            this._fetchData(1)
        },
        onPullingDown() {
            // 模拟更新数据
            // console.log('pulling down and load data')
            // setTimeout(() => {
           
            // if (Math.random() > 0.5) {
            //     // 如果有新数据
            //     this.commentList.unshift(new Date())
            // } else {
            //     // 如果没有新数据
            //     this.$refs.scroll.forceUpdate()
            // }
            // }, 2000)
            this._fetchData(1)
        },
        onPullingUp() {
            // 更新数据
            console.log('pulling up and load data')

            this.page++;
            if(this.page <= this.pages) {
                postMsg(this.openid, '', this.page).then((res) => {
                    // console.log(res)
                    let data = res.data
                    if(data.success) {
                        this.commentList = this.commentList.concat(data.result.list) 
                        this.pages = data.result.pages
                    }else{
                        this.$refs.scroll.forceUpdate()
                    }
                }).catch((err) => {
                    console.log(err)
                })
            }else{
                 this.$refs.scroll.forceUpdate()
            }
            // setTimeout(() => {
           
            // if (Math.random() > 0.5) {
            //     // 如果有新数据
            //     let newPage = []
            //     for (let i = 0; i < 10; i++) {
            //     newPage.push(this.itemIndex)
            //     }

            //     this.commentList = this.commentList.concat(newPage)
            // } else {
            //     // 如果没有新数据
            //     this.$refs.scroll.forceUpdate()
            // }
            // }, 1500)
        }

    }
}
</script>


<style lang="stylus" scoped>
.comment
    position absolute
    top 240px
    left 0
    right 0
    bottom 0px
    .list-wrap
        position absolute
        bottom 60px
        .list
            display flex
            width 100%
            padding 20px            
            box-sizing border-box
            border-bottom 1px dashed #eee
            .avatar 
                display block
                width 40px
                height 40px
                flex 0 0 40
                border-radius 50%
            .text-wrap
                position relative
                flex 1
                margin-left 15px
                padding-right 10px
                box-sizing border-box
                .time
                    position absolute
                    top 0
                    right 0
                    font-size 12px
                    color #999999
                .name
                    font-size 15px
                    font-weight 500
                    color #666666
                .content
                    margin-top 10px
                    line-height 1.6125
                    font-size 16px
                    color #000000
                    word-wrap:break-word
                    word-break:break-all
                    .img
                        display inline-block
                        height 300px
                        max-width 400px                        
                        border-radius 20px
</style>
