<template>
    <div class="page1">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <!-- <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div> -->
        <div class="top-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <div class="bottom-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div>
        <div class="logo ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div>
        <div class="g-body">
          <div class="m-title ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div>
          <div class="m-text-wrap ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.3s" swiper-animate-delay="0.5s">
            <p class="text">
              报名参演节目
            </p>
            <p class="text">
              乐曲联奏
            </p>
            <p class="text">
              《法国民歌、告诉罗娣阿姨、五月之歌、快板》
            </p>
            <p class="text">
              （合奏）
            </p>
          </div>
          <form class="m-form ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1.3s" swiper-animate-delay="1s">
            <p class="u-label">
              <span class="key">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
              <input type="text" class="val" v-model="name">
            </p>
            <p class="u-label">
              <span class="key">指导老师：</span>
              <input type="text" class="val" v-model="description">
            </p>
            <p class="u-label">
              <span class="key">琴&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：</span>
              <!-- <input type="text" class="val" v-model="age"> -->
              <span class="val" @click="ageSelect">{{age}}</span>
            </p>
            <p class="u-label">
              <span class="key">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：</span>
              <input type="tel" class="val" v-model="mobile">
            </p>
          </form>
          <button class="submit-btn ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1.3s" swiper-animate-delay="1.25s"  @click="postData">提交</button>
        </div>
    </div>
</template>

<script>
import weui from 'weui.js';
import { postUserInfo } from '@/api'
import { WeChat } from 'weChat/util'
const weChat = new WeChat()

const AGE_LIST = [
  {
    label:'3个月',
    value:0
  },
   {
    label:'6个月',
    value:1
  },
   {
    label:'1年',
    value:2
  },
   {
    label:'2年',
    value:3
  },
   {
    label:'3年',
    value:4
  },
   {
    label:'4年',
    value:5
  },
   {
    label:'5年',
    value:6
  },
   {
    label:'5年以上',
    value:7
  },
]
export default {
  name:'page1',
  data() {
    return {
      name:'',
      description:'',
      age:'',
      mobile:''
    }
  },
  mounted() {
    if(weChat.getStorage('WXHNDTOPENID') == null) {
      this.isNotWeixin = true
    }else{
      this.isNotWeixin = false
    }
  },
  methods:{
    ageSelect() {

      weui.picker(AGE_LIST,{
        container:'body',
        defaulstValue:[0],
        onChange:(result) => {
           console.log(result)
           this.age = result[0].label
        },
        onConfirm:(result) => {
          console.log(result)
          this.$nextTick(() => {

            this.age = result[0].label
          })
        }
      })
    },
    postData() {
      if(!this.name){
        weui.topTips('请填写姓名');
        return
      }
      if(!this.description){
        weui.topTips('请填写指导老师');
        return
      }
      if(!this.age){
        weui.topTips('请选择琴龄');
        return
      }
      if(!this.mobile){
        weui.topTips('请填写手机号');
        return
      }
      let openId = ''
      if(this.isNotWeixin) {
        openId = ''
      }else {
        let userInfo = JSON.parse(weChat.getStorage('WXHNDTOPENID'))
        openId = userInfo.openid
      }
      postUserInfo(this.name,this.description,this.age,this.mobile,'936',openId).then(res => {
        weui.toast('提交成功！')
        setTimeout(() => {
          this.name = ''
          this.description = ''
          this.age = ''
          this.mobile = ''
        },20)
      })
    }
  }
}
</script>


<style lang="stylus" scoped>
$color = #e60012;

.page1 {
  width: 100%;
  height: 100%;
  text-align: center;
  background: url('../../assets/bg.png') center center no-repeat #d9f7fc;
  background-size: contain;

  .top-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 173px;
    height: 181px;
    background: url('./icon-tp.png') center center no-repeat;
    background-size: cover;
  }

  .bottom-left {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 218px;
    height: 189px;
    background: url('./icon-bt-lt.png') center center no-repeat;
    background-size: cover;
  }

  .bottom-right {
    position: absolute;
    right: 0;
    bottom: 0px;
    width: 340px;
    height: 436px;
    background: url('./icon-bt.png') center center no-repeat;
    background-size: cover;
  }

  .logo {
    position: absolute;
    top: 32px;
    left: 22px;
    width: 120px;
    height: 114px;
    background: url('./icon-logo.png') center center no-repeat;
    background-size: cover;
  }

  .g-body {
    .m-title {
      position: absolute;
      top: 140px;
      left: 0;
      width: 100%;
      height: 161px;
      background: url('./icon-title.png') center center no-repeat;
      background-size: contain;
    }

    .m-text-wrap {
      position: absolute;
      top: 350px;
      left: 0;
      width: 100%;
      text-align: center;

      .text {
        font-size: 30px;
        margin-bottom: 25px;
      }
    }

    .m-form {
      position: absolute;
      top: 600px;
      left: 175px;
      width: 400px;

      .u-label {
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        font-size: 28px;
        border-bottom: 1px solid #00270a;
        margin-bottom: 25px;

        .key {
          display: inline-block;
          flex: 0 0 150px;
          width: 140px;
          text-align: justify;
        }

        .val {
          flex: 0 0 250px;
          width: 250px;
          height: 40px;
          text-align: left;
          border: none;
          outline: none;
          background: none;
        }
      }
    }

    .submit-btn {
      position: absolute;
      top: 900px;
      left: 320px;
      width: 110px;
      height: 60px;
      border-radius: 8px;
      font-size: 28px;
      text-align: center;
      color: #fff;
      background: #0f3d00;
    }
  }
}
</style>

