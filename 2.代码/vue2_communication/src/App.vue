<template>
  <div id="app">
    <h1>我是APP组件</h1>

    <Child1>
      <template>
        <p>我是默认插槽</p>
      </template>
      <template v-slot:header>
        <h4>我是具名插槽</h4>
      </template>

      <!-- <template #footer="scope">
        <h4>{{scope.title}},我是Footer插槽</h4>
      </template> -->

      <template #footer="{title}">
        <h4>{{title}},我是Footer插槽</h4>
      </template>
    </Child1>
    
    <Child2 />
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'

export default {
  name: 'App',
  components: {
    Child1,
    Child2
  }
}
</script>

<style>
#app{
  width:80%;
  padding:20px;
  border:1px solid;
}
</style>
