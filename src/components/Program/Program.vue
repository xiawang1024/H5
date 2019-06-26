<template>
  <div class="program">
    <ul v-if="backList && backList.length>0" class="list-wrap">
      <li class="item" v-for="item of backList" :key="item.id" @click="goToLive(item.video)">
        <div class="img-wrap">
          <img :src="item.icon" alt class="img">
        </div>
        <div class="text-wrap">
          <h3 class="title">{{item.title}}</h3>
          <p class="desc">{{item.desc}}</p>
        </div>
      </li>
      <li class="more-txt" @click="fetchMore">
        <p v-show="isMore" class="more">点击更多</p>
        <p v-show="!isMore" class="no-more">没有更多数据了</p>
      </li>
    </ul>
    <div v-else class="no-list">{{msg}}</div>
  </div>
</template>

<script>
import { getLiveList } from "api/index";
import weui from "weui.js";
import Bus from "base/js/bus";
export default {
  name: "program",
  data() {
    return {
      backList: [],
      isMore: true,
      msg: "请稍等，加载中..."
    };
  },
  mounted() {
    this.page = 1;
    this.fetchData(this.page);
  },
  methods: {
    fetchData(page) {
      let loading = weui.loading("努力加载中...");
      getLiveList(page)
        .then(res => {
          // loading.hide();
          let { page, pages, list } = res.data;
          this.pages = pages;
          // this.backList = [this.backList,...this.filterHander(list)];
          this.backList = this.backList.concat(this.filterHander(list));

          if (this.backList.length == 0) {
            this.msg = "暂无回看数据，小编正在努力增加中";
          }
        })
        .catch(() => {
          weui.alert("网络超时，请刷新页面");
        });
    },
    filterHander(list) {
      let arr = list.filter(item => {
        let { status } = item;
        if (status.indexOf("c") !== -1) {
          return true;
        } else {
          return false;
        }
      });
      return arr;
    },
    fetchMore() {
      let page = this.page;
      ++page;

      if (page <= this.pages) {
        this.page = page;
        this.fetchData(page);
      } else {
        this.isMore = false;
      }
    },
    goToLive(src) {
      Bus.$emit("backPlay", src);
      // let url = `http://a.weixin.hndt.com/h5/1066/liveroom/1502/index.html?id=${id}`;
      // window.location.href = url;
    }
  }
};
</script>


<style lang="stylus" scoped>
.program {
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;

  .list-wrap {
    width: 100%;
    height: 100%;
    padding: 30px 20px;
    box-sizing: border-box;

    .item {
      display: flex;
      width: 100%;
      margin-bottom: 40px;
      box-sizing: border-box;

      .img-wrap {
        flex: 0 0 260px;
        width: 260px;

        .img {
          width: 100%;
          height: 146px;
        }
      }

      .text-wrap {
        margin-left: 20px;
        flex: 0 0 430px;
        width: 430px;
        text-align: left;

        .title {
          width: 100%;
          margin-top: 0px;
          font-size: 30px;
          line-height: 1.25;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .desc {
          margin-top: 10px;
          line-height: 1.25;
          font-size: 28px;
          color: #555;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }

    .more-txt {
      width: 100%;
      padding: 20px 0 40px;
      text-align: center;
      font-size: 34px;
      color: #333;
    }
  }

  .no-list {
    width: 100%;
    margin-top: 100px;
    text-align: center;
    font-size: 32px;
  }
}
</style>

