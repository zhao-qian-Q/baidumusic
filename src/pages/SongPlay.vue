<template>
  <div>
    <!-- <h3>我是歌曲播放页</h3> -->
    <header id="header">
      <a class="mui-icon mui-icon-home mui-pull-left"></a>
      <p class="mui-title">
        <span>{{songDetail.songinfo.title}}</span>
        <br />
        <span>{{songDetail.songinfo.author}}</span>
      </p>
      <a class="mui-icon mui-icon-search mui-pull-right"></a>
    </header>
    <div class="bigBox">
      <div class="songImg">
        <img :src="songDetail.songinfo.pic_huge" alt />
      </div>
      <div class="lyric">
        <h3>我是一堆歌词啊</h3>
      </div>
      <div class="lakeandDownload">
        <span class="mui-icon-extra mui-icon-extra-heart-filled"></span>
        <span class="mui-icon mui-icon-download mui-pull-right"></span>
      </div>
      <div class="singPlay"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // songId: "672906443",
      songDetail: {
        songinfo: {}
      }
    };
  },
  created() {
    this.getsong();
  },
  methods: {
    getsong() {
      this.$http
        .get(
          "/api/v1/restserver/ting?method=baidu.ting.song.play&songid=" +
            this.$route.params.songid
        )
        .then(result => {
          console.log(result.data);
          this.songDetail = result.data;
        })
        .catch();
    }
  }
};
</script>
<style scoped>
.bigBox {
  width: 100%;
  /* height: 200px; */
}
.songImg {
  width: 100%;
  height: 200px;
  margin: auto;
  text-align: center;
}
.songImg img {
  width: 50%;
  height: 150px;
}
.mui-title {
  font-size: 14px;
}
#header {
  background: #efeff4;
  padding: 10px;
  height: 100px;
}
</style>