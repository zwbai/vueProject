 // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import About from './about'
import Support from './support'
import Talk from './talk'

Vue.config.productionTip = false

/* eslint-disable no-new */
const root = document.createElement('div')
document.body.appendChild(root)   

Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

new Vue({
  el: '#app',
  router,
  render: h=> h(App)
}).$mount(root)

