<template>
  <div class="hello">
    <h2 @click="handleClick">我是Child 1组件:{{count123}}</h2>
    <GrandChild11></GrandChild11>
  </div>
</template>

<script>
import GrandChild11 from './GrandChild1-1.vue';
export default {
  name: 'Child1',
  props:["count123"],
  methods:{
    handleClick(){
      this.$emit('update:count123',3);
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
