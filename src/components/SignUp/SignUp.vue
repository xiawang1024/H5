<template>
    <section class="signup">        
        <div class="logo ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.75s" swiper-animate-delay="0.75s"></div>
        <div class="left ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.75s" swiper-animate-delay="0s"></div>
        <div class="right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.75s" swiper-animate-delay="0s"></div>
        <div class="title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.75s" swiper-animate-delay="1s"></div>
        <section class="container ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.75s" swiper-animate-delay="0.25s">
            <h2 class="name ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.75s" swiper-animate-delay="0.25s">[报名参加]</h2>
            <div v-if="!isShowToast">
                <form class="signup-form ani" ref="form" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.75s" swiper-animate-delay="0.25s">
                    <input type="text" class="ipt" placeholder="姓名" v-model="username" @focus="scrollIntoView">
                    <input type="tel" class="ipt" placeholder="电话" v-model="mobile">
                    <input type="text" class="ipt" placeholder="职业" v-model="work">
                    <input type="tel" class="ipt" placeholder="人数" v-model="personNum">
                </form>
                <button class="signUpBtn ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.75s" swiper-animate-delay="0.5s" @click="postUser">提交</button>
            </div>
            <div class="toast animated fadeIn" v-else>
                <div class="text-wrap">
                    <p class="text-1">
                        感谢您对My Radio的关注和支持，我们已收到您的信息。 
                    </p>
                    <p class="text-2">
                        {{msg}}
                    </p>
                </div>
                <button class="okBtn" @click="closeToast">完成</button>
            </div>
            <div class="qrcode-wrap ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.85s" swiper-animate-delay="0.75s">
                <p class="text">敬请关注</p>
                <img src="./qrcode.png" alt="" class="qrcode">
            </div>
        </section>        
        
    </section>
</template>
<script>
import { postUserInfo, checkOpenId } from 'api/index'
import Toast from 'v-toast'

const TEXT_1 = '活动将于4月22日下午15点开始签到，建议着正装出席。如遇突发状况不能前来，请提前告知我们，谢谢。'
const TEXT_2 = '由于活动名额有限，工作人员会按先后顺序和您电话沟通是否报名成功，请保持电话畅通，谢谢。详情可于工作日咨询0371-65887900。'

export default {
    name:'signup',
    data() {
        return {
            isShowToast:false,
            msg:TEXT_2,            
            username:'',
            mobile:'',
            work:'',
            personNum:'',
            openId:'123'
        }
    },
    mounted() {
        this.openId = this._getQueryString('openId')
    },
    methods:{
        scrollIntoView() {
            setTimeout(() => {
                console.log(this.$refs['form'])
                // this.$refs['form'].scrollIntoView(true)
            },100)
        },
        _getQueryString(name) {
            let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            let r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        },
        _checkPhone(phone) { 
            if(!(/^1[34578]\d{9}$/.test(phone))){                 
                return false; 
            }else{
                return true
            }
        },
        closeToast() {
            this.isShowToast = false
        },
        _clearfIpt() {
            this.username = ''
            this.mobile = ''
            this.work = ''
            this.personNum = ''
        },
        postUser() {
           
            if(!this.username) {
                Toast.warn('请填写您的姓名')
                return 
            }

            if(!this.mobile) {
                Toast.warn('请填写您的电话')
                return 
            }

            if(!this._checkPhone(this.mobile)) {
                Toast.warn('请填写正确的手机号')
                return 
            }

            if(!this.work) {
                Toast.warn('请填写您的职业')
                return 
            }

            if(!this.personNum) {
                Toast.warn('请填写您的随从人数')
                return 
            }

            postUserInfo(this.username, this.mobile, this.work, this.personNum, this.openId).then((res) => {
                
                let data = res.data
                if(data.status == 1) {
                   
                    Toast.info({
                        message:'玩命提交中...',
                        duration:1000
                    })

                    setTimeout(() => {
                        this.isShowToast = true
                        this._clearfIpt()
                    }, 1250);
                    
                }else{
                    Toast.error({
                        message:'报名失败，该微信已经报名！',
                        duration:2000
                    })
                    setTimeout(() => {
                        this.isShowToast = true
                    }, 2250);                    
                }                
            }).catch(() => {
                Toast.error('报名失败，请重新提交！')                
            })                        
        }
    }
}
</script>

<style lang="stylus" scoped>
.signup
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    width 100%
    height 100%
    background #1f1a17 url('../common/bg.png') top center no-repeat
    background-size contain
    .title
        top 560px
    .container
        position absolute
        top 100px
        left 50px
        right 50px
        bottom 90px        
        background rgba(0,0,0,0.6)
        .name
            position absolute
            top 50px
            left 0
            width 100%
            text-align center
            font-size 64px
            color #ffffff
            letter-spacing 10px
        .toast
            position absolute
            top 200px
            left 115px
            width 420px
            .text-wrap
                width 420px
                background #ffffff
                padding 60px 30px
                border 1px solid #e4007e
                border-radius 6px
                line-height 2
                font-size 20px
                color #666
                box-sizing border-box
            .okBtn
                margin-top 26px 
                width 420px
                height 60px
                line-height 60px
                border-radius 6px
                font-size 30px
                color #ffffff
                outline none
                border none
                background #e4007e
        .signup-form
            position absolute
            top 160px
            left 115px
            width 420px
            .ipt
                display inline-block
                width 100%
                height 60px
                line-height 60px
                margin-bottom 20px
                border 1px solid #e4007e
                border-radius 6px
                outline none
                background #fff
                box-sizing border-box
                font-size 24px
                color #000
                padding-left 26px
        .signUpBtn
            position absolute
            top 550px
            left 115px
            width 420px
            height 60px
            line-height 60px
            box-sizing border-box
            border-radius 6px
            outline none
            border none 
            background #e4007e
            font-size 30px
            color #fff
        .qrcode-wrap
            position absolute
            top 680px
            left 224px
            width 202px
            .text
                width 100%
                margin-bottom 20px 
                text-align center
                font-size 32px
                color #ffffff
                letter-spacing 7px
            .qrcode
                display block
                width 202px
</style>
