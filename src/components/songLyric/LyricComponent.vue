<template>
  <div>
    <h3>我是歌词的组件</h3>
    <p>{{lyricContent}}</p>
  </div>
</template>
<script>
import { getLyric } from "../../api/music.js";
export default {
  data(){
    return {
         lyricContent:''


    }
 
  },
  props: ["lrclink"],
  created() {
    // debugger
    getLyric(this.lrclink)
          .then(res => {

            console.log(res.content);
            this.lyricContent = res.content
          })
          .catch();
  },
  methods: {},
  watch: {
    // lrclink() {
    //   if (this.lrclink) {
    //     debugger;
    //     getLyric(this.lrclink)
    //       .then(res => {
    //         console.log(res);
    //       })
    //       .catch();
    //   }
    // }
  }
};
</script>
<style scoped>
</style>