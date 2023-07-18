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
  data() {
    return {
      msg: 666
    }
  },
  // provide:{
  //   // 该写法不行,因为provide对象创建的时候,配置对象才创建,组件实例还没有创建成功,没有this
  //   // a:this.msg,
  //   a:1,
  //   v:2,
  //   c:333
  // },
  provide() {
    // 内部的这个对象,只有等provide函数执行的时候才会生成
    // 而provide函数,会在data函数执行之后才会执行
    // console.log('provide',this)
    return {
      a: this.msg,
      v: 2,
      c: 333
    }
  },
  components: {
    Child1,
    Child2
  }
}
</script>

<style>
#app {
  width: 80%;
  padding: 20px;
  border: 1px solid;
}
</style>
