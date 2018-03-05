<template>
  <div id="about">
      <div id="about-message">
          <h1>about</h1>
          <p>{{aboutMessage}}</p>
      </div>
      

  </div>
</template>

<script>
export default {
  name:'about',
  data () {
      return {
          aboutMessage: '我是about页面'
      }
  }

}
</script>

<style lang="stylus" scoped>
#about{
    height 100%
    weight 100%
    }
</style>

