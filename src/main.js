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
import './firebase'

Vue.use(VueFire)
Vue.use(VueMaterial)
Vue.use(VueRouter)
// Vue.component('app-home', Home)

// let config = {
//   apiKey: 'AIzaSyCHs1Kln9hhK9Ua5-b48KPRHWcAj6bMN8U',
//   authDomain: 'progsources-2aa3d.firebaseapp.com',
//   databaseURL: 'https://progsources-2aa3d.firebaseio.com',
//   storageBucket: 'progsources-2aa3d.appspot.com',
//   messagingSenderId: '456563027788'
// }

// let app = Firebase.initializeApp(config)
// let db = app.database()
// let sourceRef = db.ref('learning-type')

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
  // firebase: {
  //   learningType: sourceRef
  // },
  template: '<App/>',
  components: { App }
})
