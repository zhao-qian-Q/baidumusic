<template>
  <div>
    <!-- <h3>我是歌曲播放页</h3> -->
    <header id="header">
      <router-link class="mui-icon mui-icon-home mui-pull-left" to='/home'></router-link>
      <p class="mui-title">
        <span>{{songinfo.name}}</span>
        <br />
        <span>{{songinfo.ar[0].name}}</span>
      </p>
      <router-link class="mui-icon mui-icon-search mui-pull-right" to='/home/search'></router-link>
    </header>

    <div class="bigBox">
      <!-- 图片 -->
      <div class="songImg">
        <img :src="songinfo.al.picUrl" alt />
      </div>
      <!-- 歌词盒子 -->
      <div class="lyric">
        <lyricBox :songid="this.$route.params.songid" v-if='this.$route.params.songid'/>
      </div>
      <!-- 操作盒子点赞，下载 -->
      <div class="lakeandDownload">
        <span class="mui-icon-extra mui-icon-extra-heart-filled"></span>
        <span class="mui-icon mui-icon-download mui-pull-right"></span>
      </div>
      <!-- 播放盒子 -->
      <div class="singPlay">
        <!-- <audio controls>
          <source controls :src="audioUrl" type="audio/mpeg" />
        </audio> -->
        <audio :src="audioUrl" controls="controls"></audio>
      </div>
    </div>
  </div>
</template>
<script>
import LyricBox from "../components/songLyric/LyricComponent.vue";
import { getMusicDetail } from "../api/music.js";
import { getSongPlay } from "../api/music.js";
export default {
  data() {
    return {
      songinfo: {
        // name:'',
        ar: [{ name }],
        al: {}
      },
      songid: this.$route.params.songid,
      // fileLink: ""
      audioUrl: ""
    };
  },
  created() {
    // debugger
    // console.log(this.songid);
    // 获取歌曲信息
    getMusicDetail(this.songid)
      .then(result => {
        // console.log(result.songs[0]);
        this.songinfo = result.songs[0];
        // this.fileLink = result.bitrate;
      })
      .catch();
    //获取歌曲播放地址
    getSongPlay(this.songid).then(res => {
      // console.log(res.data[0]);
      this.audioUrl = res.data[0].url;
    });
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
  width: 100%;
  height: 120px;
  overflow: hidden;
}
</style>