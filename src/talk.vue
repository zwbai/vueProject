<template>
  <div id="talk">
      <div id="talk-message">
          <h1>talk</h1>
          <p>{{talkMessage}}</p>
      </div>
      

  </div>
</template>

<script>
export default {
  name:'talk',
  data () {
      return {
          talkMessage: '我是talk页面'
      }
  }

}
</script>

<style lang="stylus" scoped>
#talk{
    height 100%
    weight 100%
    }
</style>

