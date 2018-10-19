<template>
  <div class="program">
    <img src="./01.jpg" alt="" class="img">
    <img src="./02.jpg" alt="" class="img">
  </div>
</template>

<script>
export default {
  name: 'program'
}
</script>


<style lang="stylus" scoped>
.program {
  position: absolute;
  top: 502px;
  left: 0;
  right: 0;
  bottom: 0px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  // padding: 30px 60px 200px;
  box-sizing: border-box;

  .img {
    display: block;
    width: 100%;
  }

  .list-box {
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
    overflow: hidden;

    .title {
      font-size: 30px;
      color: #e60811;
    }

    .list-wrap {
      padding: 15px 0;
      font-size: 26px;
      color: #666;

      .list {
        line-height: 1.8;
        text-indent: 15px;

        &:first-child {
          text-indent: 0;
          color: #000;
        }
      }
    }
  }
}
</style>

