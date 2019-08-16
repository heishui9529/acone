<template>
  <div id="app">
    <van-tabbar v-model="active" safe-area-inset-bottom>
      <van-tabbar-item name="home" icon="home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="search" replace to="/classIfy">分类</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item name="setting" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
    <router-view />

  </div>
</template>
<script>
export default {
  data(){
    return{
      active: "home"
    }
  }
}
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .fl {
    float: left
  }

  .fr {
    float: right
  }

  .center {
    text-align: center;
  }

  .box {
    box-sizing: border-box
  }

  .clear {
    clear: both
  }

  * {
    padding: 0;
    margin: 0
  }

  .w100 {
    width: 100%
  }

  .w50 {
    width: 49%;
  }

  .font16 {
    font-size: 16px;
    font-weight: bolder
  }

  .clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .w49 {
    width: 49%;
  }
  .flex {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  .w100{
    width: 100%;
  }
  .f12{font-size: 12px;
         font-weight: bolder}
</style>