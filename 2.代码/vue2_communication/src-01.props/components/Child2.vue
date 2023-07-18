<template>
  <div class="hello">
    <h2 @click="handleClick">我是Child 2组件</h2>
    <GrandChild21></GrandChild21>
  </div>
</template>

<script>
import GrandChild21 from './GrandChild2-1.vue';
export default {
  name: 'Child2',
  props:["fn"],
  methods:{
    handleClick(){
      // console.log(11111)
      this.fn.call(this,345);
    } 
  },
  components: {
    GrandChild21
  }
}
</script>

<style scoped>
.hello {
  width:80%;
  padding: 20px;
  border: 1px solid;
}
</style>
