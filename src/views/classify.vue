<template>
  <div>
    <div class="top flex" v-if="scrollTop<200">
      <span class="font16">meizu</span>
      <div class="clearfix">
        <input type="text" class="fl" :placeholder="acone">
        <img src="../assets/sou-suo.png" alt="" class="bor3 fl">
      </div>
      <img src="../assets/ding.png" alt="">
    </div>
    <van-sidebar v-model="activeKey" class="margin50">
      <van-sidebar-item title="推荐" />
      <van-sidebar-item title="手机" />
      <van-sidebar-item title="声学" />
      <van-sidebar-item title="配件" />
      <van-sidebar-item title="生活" />
    </van-sidebar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        scrollTop: "",
        active: "search",
        activeKey: 0,
        acone:"魅族x15"
      }
    }
  }
</script>
<style scoped>
  .top {
    width: 100%;
    height: 30px;
    line-height: 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    position: fixed;
    z-index: 3;
    background: rgba(0, 0, 0, .1);
    color: #fff
  }

  .top img {
    vertical-align: middle;
    width: 20px;
    height: 30px;

  }

  .top input {
    border: none;
    border-radius: 14px 0px 0 14px;
    color: #000;
    padding: 2px 5px;
    box-sizing: border-box;
    width: 80%;
    height: 30px;
  }

  .clearfix {
    border-radius: 14px;
    background: #fff;
  }
  .margin50{padding-top:30px;
            width: 15%;
            height: 20px;}
.van-sidebar-item--select{
     border-color:#1989fa;
}
.van-sidebar-item{padding: 5px;}
</style>