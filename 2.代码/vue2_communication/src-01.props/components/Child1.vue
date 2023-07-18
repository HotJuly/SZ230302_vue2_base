<template>
  <div class="hello">
    <h2>我是Child 1组件:{{count}}</h2>
    <GrandChild11></GrandChild11>
  </div>
</template>

<script>
import GrandChild11 from './GrandChild1-1.vue';
export default {
  name: 'Child1',
  props:["count"],
  // props:{
  //   count:Number
  // },
  // props:{
  //   count:{
  //     type:Number,
  //     default:0,
  //     required:true
  //   }
  // },
  components:{
    GrandChild11
  }
}
</script>

<style scoped>
.hello{
  width:80%;
  padding:20px;
  border:1px solid;
  margin-bottom:20px;
}
</style>
