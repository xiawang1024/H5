<template>
  <div class="program">
    <img src="http://www.hndt.com/h5/yule/img/1.jpg" alt="" class="img">
    <img src="http://www.hndt.com/h5/yule/img/2.jpg" alt="" class="img">
  </div>
</template>

<script>
export default {
  name:'program'
}
</script>


<style lang="stylus" scoped>
.program
    position absolute
    top 290px
    left 0
    right 0
    bottom 0px
    overflow auto
    -webkit-overflow-scrolling: touch
    padding 0px 15px 100px
    box-sizing border-box
    .img
        width 100%
        margin-top 10px
    .title
        line-height 1.6
        font-size 22px
    .desc
        margin-top 8px
        line-height 1.8125
        text-indent 2em
        font-size 18px
        color #333
</style>

