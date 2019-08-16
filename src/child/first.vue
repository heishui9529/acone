<template>
  <div>
    <ul  class="flex">
      <li class="w49" v-for="(item,i) of content" :key="i">
        <img :src="IMGurl+item.pic" alt="" class="w100">
        <p class="center font16" v-text="item.pr">魅族 16Xs</p>
        <p class="Bred"><span v-text="item.new" class="fl">新品</span>{{item.title}}</p>
        <p class="center cRed">￥<span v-text="item.price"></span></p>
      </li>
    </ul>
    <div class="zhezhao">

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content: [],
        IMGurl:"http://127.0.0.1:3000/phone/"
      }
    },
    props: {
      tofirst:Number
      },
    created() {
      this.dianjione()
    },
    methods: {
      dianjione() {
        var cost = this.tofirst;
        var url = "phone"
        this.axios.get(url, {
          params: {
            num: cost
          }
        }).then(
          result => {
            this.content = result.data;
          }
        )
      },
    }
  }
</script>

<style scoped>
  ul {
    background: #f4f4f4;
  }

  .w50 {
    background: #fff;
    margin-left:2px;
    text-align: center
  }

  .w50 img {
    width: 100%;
  }

  .Bred {
    border: 1px solid red;
    color: #f00;
    margin: 5px auto;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 16px;
    line-height: 16px;

  }

  .Bred span {
    background: #f00;
    color: #fff;
    display: inline-block;
    width: 40px;
    text-align: center;
  }

  .cRed {
    color: #f00;
  }
 
</style>