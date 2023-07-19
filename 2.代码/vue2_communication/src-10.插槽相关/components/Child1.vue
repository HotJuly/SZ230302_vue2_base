<template>
  <div class="hello">
    <!-- <h2>{{title}},我是Child 1组件</h2> -->

    <slot name="default"></slot>
    <slot name="header"></slot>
    <slot name="footer" :title="title" ></slot>
  </div>
</template>

<script>
import GrandChild11 from './GrandChild1-1.vue';
export default {
  name: 'Child1',
  data(){
    return{
      title:"你好"
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
