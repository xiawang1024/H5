<template>
  <div class="drag">
    <div id="block" ref="logoBox">
      <img src="./logo.png" alt class="img">
    </div>
  </div>
</template>

<script>
import Draggabilly from "draggabilly";
import weui from "weui.js";

export default {
  name: "drag",
  created() {},
  mounted() {
    this.dragInit();
    this.winResize();
  },
  methods: {
    click() {
      let _this = this;
      weui.dialog({
        title: "云上南阳APP",
        content: "下载云上南阳APP",
        className: "custom-classname",
        buttons: [
          {
            label: "取消",
            type: "default"
          },
          {
            label: "确定",
            type: "primary",
            onClick: function() {
              let url = "";
              if (_this.isIos()) {
                url = "https://itunes.apple.com/cn/app/id1448648481?mt=8";
              } else {
                url = "https://www.pgyer.com/OK55";
              }
              window.location = url;
            }
          }
        ]
      });
    },
    isIos() {
      let u = navigator.userAgent;

      return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    },
    winResize() {
      window.onresize = () => {
        this.dragInit();
      };
    },
    dragInit() {
      let logoBox = this.$refs.logoBox;
      let draggie = new Draggabilly(logoBox, {
        containment: "body"
      });
      let screenWidth = document.documentElement.clientWidth;
      let screenHeight = document.documentElement.clientHeight;
      let logoBoxWidth = logoBox.offsetWidth + 10;
      draggie.setPosition(screenWidth - logoBoxWidth, screenHeight / 2 + 50);
      draggie.on("dragEnd", (event, pointer) => {
        let { pageX, pageY } = pointer;
        if (pageX < screenWidth / 2) {
          draggie.setPosition(10, pageY);
        } else {
          draggie.setPosition(screenWidth - logoBoxWidth, pageY);
        }
      });
      draggie.on("staticClick", (event, pointer) => {
        this.click();
      });
    }
  }
};
</script>

<style lang='stylus' scoped>
#block {
  position: absolute;
  z-index: 102400;
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
