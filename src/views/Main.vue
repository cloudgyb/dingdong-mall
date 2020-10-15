<template>
  <div style="margin:0 1.5vw">
    <div id="feat" class="flex-box theme-color">
      <span class="el-icon-truck">最快29分钟送达</span>
      <span class="el-icon-s-opportunity">满38元免配送费</span>
      <span class="el-icon-sold-out">安心退</span>
    </div>
    <div id="main-img">
      <img :src="mainImg" />
    </div>
    <div id="main-category" class="flex-box">
      <div class="flex-box-cloum" v-for="(item, i) in categoryList" :key="i">
        <el-image style="width: 11vw;border-radius:100%" :src="item.img" fit="fill"></el-image>
        <span style="font-size:0.75rem">{{ item.label }}</span>
      </div>
    </div>
    <el-divider>猜你喜欢</el-divider>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      mainImg: require('../assets/img/main-img.png'),
      categoryList: [
        {
          img: require('../assets/img/vagetable.png'),
          label: '蔬菜豆制品',
          path: ''
        },
        {
          img: require('../assets/img/eggs.jpeg'),
          label: '肉禽蛋',
          path: ''
        },
        {
          img: require('../assets/img/seafood.jpg'),
          label: '水产海鲜',
          path: ''
        },
        {
          img: require('../assets/img/fruit.png'),
          label: '水果',
          path: ''
        },
        {
          img: require('../assets/img/milk.jpg'),
          label: '乳酪洪培',
          path: ''
        },
        {
          img: require('../assets/img/fruit.png'),
          label: '素食冷冻',
          path: ''
        },
        {
          img: require('../assets/img/fruit.png'),
          label: '酒饮零食',
          path: ''
        },
        {
          img: require('../assets/img/fruit.png'),
          label: '快手菜',
          path: ''
        },
        {
          img: require('../assets/img/fruit.png'),
          label: '网红打卡地',
          path: ''
        },
        {
          img: require('../assets/img/fruit.png'),
          label: '领30元...',
          path: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.flex-box-cloum {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
}
.theme-color {
  color: #018a2a;
}
#feat {
  height: 5vh;
  font-size: 0.8rem;
}
#main-img {
  img {
    width: 94vw;
  }
}
#main-category {
  div {
    width: 17vw;
    margin: 0.6vh 0;
  }
}
</style>
