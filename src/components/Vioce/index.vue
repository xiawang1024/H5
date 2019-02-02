<template>
  <div class="vioce-wrap">
    <div
      :class="[{'ctrl-wrap':true},isPlay]"
      @click="play"
    >

    </div>
    <div class="desc-wrap">
      <div class="name">河南农村产权制度改革</div>
      <div class="process-wrap">
        <div
          class="process"
          id="process"
        ></div>
      </div>
      <div class="other-wrap">
        <div class="origin">来源：央广网</div>
        <div class="total-tiem">5:16</div>
      </div>
    </div>
    <audio
      src="http://www.hndt.com/h5/xinwen/audio/xinwen.mp3"
      hidden
      id='voice'
      @timeupdate="timeupdate"
    ></audio>
  </div>
</template>


<script>
export default {
  name: "VioceWrap",
  data() {
    return {
      isPlay: "play"
    };
  },
  mounted() {
    this.voice = document.getElementById("voice");
  },
  methods: {
    play() {
      console.log(this.voice.paused);
      if (this.voice.paused) {
        this.voice.play();
        this.isPlay = "pause";
      } else {
        this.voice.pause();
        this.isPlay = "play";
      }
    },
    timeupdate(e) {
      let { currentTime, duration } = e.target;
      let percent = (currentTime / duration) * 100;
      document.getElementById("process").style.width = `${percent}%`;
    }
  }
};
</script>

<style lang="stylus" scoped>
.vioce-wrap {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 30px 0;
  padding: 0 100px;
  box-sizing: border-box;

  .ctrl-wrap {
    flex: 0 0 50px;
    width: 50px;
    height: 50px;

    &.play {
      background: url('./icon-play.png') center center no-repeat;
      background-size: cover;
    }

    &.pause {
      background: url('./icon-pause.png') center center no-repeat;
      background-size: cover;
    }
  }

  .desc-wrap {
    margin-left: 24px;
    width: 100%;
    text-align: left;
    font-size: 24px;

    .name {
      font-size: 26px;
    }

    .process-wrap {
      position: relative;
      margin: 12px 0;
      width: 100%;
      height: 3px;
      background: #eee;

      .process {
        position: absolute;
        top: 0;
        left: 0;
        height: 3px;
        width: 0%;
        background: #a14df8;
      }
    }

    .other-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
      color: #bbb;
    }
  }
}
</style>


