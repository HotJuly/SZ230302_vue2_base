<template>
  <div id="app">
    <h1>我是APP组件</h1>

    <Child1></Child1>
    
    <Child2></Child2>
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'

export default {
  name: 'App',
  mounted(){
    this.$bus.$emit('sendMsg',123)
  },
  components: {
    Child1,
    Child2
  }
}
</script>

<style>
#app{
  width:80%;
  padding:20px;
  border:1px solid;
}
</style>
