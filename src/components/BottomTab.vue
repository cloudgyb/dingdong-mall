<template>
  <el-row :gutter="20" style="margin-right:0">
    <el-col :span="6" v-for="(item, i) in tabList" :key="i">
      <div class="item" :class="item.path === currPath ? 'active' : ''" @click="switchTab(item)">
        <i :class="item.icon"></i><span>{{ item.label }}</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'BottomTab',
  data() {
    return {
      tabList: [
        {
          label: '首页',
          path: '/',
          icon: 'el-icon-s-home'
        },
        {
          label: '分类',
          path: '/category',
          icon: 'el-icon-menu'
        },
        {
          label: '购物车',
          path: '/cart',
          icon: 'el-icon-shopping-cart-2'
        },
        {
          label: '我的',
          path: '/my',
          icon: 'el-icon-s-custom'
        }
      ]
    }
  },
  methods: {
    switchTab(item) {
      if (item.path !== this.currPath) {
        this.$router.push({ path: item.path })
        document.title = item.label
      }
    }
  },
  computed: {
    currPath() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  i {
    font-size: 25px;
  }
}
.item:hover,
.active {
  color: #018a2a;
}
</style>
