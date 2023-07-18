<template>
  <div class="hello">
    <h2>我是Child 1组件:{{value}}</h2>
    <GrandChild11></GrandChild11>
  </div>
</template>

<script>
import GrandChild11 from './GrandChild1-1.vue';
export default {
  name: 'Child1',
  props:['value'],
  // model:{
  //   prop:"msg123123123123",
  //   event:"input45678"
  // },
  components:{
    GrandChild11
  },
  mounted(){
    setTimeout(()=>{
      this.$emit('input',"我是子组件的数据")
    },5000)
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
