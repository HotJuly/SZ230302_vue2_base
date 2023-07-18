<template>
  <div class="gc">
    <h3>我是GrandChild 1-1组件:{{ a }}</h3>
  </div>
</template>

<script>
// var  a = 1;
// var b = a;
// a = 2;
export default {
  name: 'GrandChild1-1',
  inject:["a"]
}
</script>

<style scoped>
.gc {
  width:80%;
  padding: 20px;
  border: 1px solid;
}
</style>