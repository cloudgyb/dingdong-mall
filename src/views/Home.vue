<template>
  <div>
    <header>
      <span class="el-icon-location">预览香园</span>
      <el-button type="info" size="small" icon="el-icon-search" round>输入商品名称</el-button>
    </header>
    <div class="main-container">
      <router-view />
    </div>
    <footer>
      <bottom-tab></bottom-tab>
    </footer>
  </div>
</template>

<script>
import BottomTab from '../components/BottomTab'
export default {
  name: 'Home',
  components: {
    BottomTab
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1vh;
  height: 5vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  background-color: #fff;
}
footer {
  position: fixed;
  bottom: 0;
  height: 7vh;
  width: 100%;
  background-color: #eeeeee;
  padding: 0.5vh 0;
  z-index: 9999;
}
.main-container {
  height: auto;
  margin: 7vh 0 8vh 0;
}
.el-button {
  width: 60%;
}
</style>
