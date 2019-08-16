<template>
  <div>
    <div v-for="(item,i) of content" :key="i">
      <div class="clearfix">
        <img :src="IMGurl+item.pic" class="fl w50 imgh">
        <div class="fl w50 divone" :style="bg+item.backone">
          <h4 v-text="item.Title"></h4>
          <p v-text="item.p1" class="ppp"></p>
          <hr>
          <p class="bottom">￥<span v-text="item.price"></span></p>
      </div>
      <div class="clearfix">
        <div class="fl w50 divone" :style="bg+item.back2">
          <h4 v-text="item.Title2"></h4>
          <p v-text="item.p2" class="ppp"></p>
          <hr>
          <p class="bottom">￥<span v-text="item.price2"></span></p>
        </div>
        <img :src="IMGurl+item.pic2" class="fr w50 imgh">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content: [],
        IMGurl: "http://127.0.0.1:3000/head/",
        bg:"background:"
      }
    },
    props: {
      tosecond: Number
    },
    created() {
      this.dianji()
    },
    methods: {
      dianji() {
        var number = this.tosecond;
        var url = "boy"
        this.axios.get(url, {
          params: {
            num: number
          }
        }).then(
          result => {
            this.content = result.data;
          }
        )
      }
    }
  }
</script>

<style scoped>
.divone,.imgh{
   height: 150px;
 } 
 .w50{width: 50%;}
 .divone{box-sizing: border-box;
         padding:15px}
*{color:#fff}
h4{font-size: 16px;
    margin-bottom:14px;
    width: 67%;}
hr{width: 20%;}
.ppp{margin-bottom:5px;}
.bottom{margin-top:30px;}
</style>