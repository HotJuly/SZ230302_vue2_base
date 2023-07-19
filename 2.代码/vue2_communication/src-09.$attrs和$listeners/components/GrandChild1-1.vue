<template>
  <div class="gc">
    <h3>我是GrandChild 1-1组件 b:{{ b }} c:{{ c }}</h3>
  </div>
</template>

<script>
export default {
  name: 'GrandChild1-1',
  props:["b","c"]
}
</script>

<style scoped>
.gc {
  width:80%;
  padding: 20px;
  border: 1px solid;
}
</style>