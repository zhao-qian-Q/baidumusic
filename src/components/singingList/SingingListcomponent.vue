<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link :to="'/home/songsListDetail/'+this.type">
          <img class=" mui-pull-left"  id="leftImg" :src="songdList.billboard.pic_s192" />
          <div class="mui-media-body">
            <ul>
              <li v-for='(item,index) in songdList.song_list' :key='item.artist_id'>
                <span class="songsnumber">{{index+1}}</span>
                <span>{{item.title}}</span>
              </li>
            </ul>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
        songdList:{
            billboard:{
                pic_s192:''
            }
        },
        billboardNo:''
        // type:'2',
    };
  },
  props:['type'],
  created(){
this.getsongsList()
// console.log(this.songdList.billboard.billboard_no)
  },
  methods:{
      getsongsList(){
           this.$http
        .get(
          "/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.type+"&size=3&offset=1"
        )
        .then(res => {
        //   console.log(res.data.billboard.billboard_no);
          this.songdList = res.data;
          this.billboardNo = res.data.billboard.billboard_no
        })
        .catch();

      }
  }
};
</script>
<style scoped>
#leftImg{
    width: 100px;
    height: 100px;
}
.mui-media-body {
    padding-left: 15px;
}
.mui-media-body li {
    margin-bottom: 10px;
    font-size: 14px;

}
.songsnumber {
    color: red;
    margin-right: 5px;
    font-size: 20px;
}
</style>