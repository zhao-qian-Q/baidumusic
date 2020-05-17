<template>
  <div>
    <!-- 这是榜单详情页，榜单页点击进来，的具体榜单 -->
    <singingListcomponent v-for="item in songListNum" :key="item" :type="item"></singingListcomponent>
    
  </div>
</template>
<script>
import singingListcomponent from "../components/singingList/SingingListcomponent.vue";
export default {
  data() {
    return {
      songListNum: [1,2,3,4,5,6,7,8,9,10]
    };
  },
  created() {},
  methods: {},
  components: {
    singingListcomponent
  }
};
</script>
<style scoped>
</style>