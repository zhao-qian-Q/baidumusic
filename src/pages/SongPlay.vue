<template>
  <div>
    <!-- <h3>我是歌曲播放页</h3> -->
    <header id="header">
      <a class="mui-icon mui-icon-home mui-pull-left"></a>
      <p class="mui-title">
        <span>{{songDetail.title}}</span>
        <br />
        <span>{{songDetail.author}}</span>
      </p>
      <a class="mui-icon mui-icon-search mui-pull-right"></a>
    </header>

    <div class="bigBox">
      <!-- 图片 -->
      <div class="songImg">
        <img :src="songDetail.pic_radio" alt />
      </div>
      <!-- 歌词盒子 -->
      <div class="lyric">
        <lyricBox :lrclink="songDetail.lrclink" v-if='songDetail.lrclink'/>
      </div>
      <!-- 操作盒子点赞，下载 -->
      <div class="lakeandDownload">
        <span class="mui-icon-extra mui-icon-extra-heart-filled"></span>
        <span class="mui-icon mui-icon-download mui-pull-right"></span>
      </div>
      <!-- 播放盒子 -->
      <div class="singPlay">
        <audio controls>
          <source :src="fileLink.file_link" type="audio/mpeg"/>
        </audio>
      </div>
    </div>
  </div>
</template>
<script>
import LyricBox from "../components/songLyric/LyricComponent.vue";
import { getMusicDetail } from "../api/music.js";
export default {
  data() {
    return {
      songDetail: {},
      songid: this.$route.params.songid,
      fileLink: ""
    };
  },
  created() {
    // debugger
    console.log(this.songid);
    getMusicDetail(this.songid)
      .then(result => {
        console.log(result);
        this.songDetail = result.songinfo;
        this.fileLink = result.bitrate;
      })
      .catch();
  },
  methods: {},
  components: {
    LyricBox
  },
  computed: {}
};
</script>
<style scoped>
.bigBox {
  width: 100%;
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
.singPlay {
  width: 100%;
  height: 50px;
  /* overflow: hidden; */
  z-index: 11;
}
.lyric {
  width: 70%;
  height: 100px;
  overflow: hidden;
}
</style>