<template>
  <div id="support">
      <div id="support-message">
          <h1>support</h1>
          <p>{{supportMessage}}</p>
      </div>
      

  </div>
</template>

<script>
export default {
  name:'support',
  data () {
      return {
          supportMessage: '我是support页面'
      }
  }

}
</script>

<style lang="stylus" scoped>
#support{
    height 100%
    weight 100%
    }
</style>

