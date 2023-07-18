<template>
  <div class="gc">
    <h3 @click="changeName">我是GrandChild 2-1组件:{{v.name}}</h3>
  </div>
</template>

<script>
// var obj = {
//   name:"xiaoming"
// };

// var obj2 = obj;

// obj.name="wangxiaoming";

  export default {
    name:'GrandChild2-1',
    inject:['v'],
    methods:{
      changeName(){
        this.v.name="wangxiaoming";
      }
    }
  }
</script>

<style scoped>
  
.gc {
  width:80%;
  padding: 20px;
  border: 1px solid;
}
</style>