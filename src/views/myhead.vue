<template>
  <div class="container">
    <!-- 头部搜索部分 -->
    <div class="top flex" v-if="scrollTop<200">
      <span class="font16">meizu</span>
      <div class="clearfix">
        <input type="text" class="fl">
       
          <img src="../assets/sou-suo.png" alt="" class="bor3 fl">
      
      </div>
      <img src="../assets/ding.png" alt="">
    </div>
    <div class="top topone flex" v-else>
      <span class="font16">meizu</span>
      <div class="clearfix padd">
        <input type="text" class="fl">
   
          <img src="../assets/sou-suo.png" alt="" class="bor3 fl">
    
      </div>
      <img src="../assets/ding.png" alt="">
    </div>
    <recommend></recommend>
  </div>

</template>

<script>
  import recommend from './recommend'
  export default {
    data() {
      return {
        activeName: 'a',
        swipe: 5,
        active: 'home',
        scrollTop:"",
        touming:"style=background: rgba(0, 0, 0, .1)",
        white:"style=background:#fff"

      }
    },
    mounted: function () {
        window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
      },
    methods: {
      handleScroll() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      },

    },
    components: {
      "recommend": recommend,
    },
    created(){
      this.handleScroll()
    }

  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 10rem;
    box-sizing: border-box;
    font-size: 0.3rem !important;
  }

  .red {
    background-color: red;
  }

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
  .w20{width: 20%;
       height: 30px;
       box-sizing: border-box;
       padding:2px 3px;}
  .topone {
    width: 100%;
    height: 30px;
    line-height: 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    position: fixed;
    z-index: 3;
    background:#fff;
    color: #000;
    transition: .3s;
  }

  .top img {
    vertical-align: middle;
    width: 20px;
    height: 30px;

  }
  .topone .bor3{
    background: rgba(128,128,128,.4);
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
  .topone input {
    border: none;
    border-radius: 14px 0px 0 14px;
    color: #000;
   background: rgba(128,128,128,.4);
    padding: 2px 5px;
    box-sizing: border-box;
    width: 80%;
    height: 30px;
  }
  .topone .padd{
      
  }
  .bor3 {
    border-radius: 0px 14px 14px 0;
    background: #fff;
    
  }



  .side {
    box-sizing: border-box;
    height: 100%;
  }

  .button {
    width: 100%;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-around;
  }

  .button span {
    display: inline-block;
    width: 20%;
    text-align: center;
    float: left;
    box-sizing: border-box;
  }

  .blue {
    color: #0bbbef
  }

  .van-ellipsis {
    font-size: 16px;
  }
</style>