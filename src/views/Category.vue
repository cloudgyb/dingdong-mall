<template>
  <div>
    <el-tabs tab-position="left" type="card">
      <el-tab-pane v-for="(item, i) in tabList" :label="item.label" :key="i">
        {{ item.label }}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data() {
    return {
      tabList: [
        {
          label: '蔬菜豆制品',
          id: ''
        },
        {
          label: '新鲜水果',
          id: ''
        },
        {
          label: '海鲜水产',
          id: ''
        },
        {
          label: '快手菜',
          id: ''
        },
        {
          label: '乳品洪培',
          id: ''
        },
        {
          label: '营养早餐',
          id: ''
        },
        {
          label: '火锅来了',
          id: ''
        },
        {
          label: '熟食卤味',
          id: ''
        },
        {
          label: '烟酒零食',
          id: ''
        },
        {
          label: '网红打卡地',
          id: ''
        },
        {
          label: '速食冷冻',
          id: ''
        },
        {
          label: '粮油调味',
          id: ''
        },
        {
          label: '厨房用品',
          id: ''
        },
        {
          label: '代买早餐',
          id: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.el-tabs {
  border: 0.5px #e4e7ed solid;
  box-sizing: border-box;
}
</style>
<style>
.el-tabs__item {
  padding: 0 10px;
  height: 8vh;
  line-height: 8vh;
  background-color: #eeeeee;
}
.el-tabs--card > .el-tabs__header .el-tabs__nav {
  border-radius: 0;
}
.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active {
  background-color: #fff;
  font-size: 16px;
}
</style>
