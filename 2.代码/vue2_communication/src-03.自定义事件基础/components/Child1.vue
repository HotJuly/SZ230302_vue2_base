<template>
  <div class="hello">
    <h2>我是Child 1组件</h2>
    <GrandChild11></GrandChild11>
  </div>
</template>

<script>
import GrandChild11 from './GrandChild1-1.vue';
export default {
  name: 'Child1',
  components:{
    GrandChild11
  },
  mounted(){
    setTimeout(()=>{
      this.$emit('click123',123)
    },2000)
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
