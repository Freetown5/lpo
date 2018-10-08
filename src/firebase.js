import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyCHs1Kln9hhK9Ua5-b48KPRHWcAj6bMN8U',
  authDomain: 'progsources-2aa3d.firebaseapp.com',
  databaseURL: 'https://progsources-2aa3d.firebaseio.com',
  projectId: 'progsources-2aa3d',
  storageBucket: 'progsources-2aa3d.appspot.com',
  messagingSenderId: '456563027788'
})

export const db = app.database()
export const learningSources = db.ref('learning-type')

