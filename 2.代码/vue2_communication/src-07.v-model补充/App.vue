<template>
  <div id="app">
    <h1>我是APP组件</h1>

    <button @click="isShow=!isShow">父组件用于切换Child的显示隐藏</button>

    <Child1 v-model="isShow" v-show="isShow"></Child1>

    
    <!-- <Child2></Child2> -->
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'

export default {
  name: 'App',
  data(){
    return{
      isShow:true
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
