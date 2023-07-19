import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  name:"Root",
  render: h => h(App),
}).$mount('#app')
