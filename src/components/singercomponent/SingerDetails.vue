<template>
  <div>
    <div class="singerbg" :style="{'background':'url('+singerDetail.artistinfo.avatar_big+')'}">
      <div class="singerimg">
        <img :src='singerDetail.artistinfo.avatar_middle' alt />
        <p>{{singerDetail.artistinfo.name}}</p>
      </div>
    </div>
    <div class="mui-scroll">
      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell" v-for='item in singerDetail.songlist' :key='item.song_id'>
          <p>{{item.title}}</p>

        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tinguid: this.$route.params.tinguid,
      singerDetail: {}
      // back_img: this.singerDetail.avatar_big
      // url_back_img: "url("+require('this.singerDetail.avatar_big')+")"
    };
  },
  created() {
    // console.log(this.tinguid)
    this.getsingerDetails();
  },
  methods: {
    getsingerDetails() {
      this.$http
        .get(
          "/api//v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid=" +
            this.tinguid+"&limits=10"
        )
        .then(result => {
          console.log(result.data);
          this.singerDetail = result.data;
        })
        .catch();
    }
  }
};
</script>
<style scoped>
.singerbg {
  width: 100%;
  height: 170px;
  /* background-color: rgba(253, 239, 218,0.5); */
  /* background-image: url('this.singerDetail.avatar_big'); */
  /* backdrop-filter: blur(5px); */
  /* -webkit-filter: blur(5px); 
  filter: blur(5px); */
  /* background-size: 100% 100%; */
  /* background-attachment: fixed; */
  /* background-color: cornsilk; */
}
.singerimg {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: auto;
  position: relative;
  top: 20%;
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