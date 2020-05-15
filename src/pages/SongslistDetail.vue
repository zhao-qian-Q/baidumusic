<template>
  <div>
    <div class="singerbg">
      <img :src='billboard.pic_s444' alt />
    </div>
    <div class="mui-scroll">
      <ul class="mui-table-view mui-table-view-chevron">
        <router-link :to="'/home/songPlay/'+item.song_id" tag="li" class="mui-table-view-cell" v-for='item in songsList' :key='item.song_id' >
          <p class="songTitle">{{item.title}}</p>
          <p>{{item.author}}</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import {getTodayMusicList} from '../api/music'
export default {
  data() {
    return {
        songsList:{
            // billboard:{

            // },
            // song_list:{
              
            // }
        },
        billboard:{}
    };
  },
  created() {
    // console.log(this.$route.params.type)
    // this.getsongsList();
    getTodayMusicList(this.$route.params.type,20,0)
    .then(res => {
            console.log(res);
          this.songsList = res.song_list;
          this.billboard = res.billboard;
          //   this.billboardNo = res.data.billboard.billboard_no
        })
    .catch()
  },
  methods: {
    // getsongsList() {
    //   this.$http
    //     .get(
    //       "/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=" +
    //         this.$route.params.type +
    //         "&size=20&offset=1"
    //     )
    //     .then(res => {
    //         // console.log(res.data);
    //       this.songsList = res.data;
    //       //   this.billboardNo = res.data.billboard.billboard_no
    //     })
    //     .catch();
    // }
  }
};
</script>
<style scoped>
.songTitle {
    font-size: 16px;
}
</style>