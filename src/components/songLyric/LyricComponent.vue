<template>
  <div>
    <!-- <h3>我是歌词的组件</h3> -->
    <div class="lyricContent">
      <div v-for='(item,index) in lriObjList' :key='index'>
        {{item.content}}

      </div>
    </div>
  </div>
</template>
<script>
import { getLyric } from "../../api/music.js";
export default {
  data() {
    return {
      lyricContent: "",
      lriObjList:[]
    };
  },
  props: ["songid"],
  created() {
    // debugger
    getLyric(this.songid)
      .then(res => {
        // var lriObjList = [];
        // console.log(res.content);
        // this.lyricContent = res.content;
        const lyrics = res.content.split("\n");
        // debugger

        lyrics.forEach(item => {
          let reg = /\[\d*:\d*\.\d*\]/;
          let matchList = item.match(reg);
          if (matchList == null) return;
          for (let matchStr of matchList) {
            // console.log(match);
            let time = 0;
            let minReg = /\[\d*/;
            // console.log(matchStr.match(minReg));
            time =
              time + Number.parseInt(matchStr.match(minReg)[0].slice(1)) * 60;
            // console.log(time)
            let secReg = /:\d*/;
            time = time + Number.parseInt(matchStr.match(secReg)[0].slice(1));
            // console.log(time);
            this.lriObjList.push({
              time,
              content: item.replace(reg,"")
            });
          }
        });
        console.log(this.lriObjList);
      })
      .catch();
  },
  methods: {},
  watch: {}
};
</script>
<style scoped>
.lyricContent {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 14px;
}
</style>