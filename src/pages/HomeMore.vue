<template>
  <div>
    <div class="mui-content">
      <div class="homelistTop">
        <span>{{this.$route.params.title}}</span>
      </div>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <ul class="mui-table-view mui-grid-view">
            <router-link
              :to="'/home/songPlay/'+item.song_id"
              tag="li"
              class="mui-table-view-cell mui-media mui-col-xs-6"
              v-for="item in HomeMusicList"
              :key="item.song_id"
            >
              <a href="#">
                <img class="mui-media-object" :src="item.pic_huge" />
                <div class="mui-media-body">{{item.title}}</div>
              </a>
            </router-link>
          </ul>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import { getTodayMusicList } from "../api/music.js";
export default {
  data() {
    return {
      HomeMusicList: [],
      size: 10,
      loading: false,
      finished: false,
      refreshing: false
    };
  },
  created() {
    // debugger;
  },
  methods: {
    onLoad() {
      // setTimeout(() => {
      if (this.refreshing) {
        this.HomeMusicList = [];
        this.refreshing = false;
      }
      setTimeout(() => {
        getTodayMusicList(this.$route.params.type, this.size)
          .then(res => {
            // debugger;
            console.log(res.song_list);
            // this.HomeMusicList = res.song_list
            this.HomeMusicList = res.song_list;
            // debugger;
            this.size += 5;
            console.log(  this.size)
            this.loading = false;
          })
          .catch();
      }, 1000);
      // this.loading = false;

      if (this.HomeMusicList.length >= 100) {
        this.finished = true;
      }
      // }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  }
};
</script>
<style scoped>
.mui-content {
  padding-top: 15px;
  background: white;
}
.mui-content ul {
  padding: 20px 0;
}
.mui-content ul li {
  width: 33%;
  float: left;
  padding: 5px 5px;
}
.mui-content ul li a {
  color: #999;
}

.mui-card-content-inner {
  padding: 0;
  padding-top: 20px;
}

.homelistTop {
  width: 100%;
  padding: 0 15px;
}

.homelistTop span {
  font-size: 20px;
  font-weight: 500;
}
</style>