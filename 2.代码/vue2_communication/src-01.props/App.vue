<template>
  <div id="app">
    <h1>我是APP组件:{{ count }}</h1>

    <Child1 :count="count"></Child1>
    
    <Child2 :fn="addCount"></Child2>
    <!-- <Child2 :fn="$options.addCount"></Child2> -->
    <!-- <Child2 :fn="0x001"></Child2> -->
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
  },
  methods:{
    addCount(val){
      console.log('addCount',val,this);
      this.count += val;
    }
  },
  // addCount(val){
  //   console.log('addCount',val,this);
  //   this.count += val;
  // }
}
</script>

<style>
#app{
  width:80%;
  padding:20px;
  border:1px solid;
}
</style>
