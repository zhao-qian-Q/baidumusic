<template>
  <div class="mui-card">
    <div class="mui-card-content-inner">
      <ul class="mui-table-view mui-table-view-chevron singingBox">
        <li class="mui-table-view-cell">
          <a href>
            <div class="singlistImg">
              <img :src="newsongsList.billboard.pic_s192" alt />
            </div>
            <div class="singlistcontent">
              <p v-for="(item,index) in (newsongsList.song_list)" :key="item.artist_id">
                <span class="numbers">{{index+1}}</span>
                <span>{{item.title}}-({{item.author}})</span>
              </p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a href>
            <div class="singlistImg">
              <img :src="hotsingsList.billboard.pic_s192" alt />
            </div>
            <div class="singlistcontent">
              <p v-for="(item,index) in (hotsingsList.song_list)" :key="item.artist_id">
                <span class="numbers">{{index+1}}</span>
                <span>{{item.title}}-({{item.author}})</span>
              </p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a href>
            <div class="singlistImg">
              <img :src="rockList.billboard.pic_s192" alt />
            </div>
            <div class="singlistcontent">
              <p v-for="(item,index) in (rockList.song_list)" :key="item.artist_id">
                <span class="numbers">{{index+1}}</span>
                <span>{{item.title}}-({{item.author}})</span>
              </p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a href>
            <div class="singlistImg">
              <img :src="europeAmericalist.billboard.pic_s192" alt />
            </div>
            <div class="singlistcontent">
              <p v-for="(item,index) in (europeAmericalist.song_list)" :key="item.artist_id">
                <span class="numbers">{{index+1}}</span>
                <span>{{item.title}}-({{item.author}})</span>
              </p>
            </div>
          </a>
        </li>
         <li class="mui-table-view-cell">
          <a href>
            <div class="singlistImg">
              <img :src="oldSonglist.billboard.pic_s192" alt />
            </div>
            <div class="singlistcontent">
              <p v-for="(item,index) in (oldSonglist.song_list)" :key="item.artist_id">
                <span class="numbers">{{index+1}}</span>
                <span>{{item.title}}-({{item.author}})</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsongsList: "",
      hotsingsList: "",
      rockList: "",
      europeAmericalist: "",
      oldSonglist:''
    };
  },
  created() {
    this.getnewsongsList();
    this.gethotsingsList();
    this.getrockList();
    this.geteuropeAmericalist();
    this.getoldSonglist()
  },
  methods: {
    // 获取新歌榜
    getnewsongsList() {
      this.$http
        .get(
          "/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=3&offset=1"
        )
        .then(res => {
          console.log(res.data);
          this.newsongsList = res.data;
        })
        .catch();
    },
    // 获取热歌榜
    gethotsingsList() {
      this.$http
        .get(
          "/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=3&offset=1"
        )
        .then(res => {
          console.log(res.data);
          this.hotsingsList = res.data;
        })
        .catch();
    },
    // 获取摇滚榜
    getrockList() {
      this.$http
        .get(
          "/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=11&size=3&offset=1"
        )
        .then(res => {
          console.log(res.data);
          this.rockList = res.data;
        })
        .catch();
    },
    // 获取欧美金曲榜
    geteuropeAmericalist() {
      this.$http
        .get(
          "/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=21&size=3&offset=1"
        )
        .then(res => {
          console.log(res.data);
          this.europeAmericalist = res.data;
        })
        .catch();
    },
    // 获取经典老歌
    getoldSonglist(){
      this.$http
        .get(
          "/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=22&size=3&offset=1"
        )
        .then(res => {
          console.log(res.data);
          this.oldSonglist = res.data;
        })
        .catch();

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
  padding: 0 15px;
}
.bigbox {
  width: 100%;
}
.singingBox li a {
  /* width: 100%; */
  display: flex;
  padding-right: 15px;
}
.singlistImg {
  /* width: 50%; */
  flex: 5;
}
.singlistcontent {
  width: 50%;
  /* font-size: 24px; */
  margin-left: 20px;
  padding-top: 15px;
  flex: 7;
  /* overflow: hidden;
  text-overflow: ellipsis; 加省略号
  white-space: nowrap; 强制不换行 */
}
.numbers {
  
  font-size: 16px;
  color: red;
  margin-right: 5px;
}
</style>