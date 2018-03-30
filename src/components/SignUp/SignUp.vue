<template>
    <section class="signup">        
        <div class="logo ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div>
        <section class="container">
            <h2 class="name">[报名参加]</h2>
            <form class="signup-form">
                <input type="text" class="ipt" placeholder="姓名" v-model="username">
                <input type="text" class="ipt" placeholder="电话" v-model="mobile">
                <input type="text" class="ipt" placeholder="职业" v-model="work">
                <input type="text" class="ipt" placeholder="人数" v-model="personNum">
            </form>
            <button class="signUpBtn" @click="postUser">提交</button>
        </section>        
        
    </section>
</template>
<script>
export default {
    name:'signup',
    data() {
        return {
            username:'',
            mobile:'',
            work:'',
            personNum:''
        }
    },
    methods:{
        postUser() {
            alert('nihao')
            if(!this.username) {
                return 
            }

            if(!this.mobile) {
                return 
            }

             if(!this.work) {
                return 
            }

             if(!this.personNum) {
                return 
            }

            
            
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
    .container
        position absolute
        top 120px
        left 50px
        right 50px
        bottom 90px        
        background rgba(0,0,0,0.6)
        .name
            position absolute
            top 125px
            left 0
            width 100%
            text-align center
            font-size 64px
            color #ffffff
            letter-spacing 10px
        .signup-form
            position absolute
            top 282px
            left 115px
            width 420px
            .ipt
                display inline-block
                width 100%
                height 60px
                line-height 60px
                margin-bottom 30px
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
            top 640px
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
</style>
