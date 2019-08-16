<template>
  <div>
    <ul class="flex">
      <li class="w49  clearfix" v-for="(item,i) of content" :key="i">
        <img :src="imgurl+item.BIGpic" alt="">
        <img :src="imgurl+item.SMALLpic" alt="" class="SMALLpic">&nbsp;&nbsp;&nbsp;
        <span v-text="item.uname"></span>
        <p v-text="item.container" class="over"></p>
        <p v-text="item.affiliation" class="affiliation"></p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content: [],
        imgurl: "http://127.0.0.1:3000/pic/"
      }
    },
    created() {
      this.load()
    },
    methods: {
      load() {
        var url = "review"
        this.axios.get(url).then(result => {
          this.content = result.data;
        })
      }
    }
  }
</script>
<style scoped>
  img {
    width: 100%;
  }

  
  .SMALLpic {
    width: 20px;
    border-radius: 50%;
    vertical-align: middle
  }

  

  .over {
    overflow: hidden;
    text-overflow: ellipsis;
    height: 32px;
    margin: 12px 0
  }

  .affiliation {
    color: #666;
    font-size: 12px;
  }
</style>