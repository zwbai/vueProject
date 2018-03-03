<template>
    <div id="app">
        <div class="cover bg"></div>
            <Header></Header>
            <todo></todo>
            <Footer></Footer>
        
    </div>
</template>

<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.vue'
import Todo from './todo/todo.vue'
export default{
    components: {
        Header,
        Footer,
        Todo,
        },
    data(){
        return {
            test:'abcdef'
        }
    }
}
</script>

<style lang="stylus" scoped>
#app{
    
}   
</style>