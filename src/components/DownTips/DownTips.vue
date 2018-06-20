<template>
 <div class="down-tips" v-show="isShow">
   <div class="ctrl">
     <a href="http://www.hndt.com/app/download/index.html" class="downlink">下载APP</a>
     <span class="icon-close" @click="isShow=false"></span>
   </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       isShow:true
     }
   },
   components: {

   }
 }
</script>

<style lang="stylus" scoped>
@import '~base/stylus/mixin';

.down-tips {
  position: absolute;
  z-index: 1024;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  color: #fff;
  background: url('./logo.png') left 30px center no-repeat rgba(0, 0, 0, 0.6);
  background-size: auto 60px;

  // opacity: 0.8;
  .ctrl {
    position: absolute;
    right: 30px;
    top: 15px;
    height: 50px;

    .downlink {
      display: inline-block;
      padding: 10px 20px;
      border-radius: 8px;
      color: #fff;
      background: #0081dc;
    }

    .icon-close {
      position: relative;
      margin-left: 16px;
      display: inline-block;
      width: 18px;
      height: 18px;
      padding: 10px;
      background: url('./close.png') center center no-repeat;
      background-size: cover;
      box-sizing: border-box;
      extend-click();
    }
  }
}
</style>
