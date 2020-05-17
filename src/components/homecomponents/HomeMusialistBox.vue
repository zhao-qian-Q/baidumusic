<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="mui-content">
            <div class="homelistTop">
              <span>{{title}}</span>
              <router-link :to="'/home/homeMore/'+type+'/'+title" >更多</router-link>
            </div>
            <ul class="mui-table-view mui-grid-view">
              <router-link :to="'/home/songPlay/'+item.song_id" tag="li"
                class="mui-table-view-cell mui-media mui-col-xs-4"
                v-for="item in HomeMusicList"
                :key="item.artist_id"
              >
                <a href="#">
                  <img class="mui-media-object" :src="item.pic_huge" />
                  <div class="mui-media-body">{{item.title}}</div>
                </a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getTodayMusicList} from '../../api/music.js'
export default {
  // name: "home",
  data() {
    return {
      // 今日榜单
      HomeMusicList: {}
    };
  },
  props: {
    title: {
      type: String,
      default: '音乐榜单'
    },
    type: {
      type: Number,
      default: 1
    },
    size: { type: Number, default: 1 }
  },
  created() {
    getTodayMusicList(this.type,this.size).then(
      res => {
          console.log(res.song_list)
          this.HomeMusicList = res.song_list;
      }
    ).catch();
    // this.getnewMusicCourier();
    // console.log(this.type)
  },
  methods: {
    // getTodayMusicList() {
    //   this.$http
    //     .get(
    //     "/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.type+"&size="+this.size
    //     )
    //     .then(res => {
    //       // console.log(res.data.song_list)
    //       this.HomeMusicList = res.data.song_list;
    //     })
    //     .catch();
    // },
    // homeMore(){
    //   this.size = 10
    // }
  },

  components: {}
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
.homelistTop a {
  position: absolute;
  right: 20px;
  color: #999;
}
.homelistTop span {
  font-size: 20px;
  font-weight: 500;
}
/* .homelistTop ul li {
  padding: 5px;
  margin: 5px;
} */
/* .footer-img {
  padding: 0 10px;
} */
</style>
