<template>
  <div id="app">
    <h1 @click="handleClick">我是APP组件:{{user.name}}</h1>

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
      msg: 666,
      user:{
        name:"xiaoming"
      }
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
      // 由于msg属性的值是一个基本数据类型,所以此处是复制了一个666来返回出去
      // 后续修改msg的时候,msg的值会发生变化,但是此处的a存储的只是一个基本数据类型的666,并不是存储了msg属性
      a: this.msg,

      // 注意:此处user属性中,存储的是一个user对象,所以v属性的值应该是user对象的地址值
      v: this.user,
      c: 333
    }
  },
  methods:{
    handleClick(){
      this.msg+=111;
      console.log(this.msg)
    }
  },
  components: {
    Child1:Child1,
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
