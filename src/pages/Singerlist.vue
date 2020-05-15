<template>
  <div class="singerBox">
    <div class="mui-scroll">
      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell" v-for="item in singerlist" :key='item.ting_uid'>
          <router-link :to="'/home/singerDetails/'+item.ting_uid">
            <img :src="item.avatar_small" alt />&nbsp;&nbsp;
            <span>{{item.name}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getSingerList} from '../api/music'
export default {
  data() {
    return {
      singerlist:[],
      singeridlist:["2517"  ,"7994","1091","45561","2507","245815","1077","1204","1117","82366"]
    };
  },
  created() {
    // this.getlist();
    this.singeridlist.forEach(element => {
      getSingerList(element)
       .then(res => {
          // console.log(res);
          this.singerlist.push(res)
        })
      .catch()
      
    });
  },
  methods: {
    // getlist() {
    //   for(var i=0;i<this.singeridlist.length;i++){
    //     this.$http
    //     .get(
    //       "/api/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid="+this.singeridlist[i]
    //     )
    //     .then(res => {
    //       // console.log(res.data);
    //       this.singerlist.push(res.data)
    //     })
    //     .catch();

    //   }
      
    // }
  },
 
  components: {}
};
</script>
<style scoped>
.singerBox img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.mui-scroll ul {
  padding-right: 10px;
  color: #999;
}
</style>