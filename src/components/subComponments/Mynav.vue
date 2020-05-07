<template>
  <div>
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#">logo</a>
      <a class="mui-tab-item" href="#">歌手</a>
      <a class="mui-tab-item" href="#">榜单</a>
      <a class="mui-tab-item" href="#">我的</a>
      <a class="mui-tab-item" href="#">搜索</a>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Mynav",
  data() {
    return {};
  }
};
</script>
<style scoped>
.mui-bar,
.mui-bar-tab {
  position: relative;
  top: 0;
  background: #f9f9f9;
  font-size: 16px;
  color: #999;
}
</style>