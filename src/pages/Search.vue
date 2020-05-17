<template>
  <div>
         <!-- <van-search v-model="nowQuery" placeholder="请输入搜索关键词" @search='searchDown(nowQuery)' /> -->
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <div class="searchBox">
          <input type="text" value="输入搜索内容" v-model="nowQuery" />
          <button @click="searchDown">搜索</button>
        </div>
      </li>
    </ul>
    <!-- <div> -->
 
      <div class="mui-content" v-if='nowQuery'>
            <ul class="mui-table-view mui-grid-view">
              <li v-for='item in searchResults.song' :key='item.songid' >
                <!-- <a href="#"> -->
                  <!-- <a href=""  v-for='item in searchResults.albume' :key='item.albumid'>
                    <img class="mui-media-object" :src="item.artistpic" />

                  </a> -->
                  <p class="mui-media-body" >{{item.songname}}</p>
              </li>
            </ul>
          </div>
      <!-- {{searchResults}} -->
    </div>
  <!-- </div> -->
</template>
<script>
import { search } from "../api/music.js";
// 引入搜索之后组件
// import SearchRespons from '../components/homecomponents/HomeMusialistBox.vue'
export default {
  data() {
    return {
      searchResults:'',
      nowQuery:''
    };
  },
  created() {
    // debugger
  },
  methods: {
    searchDown() {
      // debugger
      search(this.nowQuery)
        .then(res => {
          // debugger
          console.log(res.song);
          console.log(this.nowQuery);
          this.searchResults = res;
        })
        .catch();
    }
  }
};
</script>
<style scoped>
ul {
  width: 100%;
  /* margin: 50px auto; */
  background: #efeff4;
}
.searchBox input {
  height: 30px;
  width: 75%;
  border-radius: 0;
  margin: 0;
}
.searchBox button {
  height: 30px;
  margin: 0;
  background: #999;
  border-radius: 0;
}

.mui-content {
  padding: 15px;
}
</style>