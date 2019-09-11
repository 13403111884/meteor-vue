<template>
  <div>
    <h1>user</h1>
    <p>
      名字： {{userInfo.userName}}
    </p>
    <p>
      年龄： {{userInfo.userAge}}
    </p>
    <QRadio v-model="option" val="opt1" label="Option 1" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      option: ''
    }
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