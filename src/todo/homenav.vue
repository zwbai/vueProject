<template>
  <nav id="home-nav">
      <ul>
            <li>北麦课思</li>
            <li>大家说</li>
            <li>关于我们</li>
            <li>加入我们</li>
            <li v-for="item in links">
                <a @click="$goRoute(item.route)">
                    {{item.text}}
                </a>
            </li>
      </ul>
      
  </nav>
</template>

<script>
export default {
    
}
</script>


<style lang="stylus" scoped>
#home-nav
    width 100%
    z-index 5
    position fixed 
    vertical-align middle
    top 0
    left 0
    font-size 16px
    background-color #4cb07b
    ul 
        font-size 1.5em
        width 100%
        li 
            display inline-block


</style>

