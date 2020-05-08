<template>
  <div class="hello">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="mui-content">
            <div class="homelistTop">
              <span>今日榜单</span>
              <a href>更多</a>
            </div>
            <ul>
              <li v-for='item in todayMusicList' :key='item.artist_id'>
                <a href="#">
                  <img :src="item.pic_huge" alt />
                  <div>{{item.title}}</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 新歌速递 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="mui-content">
            <div class="homelistTop">
              <span>新歌速递</span>
              <a href>更多</a>
            </div>
            <ul>
              <li v-for='item in newMusicCourier' :key='item.artist_id'>
                <a href="#">
                  <img :src="item.pic_huge" alt />
                  <div>{{item.title}}</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部图片 -->
    <div class="footer-img">
      <img src="../assets/img/3.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      // 今日榜单
      todayMusicList:'',
      newMusicCourier:''
    };
  },
  created(){
    this.getTodayMusicList(),
    this.getnewMusicCourier()
  },
  methods:{
    getTodayMusicList(){
      this.$http
      .get('/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=6')
      .then(
        res=>{
          // console.log(res.data.song_list)
          this.todayMusicList = res.data.song_list
        }
      )
      .catch()
    },
    getnewMusicCourier(){
      this.$http
      .get('/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=3')
      .then(
        res=>{
          console.log(res.data.song_list)
          // this.todayMusicList = res.data.song_list
          this.newMusicCourier = res.data.song_list
        }
      )
    }


  },

  components: {
   
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
  padding: 0 15px;
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
.homelistTop ul li {
  padding: 5px;
  margin: 5px;
}
.footer-img {
  padding: 0 10px;
}
</style>
