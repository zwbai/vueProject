<template>
  <nav id="home-nav">
      <ul>
            <li v-for="item in links">
                <a @click="$goRoute(item.route)">
                    {{item.text}}
                </a>
            </li>
            <router-view></router-view>

      </ul>
      
  </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                // {
                //     text: '/',
                //     route: '/App'

                // },
                {
                    text: '主页',
                    route: '/home'
                },
                {
                    text: '赞助',
                    route: '/support'
                },
                {
                    text: '大家说',
                    route: '/talk'
                },
                {
                    text: 'About',
                    route: '/about'
                }
            ]
        }
    }
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
            margin-left 10px


</style>

