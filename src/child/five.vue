<template>
  <div>
    <ul class="flex clearfix">
      <li class="w49 " v-for="(item,i) of content" :key="i" @click="dianji($event)">
        <div class="zhezhao" :data-index="item.Rid"></div>
        <img :src="urlIMG+item.BIGpic" alt="" class="w100">
        <span class="fl" v-text="item.title"></span>
        <img src="../assets/play.png" alt="" class="fr">
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        content: [],
        urlIMG: "http://127.0.0.1:3000/video/",
        contentone: []
      }
    },
    created() {
      this.load()
    },
    methods: {
      load() {
        var url = "video"
        this.axios.get(url).then(result => {
          this.content = result.data;
        })
      },
      dianji(e) {
        var vid = e.target.dataset.index
        var url = "vide"
        this.axios.get(url, {
          params: {
            vid
          }
        }).then(
          result => {
            this.contentone = result.data;
            this.$emit("transData",this.contentone);
          }
        )
      }
    }
  }
</script>
<style scoped>
  .w49 {
    margin-bottom: 3px;
  }

  li {
    position: relative
  }

  span {
    display: inline-block;
    width: 90%;
    height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .w100 {
    height: 110px;
  }


  video {
    width: 96%;
    position: fixed;
    height: 200px;
    top: 50%;
    transform: translateY(-50%);
    left: 2%;

  }

  .zhezhao {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>