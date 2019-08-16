<template>
  <div>
    <ul class="flex">
      <li v-for="(item,i) of content" :key="i" class="w49 center">
        <img :src="urlIMG+item.BIGpic" alt="" class="w100">
        <p v-text="item.title" class="f12"></p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        content: [],
        urlIMG: "http://127.0.0.1:3000/FLYME/"
      }
    },
    created() {
      this.load()
    },
    methods: {
      load() {
        var url = "flyme"
        this.axios.get(url).then(result => {
          this.content = result.data;
        })
      }
    }

  }
</script>
<style scoped>
 
</style>