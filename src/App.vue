<template>
    <div id="app">
        <div class="cover bg"></div>
            <homenav></homenav>
            <Header></Header>
            <todo></todo>
            <Footer></Footer>
        <div>
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
        return{

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