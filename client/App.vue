<template>
  <div>
    <p>现在时间：{{itme}}</p>
    <button @click="getItem()">获取现在时间</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itme: new Date()
    };
  },
  methods: {
    getItem () {
      this.itme = new Date()
    }
  }
};
</script>

<style lang="stylus" scoped>
div {
  color: red;
}
</style>

