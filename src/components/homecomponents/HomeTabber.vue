<template>
  <div>
    <ul class="mui-table-view">
      <router-link class="mui-table-view-cell mui-media" :to="'/home/songPlay/'+item.song_id" tag="li" v-for='item in homeTabberList' :key='item.artist_id'>
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.pic_small" />
          <div class="mui-media-body">
            {{item.title}}
            <p class="mui-ellipsis">{{item.author}}</p>
          </div>
        </a>
      </router-link>
    </ul>

    
  </div>
</template>
<script>
import {getTodayMusicList} from '../../api/music'
export default {
  data() {
    return {
        homeTabberList:{},
    //   type: "1"
    };
  },
  props:['type'],
  created() {
    // this.getHomeTabberList();
    getTodayMusicList(this.type)
    .then(
      res => {
          console.log(res.song_list)
          this.homeTabberList = res.song_list
      }
       
    )
    .catch()
  },
  methods: {
    // getHomeTabberList() {
    //   this.$http
    //     .get(
    //       "api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=" +
    //         this.type +
    //         "&size=5"
    //     )
    //     .then(res => {
    //       // console.log(res.data.song_list);
    //       // this.homeTabberList = res.data.song_list
    //     })
    //     .catch();
    // }


  }
};
</script>
<style scoped>
</style>