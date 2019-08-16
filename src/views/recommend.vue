<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,i) of swiper" :key="i">
        <img :src="urlIMG+item.pic" />
      </van-swipe-item>
    </van-swipe>
    <div class="smallm">
      <span>
        <img src="../assets/meizu.png">魅族官方直供
      </span>
      <span>
        <img src="../assets/airplane.png">满80免运费
      </span>
      <span>
        <img src="../assets/weven.png">7 天无理由退货
      </span>
    </div>
    <ul class="headImg clearfix">
      <li v-for="(item,i) of headone" :key="i">
        <van-image width="2rem" height="2rem" fit="cover" :src="qixi+item.pic" />
        <p v-text="item.title"></p>

      </li>
    </ul>
    <div class="clearfix">
      <img src="../assets/left.png" alt="" class="fl FirImg">
      <img src="../assets/rightTop.png" alt="" class="fr scoImg">
      <img src="../assets/rightbottom.png" alt="" class="fr thrImg">
    </div>
    <h2 class="center">智能手机</h2>
    <div class="hr"></div>
    <img src="../assets/4and64.jpg" alt="" class="w100">
    <first :tofirst="first2"></first>
    <h2 class="center">魅族声学</h2>
    <div class="hr"></div>
    <second :tosecond="first2"></second>
    <first :tofirst="second2"></first>
    <h2 class="center">智能配件</h2>
    <div class="hr"></div>
    <second :tosecond="second2"></second>
    <first :tofirst="three2"></first>
    <h2 class="center">生活周边</h2>
    <div class="hr"></div>
    <second :tosecond="three2"></second>
    <first :tofirst="four2"></first>
    <h2 class="center">社区热贴</h2>
    <div class="hr"></div>
    <three></three>
    <h2 class="center">Flyme</h2>
    <div class="hr"></div>
    <four></four>
    <h2 class="center">精彩视频</h2>
    <div class="hr"></div>
    <five @transData="getChildData($event)" @click="show=true"></five>
    <div class="zhezhao" v-for="(item,i) of parentData" :key="i" v-show="show=true">
      <a @click="close" class="fr colorf00">关闭</a>
      <video :src="imgurl+item.video" controls="controls" autoplay>
        您的浏览器不支持 video 标签。
      </video>
    </div>
  </div>
</template>

<script>
  import first from '../child/first'
  import second from "../child/second"
  import three from "../child/three"
  import four from "../child/four"
  import five from "../child/five"
  export default {
    data() {
      return {
        swiper: [],
        urlIMG: "http://127.0.0.1:3000/swiper/",
        headone: [],
        qixi: "http://127.0.0.1:3000/head/",
        first2: 1,
        second2: 2,
        three2: 3,
        four2: 4,
        parentData: [],
        imgurl: "http://127.0.0.1:3000/video/",
        show: false,
        hid:false
      }
    },
    created() {
      this.swiperone()
      this.head()
    },
    methods: {
      swiperone() {
        var url = "swiper";
        this.axios.get(url).then(result => {
          this.swiper = result.data;
        })
      },
      head() {
        var url = "head";
        this.axios.get(url).then(result => {
          this.headone = result.data;
        })
      },
      getChildData(date) {
        this.parentData = date;
        console.log(this.parentData)

      },
      close(){
        if(this.show==true){
          return this.show==false
        }
      }

    },
    components: {
      first,
      second,
      three,
      four,
      five
    }
  }
</script>

<style scoped>
  .van-swipe__track {
    height: 350px !important;
  }

  .van-swipe-item img {
    display: block;
    width: 100%;
    height: 165px;
  }

  .smallm {
    width: 100%;
    height: 20px;
    padding: 2px 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    line-height: 30px;
    text-align: center;
  }

  .smallm img {
    width: 13px;
    vertical-align: middle
  }

  .headImg {
    padding: 5px 15px;
    box-sizing: border-box;
    text-align: center
  }

  .headImg img {
    width: 65px;
    height: 60px;
    display: block;
  }

  .headImg li {
    width: 23%;
    float: left;
    margin-left: 5px;
    text-align: center
  }

  .FirImg,
  .scoImg,
  .thrImg {
    width: 50%;
  }



  .center {
    margin-top: 30px;
  }

  .hr {
    width: 32px;
    height: 5px;
    background: #0bbbef;
    margin: 20px auto;
  }

  .zhezhao {
    width: 100%;
    height: 100%;
    z-index: 15;
    background: rgba(0, 0, 0, 1);
    position: fixed;
    top: 0;
    left: 0;
  }

  video {
    width: 90%;
    height: 350px;
    position: absolute;
    top: calc(50% - 175px);
    left:5%
  }

  .colorf00 {
    font-size: 20px;
    color: #fff
  }
</style>