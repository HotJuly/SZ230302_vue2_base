<template>
  <div id="app">
    <h1>我是APP组件</h1>

    <Child1 a="1" b="2" c="3" ></Child1>
    
    <!-- <Child2 @abc="()=>{}" @ccc="()=>{}" @ddd="()=>{}"></Child2> -->
    <Child2 v-on="{
      click:handleClick,
      ccc:()=>{},
      ddd:()=>{}
    }"></Child2>
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'

export default {
  name: 'App',
  methods:{
    handleClick(){
      console.log('哎呀,我被点了')
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
