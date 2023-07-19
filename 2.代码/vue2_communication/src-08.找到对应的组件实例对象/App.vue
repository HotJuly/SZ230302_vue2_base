<template>
  <div id="app">
    <h1 ref="h1">我是APP组件</h1>

    <Child1 ref="child"></Child1>
    
    <Child2></Child2>
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'

export default {
  name: 'App',
  data(){
    return{
      msg:"我是App的数据"
    }
  },
  mounted(){
    // console.log('App',this.msg)
    // console.log('$children',this.$children[0].aaa)
    // console.log('$children',this.$children)
    console.log(this.$refs.child.aaa)
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
