<template>
  <div class="singerBox">
    <div class="mui-scroll">
      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell" v-for="item in singerlist" :key='item.ting_uid'>
          <a href>
            <img :src="item.avatar_small" alt />&nbsp;&nbsp;
            <span>{{item.name}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      singerlist:[],
      singeridlist:["2517"  ,"7994","1091","45561","2507","245815","1077","1204","1117","82366"]
    };
  },
  created() {
    this.getlist();
  },
  methods: {
    getlist() {
      for(var i=0;i<this.singeridlist.length;i++){
        this.$http
        .get(
          "/api/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid="+this.singeridlist[i]
        )
        .then(res => {
          console.log(res.data);
          this.singerlist.push(res.data)
        })
        .catch();

      }
      
    }
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