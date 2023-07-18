<template>
  <div id="app">
    <h1>我是APP组件</h1>

    <!-- 所以使用两次Child1,Child1是构造函数,所以会生成两个组件实例对象 -->
    <Child1></Child1>
    <Child1></Child1>
    
    <Child2></Child2>
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'

console.log(Child1)

// 每个.vue文件,暴露的其实都是组件的配置对象
// 想要找到这个对象,可以通过this.$options快速找到
export default {
  name: 'App',
  mounted(){
    // console.log('vm',this)
  },
  // 这里其实就是根据配置对象,来生成了对应的构造函数
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
