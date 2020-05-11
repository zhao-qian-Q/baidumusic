<template>
  <div class="hello">
    <!-- 今日榜单的模块 -->
    <homeMusialistBox title="今日榜单" :type="2" :size="6"></homeMusialistBox>

    <!-- 新歌速递 -->
    <homeMusialistBox title="新歌速递" :type="1" :size="3"></homeMusialistBox>

    <!-- 底部轮播图 -->
    <div class="footer-img">
      <van-swipe class="my-swipe" :autoplay="3000">
        <van-swipe-item>
          <img src="../assets/img/1.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/2.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/3.jpg" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 首页的tab切换功能 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="mui-content">
            <div class="homelistTop">
              <span>音乐榜单</span>
              <a href>更多</a>
            </div>
            <van-tabs v-model="activeName">
              <van-tab title="热歌榜" name="a">
                <homeTabber :type='1'></homeTabber>
              </van-tab>
              <van-tab title="新歌榜" name="b">
                <homeTabber :type='2'></homeTabber>
              </van-tab>
              <van-tab title="king榜" name="c">
                <homeTabber :type='25'></homeTabber>
              </van-tab>
            </van-tabs>
            
          </div>
        </div>
      </div>
    </div>
    <!-- 热歌榜单 -->
     <homeMusialistBox title="热歌榜单" :type="24" :size="6"></homeMusialistBox>
  </div>
</template>

<script>
import homeMusialistBox from "../components/homecomponents/HomeMusialistBox.vue";
import homeTabber from '../components/homecomponents/HomeTabber.vue'
export default {
  name: "home",
  data() {
    return {
      activeName: "a"
    };
  },
  created() {},
  methods: {},

  components: {
    homeMusialistBox,
    homeTabber
  }
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  height: 150px;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 150px;
  z-index: 11;
}
.mui-card {
  width: 100%;
  margin-top: 10px;
  margin-left: 0;
}
.mui-content {
  background: white;
}
.homelistTop {
  width: 100%;
  padding: 0 15px;
}
.homelistTop a {
  position: absolute;
  right: 20px;
  color: #999;
}
.homelistTop span {
  font-size: 20px;
  font-weight: 500;
}
</style>
