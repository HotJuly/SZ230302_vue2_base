<template>
  <div class="hello">
    <h2>我是Child 1组件 当前显示状态:{{value}}</h2>
    <button @click="changeShow">我想关闭自己</button>
    <GrandChild11></GrandChild11>
  </div>
</template>

<script>
import GrandChild11 from './GrandChild1-1.vue';
export default {
  name: 'Child1',
  props:["value"],
  methods:{
    changeShow(){
      this.$emit('input',false);
    }
  },
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
