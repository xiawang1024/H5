<!--
 * @Description:
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-11-01 15:11:52
 * @LastEditTime: 2019-11-01 17:58:18
 -->
<template>
  <div class="drag">
    <div id="block" ref="logoBox">
      <img src="./logo.png" alt class="img" />
    </div>
  </div>
</template>

<script>
import Draggabilly from 'draggabilly'
import weui from 'weui.js'

export default {
  name: 'drag',
  created() { },
  mounted() {
    this.dragInit()
    this.winResize()
  },
  methods: {
    click() {
      weui.dialog({
        title: '下载大象新闻APP',
        content: '脚踏实地做新闻',
        className: 'custom-classname',
        buttons: [
          {
            label: '取消',
            type: 'default'
          },
          {
            label: '确定',
            type: 'primary',
            onClick: function () {
              window.location = 'https://cmsres.dianzhenkeji.com/zhlfres/dxnew/app/yqm//#/webDownload'
            }
          }
        ]
      })
    },
    winResize() {
      window.onresize = () => {
        this.dragInit()
      }
    },
    dragInit() {
      let logoBox = this.$refs.logoBox
      let draggie = new Draggabilly(logoBox, {
        containment: 'body'
      })
      let screenWidth = document.documentElement.clientWidth
      let screenHeight = document.documentElement.clientHeight
      let logoBoxWidth = logoBox.offsetWidth + 10
      draggie.setPosition(screenWidth - logoBoxWidth, screenHeight / 2 + 50)
      draggie.on('dragEnd', (event, pointer) => {
        let { pageX, pageY } = pointer
        if (pageX < screenWidth / 2) {
          draggie.setPosition(10, pageY)
        } else {
          draggie.setPosition(screenWidth - logoBoxWidth, pageY)
        }
      })
      draggie.on('staticClick', (event, pointer) => {
        this.click()
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
#block {
  position: absolute;
  z-index: 1024;
  width: 100px;
  height: 100px;
  border: 2px solid orange;
  border-radius: 50%;
  background: #fff;
  opacity: 0.75;
  overflow: hidden;
  box-shadow: 0 6px 10px -2px rgba(0, 0, 0, 0.2), 0 12px 20px 0 rgba(0, 0, 0, 0.14), 0 2px 36px 0 rgba(0, 0, 0, 0.12);

  &.is-pointer-down {
    border: 2px solid #e54428;
    opacity: 1;
  }

  .img {
    width: 100%;
    height: 100%;
  }
}
</style>
