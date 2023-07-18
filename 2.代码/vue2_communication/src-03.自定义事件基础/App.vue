<template>
  <div id="app">
    <h1 @click="handleClick">我是APP组件:{{count}}</h1>

    <Child1 @click123="handleClick"></Child1>
    
    <Child2 @click.native="handleClick"></Child2>
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'

export default {
  name: 'App',
  data(){
    return{
      count:0
    }
  },
  components: {
    Child1,
    Child2
  },
  methods:{
    handleClick(data){
      console.log('handleClick',data)
      // 将接收到的数据,存放到当前组件的data中
      this.count = data;
    }
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
