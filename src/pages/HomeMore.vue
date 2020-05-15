<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
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
                    :key="item.artist_id"
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
      </div>
    </div>
  </div>
</template>
<script>
import { getTodayMusicList } from "../api/music.js";
export default {
  data() {
    return {
      HomeMusicList: {},
      size: "10"
    };
  },
  created() {
    // console.log(this.$route.params.type);
    getTodayMusicList(this.$route.params.type, this.size, 0)
      .then(res => {
        console.log(res.song_list);
        this.HomeMusicList = res.song_list;
      })
      .catch();
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.HomeMusicList = [];
          this.refreshing = false;
        }

        // for (let i = 0; i < 10; i++) {
        //   this.size = this.size + i;
        //   getTodayMusicList(this.$route.params.type, this.size, 0)
        //     .then(res => {
        //       console.log(res.song_list);
        //       this.HomeMusicList = res.song_list;
        //     })
        //     .catch();
        // }
           getTodayMusicList(this.$route.params.type, this.size, 0)
            .then(res => {
              console.log(res.song_list);
              this.HomeMusicList = res.song_list;
            })
            .catch();
        this.loading = false;

        if (this.HomeMusicList.length >= 10) {
          this.finished = true;
        }
      }, 1000);
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
.mui-card {
  width: 100%;
  margin-top: 0;
  margin-left: 0;
}
.mui-content {
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