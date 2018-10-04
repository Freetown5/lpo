// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './App'
import VueRouter from 'vue-router'
import Home from 'components/Home'
import NewResource from 'components/NewResource'

Vue.use(VueFire)
Vue.use(VueMaterial)
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/newResource', component: NewResource}
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
