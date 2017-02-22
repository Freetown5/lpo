import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase'

Vue.use(Vuex)

let config = {
  apiKey: 'AIzaSyCHs1Kln9hhK9Ua5-b48KPRHWcAj6bMN8U',
  authDomain: 'progsources-2aa3d.firebaseapp.com',
  databaseURL: 'https://progsources-2aa3d.firebaseio.com',
  storageBucket: 'progsources-2aa3d.appspot.com',
  messagingSenderId: '456563027788'
}
let app = Firebase.initializeApp(config)
let db = app.database()
let sourceRef = db.ref('learning-type')

export const store = new Vuex.Store({
  state: {
    name: 'app',
    firebase: {
      source: sourceRef
    }
  }
})
