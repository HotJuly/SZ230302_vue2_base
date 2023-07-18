<template>
  <div id="app">
    <h1>我是APP组件:{{count}}</h1>

    <!-- <Child1 :count="count"></Child1> -->
    <Child1 :count123.sync="count"></Child1>
    
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'

export default {
  name: 'App',
  data(){
    return{
      count:1
    }
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
