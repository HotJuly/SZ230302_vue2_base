<template>
  <div class="hello">
    <h2>我是Child 1组件 a:{{ a }}</h2>
    <!-- <GrandChild11 :b="b" :c="c"></GrandChild11> -->

    <!-- <GrandChild11 v-bind="{
      b:6,
      c:7
    }"></GrandChild11>  -->
    <!-- 以上代码,等同于以下代码 -->
    <!-- <GrandChild11 :b="6" :c="7"></GrandChild11> -->

    <GrandChild11 v-bind="$attrs"></GrandChild11> 

    
  </div>
</template>

<script>
import GrandChild11 from './GrandChild1-1.vue';
export default {
  name: 'Child1',
  // props:['a','b','c'],
  props:['a'],
  mounted(){
    // console.log('a',this.a)
    // console.log('b',this.$attrs)
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
