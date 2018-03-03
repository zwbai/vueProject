<template>
  <div :class="['todo-item',todo.completed? 'completed':'']">
      <input 
        type="checkbox"
        class="toggle"
        v-model="todo.completed"

      >
     
      <label>{{todo.content}}</label>
      <button class="delete" @click="deleteTodo">X</button>
  </div>
</template>
<script>
export default {
  props: {
      todo: {
          type: Object,
          required: true,
      }
  },
  methods: {
      deleteTodo(){
          this.$emit('del', this.todo.id)
      }
  }
}
</script>

<style lang="stylus" scoped>
.todo-item
    position relative
    width 60%
    margin 0 auto
    height 50px
    font-size 24px
    border-bottom 1px solid rgba(0,0,0,0.06)
    text-align left
    line-height 50px
    background-color #fff
    
    input
        width 40px
        height  40px
        border-radius 50%
        background-color #fff
        float left
        border 0
        
    label 
        line-height 50px
        height 50px
        display inline-block
        float left
    button 
        width 40px
        height 40px
        float right
        margin-top 5px
        border 0
        background #fff
        display none
        font-size 20px
.completed
    input
        width 40px
        height  40px
        border-radius 50%
        // background url('../assets/image/done.jpg')
        float left
        border 0
    label 
        text-decoration   line-through
        color red 
        // background-image url('../assets/image/done.jpg')

.todo-item:hover
    button 
        display block
        cursor pointer

.toggle{
    text-align center 
    width 40px
    height 40px
    position absolute
    top 0
    bottom 0
    margin auto 0
    border none 
    appearance none 
    outline  none 
    &:after{
        content url('../assets/images/round.png')
        position absolute
        left 0px
        cursor pointer
        }
    &:checked:after{
        content url('../assets/images/do.png')
        position absolute
        left 0px
        cursor pointer
        }
    }
.destroy
    position absolute
    top 50%
    right 10px
    bottom 0;
    width 40px
    height 40px
    margin auto 0;
    font-size 30px
    color #cc9a9a;
    margin-bottom 11px
    transition: color 0.2s east-out
    background-color transparent
    appearance none
    border-width 0
    cursor pointer
    outline none
</style>