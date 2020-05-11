<template>
  <div id="app">
  
   <!-- 这是导航栏的组件 -->
     <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
      <div class="logoBox">
        <img src="./assets/img/logobaidu.png" alt="">

      </div>
      
      </router-link>
      <router-link class="mui-tab-item" to="/home/singerList">歌手</router-link>
      <router-link class="mui-tab-item" to="/home/singinglist">榜单</router-link>
      <router-link class="mui-tab-item" to="/home/main">我的</router-link>
      <router-link class="mui-tab-item" to="/home/search">搜索</router-link>
    </nav>
<!-- 内容部分 -->
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */

.mui-bar,
.mui-bar-tab {
  height: 50px;
  position: relative;
  top: 0;
  background: #f9f9f9;
  font-size: 16px;
  color: #999;
  border:none;
}
 .mui-bar-tab img {
   width: 25px;
   height: 25px;
 }
 .logoBox {
  margin: auto;
   background: rgb(81, 227, 247);
   width: 25px;
   height: 25px;
   border-radius: 50%;
 }
 .mui-active {
   color: red;
 }
</style>
