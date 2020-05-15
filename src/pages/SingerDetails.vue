<template>
  <div>
    <div class="singerbg">
      <div class="singbgImg" :style="{'background':'url('+singerDetail.artistinfo.avatar_big+')'}"></div>
      <div class="singerimg">
        <img :src="singerDetail.artistinfo.avatar_middle" alt />
        <p>{{singerDetail.artistinfo.name}}</p>
      </div>
    </div>
    <div class="mui-scroll">
      <ul class="mui-table-view mui-table-view-chevron">
        <router-link
          :to="'/home/songPlay/'+item.song_id"
          class="mui-table-view-cell"
          tag="li"
          v-for="item in singerDetail.songlist"
          :key="item.song_id"
        >
          <p>{{item.title}}</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import { getSingerSongsList } from "../api/music";
export default {
  data() {
    return {
      tinguid: this.$route.params.tinguid,
      singerDetail: {
        artistinfo:{}
        // avatar_big: {}
      }
    };
  },
  created() {
    // console.log( this.singerDetail)
    // console.log(this.tinguid)
    // this.getsingerDetails();
    getSingerSongsList(this.tinguid)
      .then(result => {
        console.log(result);
        this.singerDetail = result;
      })
      .catch();
  },
  methods: {
    // getsingerDetails() {
    //   this.$http
    //     .get(
    //       "/api//v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid=" +
    //         this.tinguid+"&limits=10"
    //     )
    //     .then(result => {
    //       console.log(result.data);
    //       this.singerDetail = result.data;
    //     })
    //     .catch();
    // }
  }
};
</script>
<style scoped>
.singerbg {
  width: 100%;
  height: 170px;
}
.singbgImg {
  width: 100%;
  height: 170px;
  filter: blur(6px);
}
.singerimg {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: auto;
  position: relative;
  top: -75%;
}
.singerimg img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.singerimg p {
  font-size: 20px;
  color: black;
  font-weight: 600;
}
</style>