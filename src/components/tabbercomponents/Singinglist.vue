<template>
  <div class="mui-card">
    <div class="mui-card-content-inner">
      <ul class="mui-table-view mui-table-view-chevron singingBox">
        <li class="mui-table-view-cell">
          <a href>
            <div class="singlistImg">
              <img src="../../assets/img/1.jpg" alt />
            </div>
            <div class="singlistcontent">
              <p>
                <span>1</span>
                <span>dddddccccddd</span>
              </p>
              <p>
                <span>2</span>
                <span>aaaacccccd</span>
              </p>
              <p>
                <span>3</span>
                <span>ccccccccccc</span>
              </p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a href>
            <div class="singlistImg">
              <img src="../../assets/img/1.jpg" alt />
            </div>
            <div class="singlistcontent">
              <p>
                <span>1</span>
                <span>dddddccccddddddcccccdd</span>
              </p>
              <p>
                <span>2</span>
                <span>aaaacccccdddddddddcccccccaa</span>
              </p>
              <p>
                <span>3</span>
                <span>ccccccccccssccccccccc</span>
              </p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a href>
            <div class="singlistImg">
              <img src="../../assets/img/1.jpg" alt />
            </div>
            <div class="singlistcontent">
              <p>
                <span>1</span>
                <span>dddddcdd</span>
              </p>
              <p>
                <span>2</span>
                <span>aaaacddcccccccaa</span>
              </p>
              <p>
                <span>3</span>
                <span>cccccc</span>
              </p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a href>
            <div class="singlistImg">
              <img src="../../assets/img/1.jpg" alt />
            </div>
            <div class="singlistcontent">
              <p>
                <span>1</span>
                <span>ddddddddccdd</span>
              </p>
              <p>
                <span>2</span>
                <span>aaacaa</span>
              </p>
              <p>
                <span>3</span>
                <span>ccccdddddddddddddddddddddddddddddddcsssscc</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
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
.mui-card {
  width: 100%;
  margin-top: 0;
  margin-left: 0;
}
.mui-content {
  background: white;
  padding: 0 15px;
}
.bigbox {
  width: 100%;
}
.singingBox li a {
  display: flex;
}
.singlistImg {
  /* width: 50%; */
  flex: 5;
}
.singlistcontent {
  width: 50%;
  margin-left: 20px;
  flex: 7;
  overflow: hidden;
  text-overflow: ellipsis; /* 加省略号 */
  white-space: nowrap; /* 强制不换行 */
}
</style>