<template>
  <div>
    <h1>user</h1>
    名字： {{userInfo.userName}}
    年龄： {{userInfo.userAge}}
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    this.init()
  },
  computed: {
    userInfo () {
      return this.$store.state.user
    }
  },
  methods: {
    init () {
      console.log("Vue-Router", this.$router)
    }
  }
}
</script>

<style>

</style>