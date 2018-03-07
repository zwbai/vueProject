<template>
    <div id="app">
        <div class="cover bg"></div>
            <homenav></homenav>
            <Header></Header>
            <todo></todo>
            <Footer></Footer>
        <div>
            <router-link to="/support">support</router-link>
            <router-link to="/about">About</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.vue'
import Todo from './todo/todo.vue'
import Homenav from './todo/homenav.vue'
export default{
    name: 'App',
    components: {
        Header,
        Homenav,
        Footer,
        Todo,
        },
    data(){
        return {
            links: [
                {
                    text: '/',
                    route: '/App'

                },
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
                    route: '/talk'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
#app{
    height 100%
    weight 100%
}   
</style>