<template>
  <div id="app">
    <h1>我是APP组件:{{msg}}</h1>

    <!-- <input type="text" v-model="msg"> -->
    <!-- 以下代码是v-model指令对原生input标签的原理分析 -->
    <!-- <input type="text" :value="msg" @input="handleInput"> -->

    <Child1 v-model="msg"></Child1>

  <!-- 以下代码是v-model指令的原理分析,不需要开发时书写 -->
    <!-- <Child1 :value="msg" @input="(data)=>msg=data"></Child1> -->
    
    <!-- <Child2></Child2> -->
  </div>
</template>

<script>
var obj = {name:"xiaoming"};
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'

export default {
  name: 'App',
  data(){
    return{
      msg:"我是APP的初始数据"
    }
  },
  methods:{
    handleInput(event){
      // console.log('handleInput',event)
      const value = event.target.value;
      this.msg = value;
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
