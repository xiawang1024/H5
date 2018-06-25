<template>
    <div class="comment">
        <div class="online-people">
            <i class="icon-people"></i>
            <span class="online-num">浏览人数：{{online}}</span>
        </div>
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
                <!-- {{item.comment.icon}} -->
                <img :src="item.comment.icon || defaultAvatar" alt="" class="avatar">
                <div class="text-wrap">
                    <span class="time">{{item.comment.create_time | timeStamp2LocalTime}}</span>
                    <h5 class="name">{{item.comment.creater}}</h5>
                    <div class="content">
                        <p v-if="item.comment.file_type == 'TEXT'" v-html="item.comment.content"></p>
                        <img class="img" width="300" v-if="item.comment.file_type == 'PIC'" :src="item.comment.content" />
                    </div>
                    <div class="anchor-reply" v-show="item.commentChildList && item.commentChildList.length > 0">
                        <span class="anchor">主播回复:</span>
                        <div class="child-list-wrap">
                            <div class="child-list" v-for="childItem of item.commentChildList" :key="childItem.create_time">
                                {{childItem.content}}
                            </div>
                        </div>
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
import weui from 'weui.js'
import { postMsg } from 'api/index'

export default {
    name:'comment',
    components:{
       Scroll,
       SendMsg
    },
    data() {
        return {
            defaultAvatar:'http://www.hndt.com/res/logo_300.png',
            commentList:[],
            online:'',
            pullDownRefresh:{
				        txt:'更新成功',
                stop:40,
                threshold:70
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
        this.loading = weui.loading('努力加载中...');
        this._fetchData(1)
        // this._fetchOnline(-1)
        // postMsg(-2)
    },
    mounted() {

        // setInterval(() => {
        //     this._fetchOnline()
        // },15000)

        setInterval(() => {
            this._fetchData(1)
        },60000)
    },
    methods:{
        _fetchOnline() {
            postMsg(1).then((res) => {
                // console.log(res)
                let data = res.data
                if(data.success) {
                    // this.commentList = data.result.list
                    this.pages = data.result.pages
                    this.online = data.message
                }
            }).catch((err) => {
                console.log(err)
            })
        },
        _fetchData(page) {
            postMsg(page).then((res) => {
                // console.log(res)
                let data = res.data
                if(data.success) {
                    this.loading.hide()
                    this.commentList = data.result.list
                    this.pages = data.result.pages
                    this.online = data.message
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
            this._fetchData(1)
        },
        onPullingUp() {
            // 更新数据
            console.log('pulling up and load data')

            this.page++;
            if(this.page <= this.pages) {
                postMsg(this.page).then((res) => {
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
        }
    }
}
</script>


<style lang="stylus" scoped>
.comment {
  position: absolute;
  top: 502px;
  left: 0;
  right: 0;
  bottom: 0px;

  .online-people {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    padding-left: 40px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;

    .icon-people {
      vertical-align: middle;
      display: inline-block;
      width: 28px;
      height: 36px;
      background: url('./icon-people.png') center center no-repeat;
      background-size: contain;
    }

    .online-num {
      vertical-align: middle;
      color: #666;
    }
  }

  .list-wrap {
    position: absolute;
    top: 40px;
    bottom: 90px;

    .list {
      display: flex;
      width: 100%;
      padding: 40px;
      box-sizing: border-box;
      border-bottom: 1px dashed #eee;

      .avatar {
        display: block;
        width: 80px;
        height: 80px;
        flex: 0 0 80;
        border-radius: 50%;
      }

      .text-wrap {
        position: relative;
        flex: 1;
        margin-left: 30px;
        padding-right: 20px;
        box-sizing: border-box;

        .time {
          position: absolute;
          top: 0;
          right: 0;
          font-size: 24px;
          color: #999999;
        }

        .name {
          font-size: 30px;
          font-weight: 500;
          color: #666666;
        }

        .content {
          margin-top: 20px;
          line-height: 1.6125;
          font-size: 32px;
          color: #000000;
          word-wrap: break-word;
          word-break: break-all;

          .img {
            display: inline-block;
            // height: 600px;
            width: 400px;
            border-radius: 40px;
          }
        }

        .anchor-reply {
          width: 100%;
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px dashed #eee;

          .anchor {
            font-size: 30px;
            color: #333;
          }

          .child-list-wrap {
            width: 100%;
            margin-top: 16px;

            .child-list {
              text-indent: 2em;
              line-height: 1.8;
            }
          }
        }
      }
    }
  }
}
</style>
