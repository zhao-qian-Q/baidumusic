<template>
  <div>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <div class="searchBox">
          <input type="text" value="输入搜索内容" />
          <button>搜索</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
</style>