<template>
  <div>
    <!-- 这是榜单详情页，榜单页点击进来，的具体榜单 -->
    <singingListcomponent v-for="item in songListNum" :key="item.id" :type="item.num"></singingListcomponent>
    
  </div>
</template>
<script>
import singingListcomponent from "../components/singingList/SingingListcomponent.vue";
export default {
  data() {
    return {
      songListNum: [
        { num: 1 },
        { num: 2 },
        { num: 11 },
        { num: 21 },
        { num: 22 },
        { num: 23 },
        { num: 24 },
        { num: 25 }
      ]
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