<template>
  <div>
    <h1>user</h1>
    <p>
      名字： {{userInfo.userName}}
    </p>
    <p>
      年龄： {{userInfo.userAge}}
    </p>
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