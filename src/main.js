import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 入口文件
new Vue({
  render: h => h(App)
}).$mount('#app')
