import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();

new Vue({
  beforeCreate(){
    // Vue.prototype.$bus = new Vue();
    // Vue.prototype.$bus = this;
  },
  render: h => h(App),
}).$mount('#app')
