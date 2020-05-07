<template>
  <div class="hello">
    <!-- 这是导航栏的组件 -->
    <my-nav></my-nav>
<!-- 首页今日榜单的内容 -->
    <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../assets/img/1.jpg" alt="">
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                      <img src="../assets/img/2.jpg" alt="">
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                      <img src="../assets/img/3.jpg" alt="">
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                      <img src="../assets/img/3.jpg" alt="">
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                      <img src="../assets/img/2.jpg" alt="">
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../assets/img/1.jpg" alt="">
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../assets/img/1.jpg" alt="">
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../assets/img/2.jpg" alt="">
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../assets/img/3.jpg" alt="">
		                    <div class="mui-media-body">more</div></a></li>
		        </ul> 
		</div>
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>

    
    
  </div>
</template>

<script>
import myNav from './subComponments/Mynav.vue'
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  components:{
    myNav
  }
}
</script>
<style scoped>

</style>
