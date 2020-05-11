<template>
  <div>
    <!-- 新歌榜 -->
    <singingListcomponent :type="1"></singingListcomponent>
    <!-- 热歌榜 -->
    <singingListcomponent :type="2"></singingListcomponent>
    <!-- 摇滚榜 -->
    <singingListcomponent :type="11"></singingListcomponent>
    <!-- 欧美金曲榜 -->
    <singingListcomponent :type="21"></singingListcomponent>

    <singingListcomponent :type="22"></singingListcomponent>
    <singingListcomponent :type="23"></singingListcomponent>
    <singingListcomponent :type="24"></singingListcomponent>
      <singingListcomponent :type="25"></singingListcomponent>
  </div>
</template>
<script>
import singingListcomponent from "../components/singingList/SingingListcomponent.vue";
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
   
  },
  components: {
    singingListcomponent
  }
};
</script>
<style scoped>

</style>