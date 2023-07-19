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
  data(){
    return{
      aaa:666
    }
  },
  components:{
    GrandChild11
  },
  mounted(){
    // console.log('Child1',this.$parent.msg)
    // console.log('$root',this.$root.$options.name)
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
